import { useMediaQuery } from '@chakra-ui/media-query';
import { useColorMode } from '@chakra-ui/color-mode'
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import React from 'react';

export default function Header() {

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [ isNotSmallerScreen ] = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
      <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end" />
      <Flex direction={isNotSmallerScreen ? "row" : "column"} spacing="200px" p={isNotSmallerScreen ? "32" : "0"} alignSelf="flex-start">
        <Box mt={isNotSmallerScreen ? "0" : "16"} alignSelf="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
          <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Francisco Giudicatti</Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>Full Stack Developer PERN Stack, pasionate for backend.</Text>
          <Button mt={8} colorScheme="blue" onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=franciscogiudicatti@gmail.com")}>Contact me</Button>
        </Box>
        <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"} mb={isNotSmallerScreen ? "0" : "12"} borderRadius="full" backgroundColor="transparent" boxShadow="lg" boxSize="300px" src="https://avatars.githubusercontent.com/u/78971729?v=4"/>
      </Flex>
    </Stack>
  )
}
