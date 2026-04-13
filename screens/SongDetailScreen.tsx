import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Song, ChantLine } from '../songs';

interface SongDetailScreenProps {
  song: Song;
  onBack: () => void;
}

export const SongDetailScreen: React.FC<SongDetailScreenProps> = ({
  song,
  onBack,
}) => {
  const [showChantOnly, setShowChantOnly] = useState(false);

  const renderLine = (line: ChantLine, index: number) => {
    // 응원법만 보기 모드일 때는 응원 파트만 표시
    if (
      showChantOnly &&
      line.type !== 'chant' &&
      line.type !== 'section' &&
      line.type !== 'title'
    ) {
      return null;
    }

    if (line.type === 'break') {
      return <View key={index} style={styles.break} />;
    }

    if (line.type === 'title') {
      return (
        <Text key={index} style={styles.titleText}>
          {line.text}
        </Text>
      );
    }

    if (line.type === 'section') {
      return (
        <Text key={index} style={styles.section}>
          {line.text}
        </Text>
      );
    }

    if (line.type === 'chant') {
      return (
        <View
          key={index}
          style={styles.chantContainer}
        >
          <Text style={styles.chantText}>{line.text}</Text>
          {line.subtext && (
            <Text style={styles.chantSubtext}>{line.subtext}</Text>
          )}
        </View>
      );
    }

    // lyric
    return (
      <Text key={index} style={styles.lyricText}>
        {line.text}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← 뒤로</Text>
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>
            {song.emoji} {song.title}
          </Text>
          <Text style={styles.headerSubtitle}>응원법</Text>
        </View>
      </View>

      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            !showChantOnly && styles.toggleButtonActive,
            !showChantOnly && { backgroundColor: '#a78bfa' },
          ]}
          onPress={() => setShowChantOnly(false)}
        >
          <Text
            style={[
              styles.toggleButtonText,
              !showChantOnly && styles.toggleButtonTextActive,
            ]}
          >
            전체 보기
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            showChantOnly && styles.toggleButtonActive,
            showChantOnly && { backgroundColor: '#a78bfa' },
          ]}
          onPress={() => setShowChantOnly(true)}
        >
          <Text
            style={[
              styles.toggleButtonText,
              showChantOnly && styles.toggleButtonTextActive,
            ]}
          >
            응원법만 보기
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.contentContainer}>
          {song.chantData.map((line, index) => renderLine(line, index))}
        </View>
        <View style={styles.footer}>
          <Text style={[styles.footerText, { color: song.color }]}>
            💜 QWER 화이팅! 💜
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f0ff',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#a78bfa',
    borderBottomWidth: 3,
    borderBottomColor: '#c4b5fd',
    shadowColor: '#8b5cf6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  backButton: {
    marginBottom: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#1f1f1f',
    fontFamily: 'MonaS12-Bold',
  },
  headerTitleContainer: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontFamily: 'MonaS12-Bold',
    color: '#1f1f1f',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 14,
    fontFamily: 'MonaS12',
    color: '#3f3f3f',
    textAlign: 'center',
    marginTop: 5,
  },
  toggleContainer: {
    flexDirection: 'row',
    padding: 15,
    gap: 10,
    backgroundColor: '#f5f0ff',
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  toggleButtonActive: {
    borderColor: '#a855f7',
  },
  toggleButtonText: {
    fontSize: 16,
    fontFamily: 'MonaS12-Bold',
    color: '#888',
    textAlign: 'center',
  },
  toggleButtonTextActive: {
    color: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  titleText: {
    fontSize: 24,
    fontFamily: 'MonaS12-Bold',
    color: '#c026d3',
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 5,
  },
  section: {
    fontSize: 18,
    fontFamily: 'MonaS12-Bold',
    color: '#8b5cf6',
    marginTop: 10,
    marginBottom: 5,
  },
  lyricText: {
    fontSize: 15,
    fontFamily: 'MonaS12',
    color: '#4a4a5e',
    marginBottom: 6,
    lineHeight: 22,
  },
  chantContainer: {
    padding: 15,
    borderRadius: 12,
    marginVertical: 8,
    backgroundColor: '#a78bfa',
    borderLeftWidth: 4,
    borderLeftColor: '#8b5cf6',
    shadowColor: '#8b5cf6',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 6,
  },
  chantText: {
    fontSize: 17,
    fontFamily: 'MonaS12-Bold',
    color: '#1a1a2e',
    textAlign: 'center',
    lineHeight: 24,
  },
  chantSubtext: {
    fontSize: 13,
    fontFamily: 'MonaS12',
    color: '#2a2a3e',
    textAlign: 'center',
    marginTop: 5,
    fontStyle: 'italic',
  },
  break: {
    height: 12,
  },
  footer: {
    padding: 30,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 18,
    fontFamily: 'MonaS12-Bold',
  },
});
