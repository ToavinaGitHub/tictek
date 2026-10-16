import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '../data/content';

const LANG_KEY = 'tictek-lang';
const THEME_KEY = 'tictek-theme';

function readStored(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStored(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Storage blocked (private mode): the choice just won't persist.
  }
}

function initialLang() {
  const stored = readStored(LANG_KEY);
  if (stored && translations[stored]) return stored;
  // French is the site's primary language; only English browsers start in English.
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'fr';
}

// index.html already resolved the theme before first paint (no flash).
function initialTheme() {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

const PreferencesContext = createContext(null);

export function PreferencesProvider({ children }) {
  const [lang, setLang] = useState(initialLang);
  const [theme, setTheme] = useState(initialTheme);
  const t = translations[lang];

  useEffect(() => {
    writeStored(LANG_KEY, lang);
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
  }, [lang, t]);

  useEffect(() => {
    writeStored(THEME_KEY, theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <PreferencesContext.Provider value={{ lang, setLang, theme, toggleTheme, t }}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  return useContext(PreferencesContext);
}
