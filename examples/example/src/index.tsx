import React from 'react';
import App from './App';
import ThemeProvider from './lib/core/ThemeProvider';

const Main: React.FC = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};
export default Main;
