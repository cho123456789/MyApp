import { Song } from '../types';

export const discordsong: Song = {
  id: 'discordsong',
  title: 'Discord',
  emoji: '👾',
  color: '#7289da',
  chantData: [
    { type: 'section', text: '[시작]', effect: 'glow' },
    { type: 'chant', text: 'Discord! Discord!', subtext: '두 번 외치기', intensity: 5, action: 'raise', timing: 0, split: 'all', effect: 'pulse' },
    { type: 'break', text: '' },
    
    { type: 'lyric', text: '디스코드에서 만난 너', intensity: 3, action: 'sway' },
    { type: 'lyric', text: '목소리만으로도 설레', intensity: 3 },
    { type: 'break', text: '' },
    
    { type: 'chant', text: '👾 디스코드! 👾', subtext: '함성!', intensity: 5, action: 'jump', split: 'all', effect: 'flash' },
    { type: 'break', text: '' },
    
    { type: 'section', text: '[후렴]', effect: 'glow' },
    { type: 'lyric', text: 'Discord Discord 너와 나', intensity: 4, action: 'wave' },
    { type: 'chant', text: '👏 짝짝짝-짝짝 👏', subtext: '박수 리듬', intensity: 5, action: 'clap', split: 'all', effect: 'bounce' },
    { type: 'lyric', text: '온라인 속 우리의 이야기', intensity: 4 },
    { type: 'chant', text: '👾 디스코드! 👾', subtext: '큰 소리로!', intensity: 5, action: 'raise', split: 'all', effect: 'pulse' },
  ],
};
