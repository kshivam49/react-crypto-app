import { Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} color={'whiteAlpha.700'} minH={'48'} px={'16'} py={['16','8']}>
        <Stack direction={['column','row']} h={'full'} alignItems={'center'}>
            <VStack w={'full'} alignItems={'center'}>
                <Text fontWeight={'bold'}>About Us</Text>
                <Text fontSize={'sm'} letterSpacing={'widest'} textAlign={'center'}>We are the best crypto tracking app in India.</Text>

            </VStack>

        </Stack>
    </Box>
  )
}

export default Footer