import { IconButton } from '@chakra-ui/button';
import { Flex, VStack, Heading, Spacer } from '@chakra-ui/layout';
import { useColorMode } from '@chakra-ui/color-mode';
import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa';
import Social from './components/Social';
import Header from './components/Header';
import Profile from './components/Profile';

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight='semibold' color="cyan.400">
          Franciscolg
        </Heading>
      
        <Spacer></Spacer>
        <IconButton ml={2} icon={<FaLinkedin />} isRound="true" onClick={() => window.open('https://www.linkedin.com/in/francisco-giudicatti/')}></IconButton>
        <IconButton ml={2} icon={<FaGithub />} isRound="true" onClick={() => window.open('https://github.com/franciscoo11')}></IconButton>
        <IconButton ml={2} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}

export default App;
