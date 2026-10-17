import { usePreferences } from '../context/PreferencesContext';

// Trimmed copies of public/img/logo/logo_vf.png. The original's navy
// outlines vanish on the dark background, so the dark variant has them
// recolored to near-white.
const SOURCES = {
  dark: '/img/logo/logo_vf_dark.png',
  light: '/img/logo/logo_vf_light.png',
};

export default function Logo({ className = '' }) {
  const { theme } = usePreferences();

  return <img src={SOURCES[theme]} alt="TicTek" className={`logo ${className}`.trim()} width={275} height={89} />;
}
