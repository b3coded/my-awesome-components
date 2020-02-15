import React, {useContext, createContext, Component} from 'react';
import {Props, State, ThemeContextProps} from './ThemeProvider.props';
import * as themes from '../themes';

export const ThemeContext = createContext<ThemeContextProps>({
  currentTheme: 'Dark',
  theme: themes.Dark,
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default class ThemeProvider extends Component<Props, State> {
  constructor(props: Props) {
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
    return (
      <ThemeContext.Provider
        value={{...this.state, toggleTheme: this.toggleTheme}}>
        {children}
      </ThemeContext.Provider>
    );
  }
}
