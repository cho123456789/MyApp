/**
 * QWER 응원법 앱
 * @format
 */
import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { SongListScreen, SongDetailScreen } from './screens';
import { ALL_SONGS, Song } from './songs';

type Screen = 'list' | 'detail';

function App(): React.JSX.Element {
  const [currentScreen, setCurrentScreen] = useState<Screen>('list');
  const [selectedSong, setSelectedSong] = useState<Song>(ALL_SONGS[0]);

  const handleSelectSong = (song: Song) => {
    setSelectedSong(song);
    setCurrentScreen('detail');
  };

  const handleBackToList = () => {
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
      ) : (
        <SongDetailScreen song={selectedSong} onBack={handleBackToList} />
      )}
    </>
  );
}

export default App;
