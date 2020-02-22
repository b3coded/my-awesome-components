import React, {useContext, createContext, Component} from 'react';
import {
  ThemeProviderProps,
  ThemeProviderState,
  ThemeContextProps,
} from './ThemeProvider.props';
import * as themes from '../themes';

export const ThemeContext = createContext<ThemeContextProps>({
  currentTheme: 'Dark',
  theme: themes.Dark,
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default class ThemeProvider extends Component<
  ThemeProviderProps,
  ThemeProviderState
> {
  constructor(props: ThemeProviderProps) {
    super(props);

    this.state = {
      theme: themes.Light,
      currentTheme: 'Light',
    };
  }

  componentDidMount() {}

  toggleTheme = () => {
    const newTheme = this.state.currentTheme === 'Dark' ? 'Light' : 'Dark';
    this.setState({currentTheme: newTheme, theme: themes[newTheme]});
  };

  render() {
    const {children} = this.props;
    const {state, toggleTheme} = this;
    return (
      <ThemeContext.Provider value={{...state, toggleTheme}}>
        {children}
      </ThemeContext.Provider>
    );
  }
}
