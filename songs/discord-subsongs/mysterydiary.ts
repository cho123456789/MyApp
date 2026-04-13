import { Song } from '../types';

export const mysterydiary: Song = {
  id: 'mysterydiary',
  title: '수수께끼 다이어리',
  emoji: '📓',
  color: '#8b4513',
  chantData: [
    { type: 'section', text: '[시작]', effect: 'glow' },
    { type: 'chant', text: 'Q! W! E! R!', subtext: '네 번 외치기', intensity: 5, action: 'raise', timing: 0, split: 'all', effect: 'pulse' },
    { type: 'break', text: '' },
    
    { type: 'lyric', text: '비밀스러운 내 다이어리', intensity: 2, action: 'sway' },
    { type: 'lyric', text: '숨겨진 이야기들이 가득해', intensity: 2 },
    { type: 'break', text: '' },
    
    { type: 'chant', text: '📓 수수께끼! 📓', subtext: '함성!', intensity: 4, action: 'wave', split: 'all', effect: 'shake' },
    { type: 'break', text: '' },
    
    { type: 'section', text: '[후렴]', effect: 'glow' },
    { type: 'lyric', text: '풀 수 없는 수수께끼처럼', intensity: 4, action: 'clap' },
    { type: 'chant', text: '👏 짝짝-짝짝-짝짝 👏', subtext: '3번 박수', intensity: 5, action: 'clap', split: 'all', effect: 'bounce' },
    { type: 'lyric', text: '궁금해지는 나의 마음', intensity: 4 },
    { type: 'chant', text: '📓 다이어리! 📓', subtext: '큰 소리로!', intensity: 5, action: 'jump', split: 'all', effect: 'flash' },
  ],
};
