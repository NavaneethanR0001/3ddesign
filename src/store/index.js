import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#FFD700',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './logo.png',
  fullDecal: './threejs.png',
});

export default state;