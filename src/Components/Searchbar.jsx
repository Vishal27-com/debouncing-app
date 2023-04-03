import { Box, Img, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'

const Searchbar = ({changeHandler}) => {
    
  return (
    <Box w='300px'>
    <InputGroup>
    <Input type='text' color='yellow' onChange={changeHandler} />
    </InputGroup>
    </Box>
  )
}

export default Searchbar