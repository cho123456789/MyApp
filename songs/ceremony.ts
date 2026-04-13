import { Song } from './types';

export const ceremony: Song = {
  id: 'ceremony',
  title: 'Ceremony',
  emoji: '🎭',
  color: '#9b59b6',
  chantData: [
    { type: 'section', text: '[시작]', effect: 'glow' },
    { type: 'chant', text: 'Q! W! E! R!', subtext: '네 번 외치기', intensity: 5, action: 'raise', timing: 0, split: 'all', effect: 'pulse' },
    { type: 'break', text: '' },
    
    { type: 'lyric', text: '화려한 무대 위에서', intensity: 3, action: 'sway' },
    { type: 'lyric', text: '우리만의 세레모니', intensity: 3 },
    { type: 'break', text: '' },
    
    { type: 'chant', text: '🎭 세레모니! 🎭', subtext: '함성!', intensity: 5, action: 'jump', split: 'all', effect: 'flash' },
    { type: 'break', text: '' },
    
    { type: 'section', text: '[후렴]', effect: 'glow' },
    { type: 'lyric', text: 'Ceremony Ceremony', intensity: 4, action: 'wave' },
    { type: 'chant', text: '👏 짝짝-짝짝-짝짝 👏', subtext: '3번 박수', intensity: 5, action: 'clap', split: 'all', effect: 'bounce' },
    { type: 'lyric', text: '우리만의 특별한 순간', intensity: 4 },
    { type: 'chant', text: '🌟 함께해요! 🌟', subtext: '큰 소리로!', intensity: 5, action: 'raise', split: 'all', effect: 'pulse' },
    { type: 'break', text: '' },
    
    { type: 'section', text: '[클라이맥스]', effect: 'glow' },
    { type: 'chant', text: '이 순간을 영원히 기억해요', subtext: '(기억해요!)', intensity: 5, split: 'call', action: 'stomp', effect: 'flash' },
    { type: 'lyric', text: '모두 함께 만들어가는 세레모니', intensity: 5, action: 'wave' },
    { type: 'chant', text: '🎉 세레모니! 🎉', subtext: '전부 함께!', intensity: 5, action: 'jump', split: 'all', effect: 'flash' },
  ],
};
