import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Song, Lyric } from '../songs';

interface SongDetailScreenProps {
  song: Song;
  onBack: () => void;
}

export const SongDetailScreen: React.FC<SongDetailScreenProps> = ({
  song,
  onBack,
}) => {
  const [showMemberNames, setShowMemberNames] = useState(true);

  const renderLine = (line: Lyric, index: number, prevLine?: Lyric) => {
    const showVerse = !prevLine || prevLine.verse !== line.verse;
    
    return (
      <View key={index}>
        {/* 절 표시 (1절, 2절 등) */}
        {showVerse && line.verse && (
          <Text style={styles.verseText}>
            {line.verse}
          </Text>
        )}
        
        {/* 가사 라인 */}
        <View style={styles.lyricContainer}>
          {/* 멤버 이름 표시 */}
          {showMemberNames && (
            <Text style={[
              styles.memberText,
              line.member === '바위게' && styles.memberTextAll,
              line.member === '쵸단' && styles.memberTextChodan
            ]}>
              {line.member}
            </Text>
          )}
          
          {/* 가사 텍스트 */}
          <Text style={[
            styles.lyricText,
            line.member === '바위게' && styles.lyricTextAll,
            line.member === '쵸단' && styles.lyricTextChodan
          ]}>
            {line.text}
          </Text>
        </View>
      </View>
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
            showMemberNames && styles.toggleButtonActive,
            showMemberNames && { backgroundColor: '#a78bfa' },
          ]}
          onPress={() => setShowMemberNames(true)}
        >
          <Text
            style={[
              styles.toggleButtonText,
              showMemberNames && styles.toggleButtonTextActive,
            ]}
          >
            멤버 표시
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            !showMemberNames && styles.toggleButtonActive,
            !showMemberNames && { backgroundColor: '#a78bfa' },
          ]}
          onPress={() => setShowMemberNames(false)}
        >
          <Text
            style={[
              styles.toggleButtonText,
              !showMemberNames && styles.toggleButtonTextActive,
            ]}
          >
            가사만 보기
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.contentContainer}>
          {song.lyrics.map((line, index) => 
            renderLine(line, index, index > 0 ? song.lyrics[index - 1] : undefined)
          )}
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
  verseText: {
    fontSize: 18,
    fontFamily: 'MonaS12-Bold',
    color: '#8b5cf6',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  lyricContainer: {
    flexDirection: 'row',
    marginBottom: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  memberText: {
    fontSize: 14,
    fontFamily: 'MonaS12-Bold',
    color: '#a78bfa',
    width: 60,
    marginRight: 10,
  },
  memberTextAll: {
    color: '#f59e0b',
  },
  memberTextChodan: {
    color: '#ec4899',
  },
  lyricText: {
    flex: 1,
    fontSize: 15,
    fontFamily: 'MonaS12',
    color: '#4a4a5e',
    lineHeight: 22,
  },
  lyricTextAll: {
    fontFamily: 'MonaS12-Bold',
    color: '#f59e0b',
  },
  lyricTextChodan: {
    fontFamily: 'MonaS12-Bold',
    color: '#ec4899',
  },
});
