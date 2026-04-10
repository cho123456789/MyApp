import { Song } from './types';

export const gajjaidol: Song = {
  id: 'gajjaidol',
  title: '가짜 아이돌',
  emoji: '🎸',
  color: '#ff6b9d',
  chantData: [
    { type: 'section', text: '[시작]' },
    { type: 'chant', text: 'Q! W! E! R!', subtext: '네 번 외치기' },
    { type: 'break', text: '' },
    
    { type: 'lyric', text: '가짜 아이돌' },
    { type: 'chant', text: '👏 짝짝짝-짝짝 👏', subtext: '박수 리듬' },
    { type: 'break', text: '' },
    
    { type: 'lyric', text: '우린 가짜 아이돌' },
    { type: 'lyric', text: '노래 춤은 못해도' },
    { type: 'lyric', text: '우린 밴드를 해' },
    { type: 'chant', text: '🎸 밴드를 해! 🎸', subtext: '함성!' },
    { type: 'break', text: '' },
    
    { type: 'section', text: '[후렴]' },
    { type: 'lyric', text: '가짜 아이돌 가짜 아이돌' },
    { type: 'chant', text: '👏 짝짝-짝짝-짝짝 👏', subtext: '3번 박수' },
    { type: 'lyric', text: '그래도 우린 최선을 다해' },
    { type: 'chant', text: '🙌 최선을! 다해! 🙌', subtext: '큰 소리로!' },
  ],
};
