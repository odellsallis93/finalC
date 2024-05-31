import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#e2e2e2',
  isLogoTexture: false,
  isFullTexture: false,
});

export default state;