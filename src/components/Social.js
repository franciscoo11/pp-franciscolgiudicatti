import { HStack, Icon } from '@chakra-ui/react'
import React from 'react'
import { FaSpotify, FaGoogle } from 'react-icons/fa'

export default function Social() {
  return (
    <HStack spacing="24">
      <Icon as={FaGoogle} boxSize="50" onClick={() => window.open('https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=franciscogiudicatti@gmail.com')} cursor="pointer"></Icon>
      <Icon as={FaSpotify} boxSize="50" onClick={() => window.open('https://open.spotify.com/user/31jcfrpuyubaxxob6et23rgzm2r4')} cursor="pointer"></Icon>
    </HStack>
  )
}
