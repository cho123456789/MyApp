import { Song } from './types';

export const nunmulchamgi: Song = {
  id: 'nunmulchamgi',
  title: '눈물참기',
  emoji: '😢',
  color: '#4a90e2',
  chantData: [
    { type: 'section', text: '[시작]', effect: 'glow' },
    { type: 'chant', text: 'Q! W! E! R!', subtext: '네 번 외치기', intensity: 5, action: 'raise', timing: 0, split: 'all', effect: 'pulse' },
    { type: 'break', text: '' },
    
    { type: 'lyric', text: '울지 않으려 애를 써도', intensity: 2, action: 'sway' },
    { type: 'lyric', text: '자꾸만 흐르는 눈물', intensity: 2 },
    { type: 'break', text: '' },
    
    { type: 'lyric', text: '참으려 해도 참을 수가 없어', intensity: 3 },
    { type: 'chant', text: '😢 눈물이 나와! 😢', subtext: '함성!', intensity: 4, action: 'wave', split: 'all', effect: 'shake' },
    { type: 'break', text: '' },
    
    { type: 'section', text: '[후렴]', effect: 'glow' },
    { type: 'lyric', text: '눈물참기 눈물참기', intensity: 4, action: 'clap' },
    { type: 'chant', text: '👏 짝짝-짝짝-짝짝 👏', subtext: '3번 박수', intensity: 5, action: 'clap', split: 'all', effect: 'bounce' },
    { type: 'lyric', text: '하지만 참을 수가 없어', intensity: 4 },
    { type: 'chant', text: '💧 참을 수 없어! 💧', subtext: '큰 소리로!', intensity: 5, action: 'jump', split: 'all', effect: 'flash' },
    { type: 'break', text: '' },
    
    { type: 'section', text: '[클라이맥스]', effect: 'glow' },
    { type: 'chant', text: '울어도 괜찮아 울어도 괜찮아', subtext: '(괜찮아!)', intensity: 5, split: 'call', action: 'raise', effect: 'pulse' },
    { type: 'lyric', text: '그동안 참았던 눈물 이제는 흘려도 돼', intensity: 4, action: 'wave' },
    { type: 'chant', text: '😭 괜찮아! 😭', subtext: '전부 함께!', intensity: 5, action: 'stomp', split: 'all', effect: 'flash' },
  ],
};
