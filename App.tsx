/**
 * QWER 응원법 앱
 * @format
 */
import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { SongListScreen, SongDetailScreen, SubSongListScreen } from './screens';
import { ALL_SONGS, Song } from './songs';

type Screen = 'list' | 'sublist' | 'detail';

function App(): React.JSX.Element {
  const [currentScreen, setCurrentScreen] = useState<Screen>('list');
  const [previousScreen, setPreviousScreen] = useState<Screen>('list');
  const [selectedSong, setSelectedSong] = useState<Song>(ALL_SONGS[0]);
  const [selectedAlbum, setSelectedAlbum] = useState<Song | null>(null);

  const handleSelectSong = (song: Song) => {
    // 서브곡이 있는 앨범이면 서브곡 리스트로
    if (song.subSongs && song.subSongs.length > 0) {
      setSelectedAlbum(song);
      setPreviousScreen('list');
      setCurrentScreen('sublist');
    } else {
      // 서브곡이 없으면 바로 응원법 화면으로
      setSelectedSong(song);
      setPreviousScreen('list');
      setCurrentScreen('detail');
    }
  };

  const handleSelectSubSong = (song: Song) => {
    setSelectedSong(song);
    setPreviousScreen('sublist');
    setCurrentScreen('detail');
  };

  const handleBackFromDetail = () => {
    // 이전 화면으로 돌아가기
    setCurrentScreen(previousScreen);
  };

  const handleBackFromSubList = () => {
    setCurrentScreen('list');
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      {currentScreen === 'list' ? (
        <SongListScreen
          onSelectSong={handleSelectSong}
          selectedSong={selectedSong}
        />
      ) : currentScreen === 'sublist' && selectedAlbum ? (
        <SubSongListScreen
          album={selectedAlbum}
          onSelectSong={handleSelectSubSong}
          onBack={handleBackFromSubList}
        />
      ) : (
        <SongDetailScreen song={selectedSong} onBack={handleBackFromDetail} />
      )}
    </>
  );
}

export default App;
