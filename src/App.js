
import './App.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Pomodoro from './componentes/Relogio/Relogio';


const theme = extendTheme({
  config: {
    initialColorMode: 'light', // Define o modo de cor inicial como claro
    useSystemColorMode: false, // Desabilita o modo de cor do sistema
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Pomodoro/>
    </ChakraProvider>
  );
}

export default App;
