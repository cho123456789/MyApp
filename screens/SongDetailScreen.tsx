import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator, // 추가
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import YoutubePlayer from 'react-native-youtube-iframe'; // 추가
import { Song, Lyric } from '../songs';

interface SongDetailScreenProps {
  song: Song;
  onBack: () => void;
}

export const SongDetailScreen: React.FC<SongDetailScreenProps> = ({
  song,
  onBack,
}) => {
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  const renderLine = (line: Lyric, index: number, prevLine?: Lyric) => {
    const showVerse = !prevLine || prevLine.verse !== line.verse;

    return (
      <View key={index}>
        {showVerse && line.verse && (
          <Text style={styles.verseText}>{line.verse}</Text>
        )}
        <View style={styles.lyricContainer}>
          <Text style={[
            styles.memberText,
            line.member === '바위게' && styles.memberTextAll,
            line.member === '쵸단' && styles.memberTextChodan,
          ]}>
            {line.member}
          </Text>
          <Text style={[
            styles.lyricText,
            line.member === '바위게' && styles.lyricTextAll,
            line.member === '쵸단' && styles.lyricTextChodan,
          ]}>
            {line.text}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← 뒤로</Text>
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>
            {song.emoji} {song.title}
          </Text>
          <Text style={styles.headerSubtitle}>응원법 가사</Text>
        </View>
      </View>

      {/* --- 유튜브 영상 섹션 추가됨 --- */}
      {song.youtubeId ? (
        <View style={styles.videoSection}>
          <View style={styles.youtubePlayerContainer}>
            {isVideoLoading && (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#a78bfa" />
              </View>
            )}
            <YoutubePlayer
              height={220}
              width="100%"
              play={true}
              mute={true}
              videoId={song.youtubeId}
              onReady={() => setIsVideoLoading(false)}
              onError={(e) => console.log("Youtube Error: ", e)} // 에러 확인용
            />
          </View>
        </View>
      ) : (
        <View style={{ padding: 20, alignItems: 'center' }}>
          <Text>영상을 불러올 수 없습니다 (ID 없음)</Text>
        </View>
      )}

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {song.lyrics.map((line, index) =>
          renderLine(line, index, index > 0 ? song.lyrics[index - 1] : undefined)
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f0ff',
  },
  header: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#a78bfa',
    borderBottomWidth: 3,
    borderBottomColor: '#c4b5fd',
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
    fontSize: 26,
    fontFamily: 'MonaS12-Bold',
    color: '#1f1f1f',
  },
  headerSubtitle: {
    fontSize: 14,
    fontFamily: 'MonaS12',
    color: '#3f3f3f',
    marginTop: 5,
  },
  // 영상 관련 스타일
  videoSection: {
    padding: 15,
    backgroundColor: '#f5f0ff',
  },
  youtubePlayerContainer: {
    width: '100%',
    height: 220,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#000',
    elevation: 4,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    zIndex: 1,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  verseText: {
    fontSize: 18,
    fontFamily: 'MonaS12-Bold',
    color: '#8b5cf6',
    marginTop: 25,
    marginBottom: 12,
    textAlign: 'center',
  },
  lyricContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  memberText: {
    fontSize: 14,
    fontFamily: 'MonaS12-Bold',
    color: '#a78bfa',
    width: 60,
    marginRight: 10,
  },
  memberTextAll: { color: '#f59e0b' },
  memberTextChodan: { color: '#ec4899' },
  lyricText: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'MonaS12',
    color: '#4a4a5e',
    lineHeight: 24,
  },
  lyricTextAll: { fontFamily: 'MonaS12-Bold', color: '#f59e0b' },
  lyricTextChodan: { fontFamily: 'MonaS12-Bold', color: '#ec4899' },
});