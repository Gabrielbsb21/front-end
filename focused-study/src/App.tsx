import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { Main } from './components/Main';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
