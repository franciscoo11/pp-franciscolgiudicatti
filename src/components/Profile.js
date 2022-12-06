import React from 'react'
import Icon  from '@chakra-ui/icon';
import { useMediaQuery } from '@chakra-ui/media-query'
import { Box, Flex, Heading, Text} from '@chakra-ui/layout'
import { DiWebplatform } from 'react-icons/di'

export default function Profile() {

  const [ isNotSmallerScreen ] = useMediaQuery("(min-width:600px)");

  return (
    <Flex direction={ isNotSmallerScreen ? "row" : "column"} w="100%" maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh"}}>
      <Box alignSelf="center" px="32" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          1+
        </Heading>
        <Text fontSize="2x1" color="gray.400">Years of Experience</Text>
      </Box>
      <Box alignSelf="center" px="32" py="16">
        <Text fontWeight="bold" fontSize="2x1">Looking for new challenges where I could strengthen my skills and enhance them</Text>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
          <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "green.400 "}} onClick={() => window.open('https://github.com/franciscoo11/PF-SoyHenry-MyOrchestra')} cursor="pointer">
            <Icon color="white" p="4" as={DiWebplatform} w="24" h="24" />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              Proyect Final My Orchestras
            </Text>
          </Flex>

          <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} bg="blue.200" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "green.400 "}} onClick={() => window.open('https://github.com/franciscoo11/Pi-Food')} cursor="pointer">
            <Icon color="white" p="4" as={DiWebplatform} w="24" h="24" />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              Proyect Individual Food Recipe
            </Text>
          </Flex>

        </Flex>

      </Box>
    </Flex>
  )
}
