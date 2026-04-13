import { Song } from './types';

export const myname: Song = {
  id: 'myname',
  title: '내 이름 맑음',
  emoji: '☀️',
  color: '#ffd700',
  chantData: [
    { type: 'section', text: '[시작]', effect: 'glow' },
    { type: 'chant', text: '맑음! 맑음!', subtext: '두 번 외치기', intensity: 5, action: 'raise', timing: 0, split: 'all', effect: 'pulse' },
    { type: 'break', text: '' },
    
    { type: 'lyric', text: '내 이름은 맑음', intensity: 3, action: 'wave' },
    { type: 'chant', text: '☀️ 맑음! ☀️', subtext: '함성!', intensity: 5, action: 'jump', split: 'all', effect: 'flash' },
    { type: 'break', text: '' },
    
    { type: 'section', text: '[후렴]', effect: 'glow' },
    { type: 'lyric', text: '언제나 맑음', intensity: 4, action: 'sway' },
    { type: 'chant', text: '👏 짝짝-짝짝 👏', subtext: '박수', intensity: 5, action: 'clap', split: 'all', effect: 'bounce' },
  ],
};
