import './App.css'
// 1129ba30
import {Box, Flex, Heading, Text} from '@chakra-ui/react'
import Searchbar from './Components/Searchbar'
import { useRef, useState } from 'react';
import List from './Components/List';
function App() {
  const [text,setText]=useState('');
  const [movies,setMovies]=useState([])
  const ref=useRef(null)
  const changeHandler=(e)=>{
      setText(e.target.value)
      const delay=1000
      let res=debouncing(movieApi,delay)
      res()
  }
  const movieApi=async ()=>{
    try {
      let res=await fetch(`http://www.omdbapi.com/?apikey=1129ba30&s=${text}`)
      let data=await res.json()
      setMovies(data.Search)
    } catch (error) {
      console.log(error.message)
    }
  }
  const debouncing=(cb,delay)=>{
      return (...args)=>{
          ref.current && clearTimeout(ref.current)
          ref.current=setTimeout(()=>{
              cb.apply(this,args)
          },delay)
      
   }
  }
  return (
    <Box className="App" bg='black   '>
      <Heading size='md' p='5px' color='pink.400'>Debouncing App</Heading>
      <Flex direction='column' justify='center' align='center' h='100vh'>
    <Searchbar changeHandler={changeHandler} />
    {
      movies.map((item)=>
      <List key={item.title} data={item}  />  
      )
    }
      </Flex>
    </Box>
  )
}

export default App
