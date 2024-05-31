import { proxy } from 'valtio';

const state = proxy({
  intro: false,
  color: '#e2e2e2',
  isLogoTexture: false,
  isFullTexture: false,
});

export default state;