import { extendTheme } from '@chakra-ui/react';
import 'typeface-poppins';

export const theme = extendTheme({
  styles: {
    global: (props) => ({
      h1: {
        textShadow: '-1px 1px 1px #ff00007e',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '1.5rem',
        fontWeight: 'semibold',
        lineHeight: '1.5',
        padding: '0 1rem',
      },

      body: {
        color: props.colorMode === 'dark' ? 'gray.50' : 'gray.800',
        backgroundColor: props.colorMode === 'dark' ? 'gray.900' : 'gray.100',
        transition: 'all 1.0s ease-in-out',
      },
      input: {
        backgroundColor: props.colorMode === 'dark' ? 'gray.900' : 'gray.100',
        boxShadow: 'md',
        margin: '10px',
        padding: '10px',
        border:
          props.colorMode === 'dark'
            ? '0.1px solid #88888886'
            : '0.1px solid #88888886',
        transition: 'all 1.0s ease-in-out',
        borderRadius: '5px',
        _hover: {
          transition: 'ease-in-out, width .35s ease-in-out',
          backgroundColor: props.colorMode === 'dark' ? 'gray.700' : 'blue.50',
          boxShadow:
            props.colorMode === 'dark'
              ? '0 0 1px 1px #dee4ef'
              : '0 0 2px 4px #dee4ef',
        },
        _focus: {
          transition: 'ease-in-out, width .35s ease-in-out',
        },
      },
      a: {
        color: props.colorMode === 'dark' ? 'gray.50' : 'blue.400',
        fontWeight: '500',
        transition: 'all 1.0s ease-in-out',
        textDecoration: 'underline',
        _hover: {
          textShadow: '-1px 1px 5px #30303029',
          color: props.colorMode === 'dark' ? 'blue.400' : 'green.300',
          transition: 'all 0.2s ease-in-out',
        },
      },
      button: {
        p: '5',
        m: '5',
        bg: 'gray.700',
        color: 'blue.50',
        bg: props.colorMode === 'dark' ? 'blue.300' : 'red.50',
        color: props.colorMode === 'dark' ? 'gray.50' : 'gray.800',
        fontWeight: 'semibold',
        textShadow: '-1px 1px 15px #ff00007e',
        borderWidth: '1px',
        borderRadius: '15px',
        borderColor: 'gray.700',
        _hover: {
          borderColor: '#0022e4',
          bg: 'gray.50',
          color: '#0022e4',
          textShadow: '0 3px 0 #a0a0a07e',
          borderRadius: '15px',
          // borderColor: '#0022e4',
        },
        transition: 'all 0.5s ease-in-out',
      },
    }),
  },
  components: {
    Heading: {
      baseStyle: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        lineHeight: '1.5',
        fontFamily: 'Poppins, sans-serif',
      },
    },
    Button: {
      baseStyle: {
        fontWeight: 'normal',
        borderColor: '#313131',
        bg: 'gray.50',
        textShadow: '0 3px 0 #a0a0a07e',
        borderWidth: '2px',
        borderRadius: '15px',
      },
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
        lg: {
          h: '48px',
          fontSize: 'lg',
          px: '24px',
        },
        md: {
          h: '40px',
          fontSize: 'lg',
          px: '20px',
        },
        sm: {
          h: '32px',
          fontSize: 'lg',
          px: '16px',
        },
        xs: {
          h: '28px',
          fontSize: 'lg',
          px: '14px',
        },
      },
      variants: {
        'with-shadow': {
          // bg: 'red.400',
          // boxShadow: '0 0 2px 2px #efdfde',
        },
        solid: (props) => ({
          bg: props.colorMode === 'dark' ? 'blue.300' : 'red.50',
          color: props.colorMode === 'dark' ? 'gray.50' : 'gray.800',
          _hover: {
            bg: 'gray.50',
            textShadow: '0 3px 0 #a0a0a07e',
            borderRadius: '15px',
          },
        }),
      },
    },
  },
});
