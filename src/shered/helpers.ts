import type { Style } from '../types/globalTypes';

export const getDefaultStyle = (visible: boolean): Style => ({
  display: visible ? 'flex' : 'none',
});
