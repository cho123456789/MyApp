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
          style={[styles.chantContainer, { backgroundColor: song.color }]}
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
      <View style={[styles.header, { backgroundColor: song.color }]}>
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
            !showChantOnly && { backgroundColor: song.color },
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
            showChantOnly && { backgroundColor: song.color },
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
    backgroundColor: '#e6f3ff',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#ff69b4',
  },
  backButton: {
    marginBottom: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  headerTitleContainer: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
  },
  toggleContainer: {
    flexDirection: 'row',
    padding: 15,
    gap: 10,
    backgroundColor: '#e6f3ff',
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#ddd',
  },
  toggleButtonActive: {
    borderColor: '#ff69b4',
  },
  toggleButtonText: {
    fontSize: 16,
    fontWeight: '600',
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
    fontWeight: 'bold',
    color: '#ff1493',
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 5,
  },
  section: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4a90e2',
    marginTop: 10,
    marginBottom: 5,
  },
  lyricText: {
    fontSize: 15,
    color: '#333',
    marginBottom: 6,
    lineHeight: 22,
  },
  chantContainer: {
    padding: 15,
    borderRadius: 12,
    marginVertical: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#ff69b4',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  chantText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 24,
  },
  chantSubtext: {
    fontSize: 13,
    color: '#fff',
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
    fontWeight: 'bold',
  },
});
