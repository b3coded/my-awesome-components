export type ThemeProviderProps = {
  theme?: any;
};
export type ThemeProviderState = {theme: any; currentTheme: 'Dark' | 'Light'};
export type ThemeContextProps = ThemeProviderState & {
  toggleTheme: () => void;
};
