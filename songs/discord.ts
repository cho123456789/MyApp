import { Song } from './types';
import { starharmony } from './discord-subsongs/starharmony';
import { discordsong } from './discord-subsongs/discordsong';
import { mysterydiary } from './discord-subsongs/mysterydiary';

export const discord: Song = {
  id: 'discord',
  title: 'Discord',
  emoji: '🎮',
  color: '#7289da',
  image: require('../assets/discord_main.png'),
  chantData: [
    { type: 'section', text: '[앨범]', effect: 'glow' },
    { type: 'lyric', text: 'Discord 앨범에는 3개의 곡이 수록되어 있습니다', intensity: 3 },
    { type: 'break', text: '' },
    { type: 'lyric', text: '1. 별의 하모니', intensity: 3 },
    { type: 'lyric', text: '2. Discord', intensity: 3 },
    { type: 'lyric', text: '3. 수수께끼 다이어리', intensity: 3 },
  ],
  subSongs: [
    starharmony,
    discordsong,
    mysterydiary,
  ],
};
