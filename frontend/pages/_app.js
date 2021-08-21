import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';
import { AuthProvider } from '@/context/AuthContext';
import ScrollToTop from '@/components/ScrollToTop';
import { theme } from '../styles/styles';
import DarkModeSwitch from '@/components/DarkModeSwitch';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <DarkModeSwitch />
        <ScrollToTop />
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  );
}
export default MyApp;
