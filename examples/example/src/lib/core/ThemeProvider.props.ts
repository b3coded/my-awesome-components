export type Props = {};
export type State = {theme: any; currentTheme: 'Dark' | 'Light'};
export type ThemeContextProps = State & {
  toggleTheme: () => void;
};
