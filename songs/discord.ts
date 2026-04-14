import { Song } from './types';
import { starharmony } from './discord-subsongs/starharmony';
import { discordsong } from './discord-subsongs/discordsong';
import { mysterydiary } from './discord-subsongs/mysterydiary';

export const discord: Song = {
  id: 'discord',
  title: 'Discord',
  emoji: '',
  color: '#7289da',
  image: require('../assets/discord_main.png'),
  lyrics: [
    { member: 'All', text: 'Discord 앨범에는 3개의 곡이 수록되어 있습니다' },
    { member: 'All', text: '1. 별의 하모니' },
    { member: 'All', text: '2. Discord' },
    { member: 'All', text: '3. 수수께끼 다이어리' },
  ],
  subSongs: [
    starharmony,
    discordsong,
    mysterydiary,
  ],
};
