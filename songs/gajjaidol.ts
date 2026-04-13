import { Song } from './types';

export const gajjaidol: Song = {
  id: 'gajjaidol',
  title: '가짜 아이돌',
  emoji: '🎸',
  color: '#ff6b9d',
  chantData: [
    { type: 'section', text: '[시작]', effect: 'glow' },
    { type: 'chant', text: 'Q! W! E! R!', subtext: '네 번 외치기', intensity: 5, action: 'raise', timing: 0, split: 'all', effect: 'pulse' },
    { type: 'break', text: '' },
    
    { type: 'lyric', text: '가짜 아이돌', intensity: 3, action: 'sway' },
    { type: 'chant', text: '👏 짝짝짝-짝짝 👏', subtext: '박수 리듬', intensity: 4, action: 'clap', split: 'all', effect: 'bounce' },
    { type: 'break', text: '' },
    
    { type: 'lyric', text: '우린 가짜 아이돌', intensity: 3 },
    { type: 'lyric', text: '노래 춤은 못해도', intensity: 3 },
    { type: 'lyric', text: '우린 밴드를 해', intensity: 4, action: 'raise' },
    { type: 'chant', text: '🎸 밴드를 해! 🎸', subtext: '함성!', intensity: 5, action: 'jump', split: 'all', effect: 'flash' },
    { type: 'break', text: '' },
    
    { type: 'section', text: '[후렴]', effect: 'glow' },
    { type: 'lyric', text: '가짜 아이돌 가짜 아이돌', intensity: 4, action: 'wave' },
    { type: 'chant', text: '👏 짝짝-짝짝-짝짝 👏', subtext: '3번 박수', intensity: 5, action: 'clap', split: 'all', effect: 'shake' },
    { type: 'lyric', text: '그래도 우린 최선을 다해', intensity: 4, action: 'raise' },
    { type: 'chant', text: '🙌 최선을! 다해! 🙌', subtext: '큰 소리로!', intensity: 5, action: 'stomp', split: 'all', effect: 'pulse' },
  ],
};
