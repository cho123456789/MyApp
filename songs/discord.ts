import { Song } from './types';

export const discord: Song = {
  id: 'discord',
  title: 'Discord',
  emoji: '🎮',
  color: '#7289da',
  chantData: [
    { type: 'section', text: '[시작]' },
    { type: 'chant', text: 'Discord! Discord!', subtext: '두 번 외치기' },
    { type: 'break', text: '' },
    
    { type: 'lyric', text: '디스코드에서 만난 너' },
    { type: 'chant', text: '🎮 디스코드! 🎮', subtext: '함성!' },
    { type: 'break', text: '' },
    
    { type: 'section', text: '[후렴]' },
    { type: 'lyric', text: 'Discord Discord' },
    { type: 'chant', text: '👏 짝짝짝-짝짝 👏', subtext: '박수 리듬' },
  ],
};
