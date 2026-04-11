import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { ALL_SONGS, Song } from '../songs';

interface SongListScreenProps {
  onSelectSong: (song: Song) => void;
  selectedSong: Song;
}

const { width, height } = Dimensions.get('window');

// 이미지 매핑
const songImages: { [key: string]: any } = {
  discord: require('../assets/discord_title.jpg'),
  gominjungdok: require('../assets/gomin_title.jpg'),
  nunmulchamgi: require('../assets/dear_title.jpg'),
  myname: require('../assets/my_name_title.jpg'),
  ceremony: require('../assets/gomin_title.jpg'), // 임시 이미지 (나중에 ceremony_title.jpg로 교체)
};

export const SongListScreen: React.FC<SongListScreenProps> = ({
  onSelectSong,
  selectedSong,
}) => {
  const renderMainCard = (song: Song) => {
    const imageSource = songImages[song.id];
    const isSelected = selectedSong.id === song.id;
    
    return (
      <TouchableOpacity
        key={song.id}
        style={[
          styles.mainCard,
          isSelected && styles.selectedCard,
        ]}
        onPress={() => onSelectSong(song)}
        activeOpacity={0.7}
      >
        <View style={styles.mainCardOuter}>
          <View style={[styles.buttonInner, isSelected && styles.mainCardInnerSelected]}>
            <ImageBackground
              source={imageSource}
              style={styles.imageBackground}
              imageStyle={styles.mainCardImageStyle}
              resizeMode="cover"
            >
              {isSelected && <View style={styles.mainCardSelectedOverlay} />}
              <View style={styles.mainCardTitleOverlay}>
                <Text style={styles.mainCardTitle}>{song.title}</Text>
              </View>
            </ImageBackground>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderSmallCard = (song: Song) => {
    const imageSource = songImages[song.id];
    const isSelected = selectedSong.id === song.id;
    
    return (
      <TouchableOpacity
        key={song.id}
        style={[
          styles.smallCard,
          isSelected && styles.selectedCard,
        ]}
        onPress={() => onSelectSong(song)}
        activeOpacity={0.7}
      >
        <View style={styles.buttonOuter}>
          <View style={[styles.buttonInner, isSelected && styles.buttonInnerSelected]}>
            <ImageBackground
              source={imageSource}
              style={styles.imageBackground}
              imageStyle={styles.imageStyle}
              resizeMode="cover"
            >
              {isSelected && <View style={styles.selectedOverlay} />}
              <View style={styles.titleOverlay}>
                <Text style={styles.albumTitle}>{song.title}</Text>
              </View>
            </ImageBackground>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🎸 QWER 응원법 🎸</Text>
        <Text style={styles.headerSubtitle}>곡을 터치하세요</Text>
      </View>

      <View style={styles.gridContainer}>
        {/* 메인 카드 (세레모니) */}
        <View style={styles.mainCardContainer}>
          {renderMainCard(ALL_SONGS[4])}
        </View>
        
        {/* 하단 2x2 그리드 */}
        <View style={styles.smallCardsContainer}>
          <View style={styles.smallCardsRow}>
            {renderSmallCard(ALL_SONGS[0])}
            {renderSmallCard(ALL_SONGS[1])}
          </View>
          <View style={styles.smallCardsRow}>
            {renderSmallCard(ALL_SONGS[2])}
            {renderSmallCard(ALL_SONGS[3])}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f1e',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 15,
    paddingHorizontal: 20,
    backgroundColor: '#1a1a2e',
    borderBottomWidth: 2,
    borderBottomColor: '#ff69b4',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#b8b8ff',
    textAlign: 'center',
    marginTop: 4,
  },
  gridContainer: {
    flex: 1,
    padding: 10,
  },
  mainCardContainer: {
    paddingVertical: 5,
    alignItems: 'center',
  },
  mainCard: {
    width: width - 30,
    height: (height - 220) * 0.55,
    maxHeight: 300,
  },
  smallCardsContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 150,
  },
  smallCardsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,
  },
  smallCard: {
    width: (width - 60) / 2,
    height: (width - 60) / 2,
    marginHorizontal: 10,
  },
  selectedCard: {
    transform: [{ scale: 0.95 }],
  },
  buttonOuter: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    padding: 3,
    backgroundColor: '#2a2a3e',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 10,
  },
  buttonInner: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 2,
    borderTopColor: 'rgba(255, 255, 255, 0.3)',
    borderLeftColor: 'rgba(255, 255, 255, 0.2)',
    borderRightColor: 'rgba(0, 0, 0, 0.3)',
    borderBottomColor: 'rgba(0, 0, 0, 0.4)',
  },
  buttonInnerSelected: {
    borderTopColor: 'rgba(255, 105, 180, 0.8)',
    borderLeftColor: 'rgba(255, 105, 180, 0.6)',
    borderRightColor: 'rgba(255, 105, 180, 0.6)',
    borderBottomColor: 'rgba(255, 105, 180, 0.8)',
    borderWidth: 4,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  imageStyle: {
    borderRadius: 8,
    resizeMode: 'cover',
  },
  selectedOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 105, 180, 0.2)',
    borderRadius: 8,
  },
  titleOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  albumTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  // 메인 카드 스타일
  mainCardOuter: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    padding: 5,
    backgroundColor: '#2a2a3e',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.6,
    shadowRadius: 15,
    elevation: 20,
  },
  mainCardInnerSelected: {
    borderTopColor: 'rgba(155, 89, 182, 0.9)',
    borderLeftColor: 'rgba(155, 89, 182, 0.7)',
    borderRightColor: 'rgba(155, 89, 182, 0.7)',
    borderBottomColor: 'rgba(155, 89, 182, 0.9)',
    borderWidth: 5,
  },
  mainCardImageStyle: {
    borderRadius: 14,
    resizeMode: 'cover',
  },
  mainCardSelectedOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(155, 89, 182, 0.25)',
    borderRadius: 14,
  },
  mainCardTitleOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  mainCardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});
