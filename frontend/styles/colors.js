// 1. Import the extendTheme function
import {
  extendTheme,
  withDefaultColorScheme,
  withDefaultSize,
} from '@chakra-ui/react';
import 'typeface-poppins';

// 2. Extend the theme to include custom colors, fonts, etc
// const colors = {
//   brand: {
//     900: '#1a365d',
//     800: '#153e75',
//     700: '#2a69ac',
//   },
// };

export const mycustomtheme = extendTheme({
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 'bold', // Normally, it is "semibold"
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
      // 3. We can add a new visual variant
      variants: {
        'with-shadow': {
          bg: 'red.400',
          boxShadow: '0 0 2px 2px #efdfde',
        },
        // 4. We can override existing variants
        solid: (props) => ({
          bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
        }),
      },
    },
  },
});
// export const mycustomtheme = extendTheme(
//   withDefaultColorScheme({
//     colorScheme: 'red',
//     components: [
//       'Input',
//       'NumberInput',
//       'PinInput',
//       'TextInput',
//       'Textarea',
//       'Select',
//       'Checkbox',
//       'Radio',
//       'Switch',
//       'Toggle',
//       'Button',
//     ],
//   })
// );
