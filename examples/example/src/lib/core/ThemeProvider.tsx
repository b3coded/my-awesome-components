import React, {useContext, createContext, Component} from 'react';
import {Props, State} from './ThemeProvider.props';

export const ThemeContext = createContext({});

export function useTheme() {
  return useContext(ThemeContext);
}

export default class ThemeProvider extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      theme: {},
      currentTheme: 'dark',
    };
  }

  componentDidMount() {}

  toggleTheme = () => {
    const newTheme = this.state.currentTheme === 'dark' ? 'light' : 'dark';
    this.setState({currentTheme: newTheme});
  };

  render() {
    const {children} = this.props;
    return (
      <ThemeContext.Provider value={this.state}>
        {children}
      </ThemeContext.Provider>
    );
  }
}
