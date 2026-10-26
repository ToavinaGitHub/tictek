import { createContext, useContext } from 'react';
import fr from './data/locales/fr';
import en from './data/locales/en';
import { paths } from './data/site';

export const translations = { fr, en };

const LocaleContext = createContext(null);

export function LocaleProvider({ lang, children }) {
  const value = { lang, t: translations[lang], href: (pageId) => paths[lang][pageId] };
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}
