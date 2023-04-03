import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const List = ({data}) => {
  return (
    <Box>
   <Text w='300px' fontWeight='600' py='4px' px='10px' border='1px solid white' borderTop='0' color='yellow' >{data.Title}</Text>
    </Box>
  )
}

export default List