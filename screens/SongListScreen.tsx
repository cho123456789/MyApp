import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { ALL_SONGS, Song } from '../songs';

interface SongListScreenProps {
  onSelectSong: (song: Song) => void;
  selectedSong: Song;
}

export const SongListScreen: React.FC<SongListScreenProps> = ({
  onSelectSong,
  selectedSong,
}) => {
  const renderSongItem = ({ item }: { item: Song }) => (
    <TouchableOpacity
      style={[
        styles.songItem,
        selectedSong.id === item.id && {
          backgroundColor: item.color,
          borderColor: item.color,
        },
      ]}
      onPress={() => onSelectSong(item)}
    >
      <Text style={styles.songEmoji}>{item.emoji}</Text>
      <Text
        style={[
          styles.songTitle,
          selectedSong.id === item.id && styles.songTitleSelected,
        ]}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={[styles.header, { backgroundColor: selectedSong.color }]}>
        <Text style={styles.headerTitle}>🎸 QWER 응원법 🎸</Text>
        <Text style={styles.headerSubtitle}>곡을 선택하세요</Text>
      </View>

      <FlatList
        data={ALL_SONGS}
        renderItem={renderSongItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.songListContainer}
      />
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
  songListContainer: {
    padding: 20,
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginBottom: 12,
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  songEmoji: {
    fontSize: 32,
    marginRight: 15,
  },
  songTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  songTitleSelected: {
    color: '#fff',
  },
});
