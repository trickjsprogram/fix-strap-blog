import Link from 'next/link';
import { useContext } from 'react';
import {
  HStack,
  Flex,
  VStack,
  Button,
  Image,
  useColorMode,
} from '@chakra-ui/react';
import styles from '@/styles/Header.module.css';
import Search from './Search';
import AuthContext from '@/context/AuthContext';
import 'typeface-raleway';
import '@fontsource/questrial';
import '@fontsource/inter';

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { user, signout } = useContext(AuthContext);
  return (
    // <header className={styles.header}>
    <Flex
      mb="50px"
      w="100vw"
      justifyContent="center"
      alignItems="center"
      // bg="pink"
    >
      <div className={styles.logo}>
        <VStack
          fontFamily="inter"
          minWidth="300px"
          align="center"
          justify="center"
        >
          <h1 style={{ fontFamily: 'questrial' }}>Sports</h1>
          <Link href="/">
            {colorMode === 'dark' ? (
              <Image cursor="pointer" py="0" src="/face.png" />
            ) : (
              <Image cursor="pointer" py="0" src="/face-2.png" />
            )}
          </Link>
          <h1 style={{ fontFamily: 'questrial' }}>News.</h1>
        </VStack>
      </div>
      <HStack minWidth="300px" justifyContent="center" alignItems="center">
        <Search />
      </HStack>
      <HStack
        minWidth="300px"
        justifyContent="center"
        alignItems="center"
        spacing="50px"
        // bg="blue"
      >
        <Link href="/news">
          <a>News</a>
        </Link>
        {user ? (
          <>
            <Link href="/news/add">
              <a>Add News</a>
            </Link>
            <Link href="/auth/dashboard">
              <a>Dashboard</a>
            </Link>
            <button className="btn-secondary" onClick={() => signout()}>
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link href="/auth/signin">
              {/* <button>Sign In</button> */}
              <Button>Sign In</Button>
            </Link>
          </>
        )}
        <Link href="/about">
          <a>About</a>
        </Link>
      </HStack>
    </Flex>
    // </header>
  );
}
