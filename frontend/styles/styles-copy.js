import { extendTheme } from '@chakra-ui/react';
import theme from './styles';
import mycustomtheme from './colors';

const overrides = {
  theme,
  mycustomtheme,
  // Other foundational style overrides go here
  // components: {
  //   Button,
  //   // Other components go here
  // },
};
export default extendTheme(overrides);
