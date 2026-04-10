import { Song } from './types';

export const myname: Song = {
  id: 'myname',
  title: '내 이름 맑음',
  emoji: '☀️',
  color: '#ffd700',
  chantData: [
    { type: 'section', text: '[시작]' },
    { type: 'chant', text: '맑음! 맑음!', subtext: '두 번 외치기' },
    { type: 'break', text: '' },
    
    { type: 'lyric', text: '내 이름은 맑음' },
    { type: 'chant', text: '☀️ 맑음! ☀️', subtext: '함성!' },
    { type: 'break', text: '' },
    
    { type: 'section', text: '[후렴]' },
    { type: 'lyric', text: '언제나 맑음' },
    { type: 'chant', text: '👏 짝짝-짝짝 👏', subtext: '박수' },
  ],
};
