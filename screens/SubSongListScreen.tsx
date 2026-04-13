import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { Song } from '../songs';

interface SubSongListScreenProps {
  album: Song;
  onSelectSong: (song: Song) => void;
  onBack: () => void;
}

export const SubSongListScreen: React.FC<SubSongListScreenProps> = ({
  album,
  onSelectSong,
  onBack,
}) => {
  return (
    <View style={[styles.container, { backgroundColor: album.color ? `${album.color}20` : '#2d1b4e' }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← 뒤로</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{album.emoji} {album.title}</Text>
        <Text style={styles.headerSubtitle}>수록곡 선택</Text>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.songListContainer}>
        {album.subSongs?.map((song, index) => (
          <TouchableOpacity
            key={song.id}
            style={[styles.songItem, { borderLeftColor: song.color }]}
            onPress={() => onSelectSong(song)}
          >
            <View style={styles.songNumber}>
              <Text style={styles.songNumberText}>{index + 1}</Text>
            </View>
            <View style={styles.songInfo}>
              <Text style={styles.songEmoji}>{song.emoji}</Text>
              <Text style={styles.songTitle}>{song.title}</Text>
            </View>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>
        ))}
        
        {album.image && (
          <View style={styles.imageContainer}>
            <Image 
              source={album.image} 
              style={styles.albumImage}
              resizeMode="cover"
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d1b4e',
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
  scrollView: {
    flex: 1,
  },
  songListContainer: {
    padding: 20,
  },
  imageContainer: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  albumImage: {
    width: '100%',
    height: 350,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: 'rgba(196, 181, 253, 0.5)',
    shadowColor: '#a78bfa',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8,
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginBottom: 15,
    backgroundColor: 'rgba(233, 213, 255, 0.9)',
    borderRadius: 15,
    borderLeftWidth: 5,
    borderWidth: 1,
    borderColor: 'rgba(196, 181, 253, 0.8)',
    shadowColor: '#8b5cf6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  songNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(167, 139, 250, 0.5)',
    borderWidth: 2,
    borderColor: 'rgba(139, 92, 246, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  songNumberText: {
    fontSize: 18,
    fontFamily: 'MonaS12-Bold',
    color: '#1a1a2e',
  },
  songInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  songEmoji: {
    fontSize: 28,
    marginRight: 12,
  },
  songTitle: {
    fontSize: 20,
    fontFamily: 'MonaS12-Bold',
    color: '#1a1a2e',
  },
  arrow: {
    fontSize: 24,
    color: 'rgba(26, 26, 46, 0.6)',
    marginLeft: 10,
  },
});
