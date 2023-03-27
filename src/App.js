import React, { useState } from 'react'
import { Box, Button, Flex, Heading, Image, List, ListItem, Stack, Text } from "@chakra-ui/react";
const App = () => {

  const [gameStarted,setGameStarted]=useState(false);
  const [selectedNum,setSelectedNum]=useState();
  const [dice,setDice]=useState(1);
  const [error,setError]=useState(null);
  const [score,setScore]=useState(0);
  const numbers=[1,2,3,4,5,6];
  const startGameHandler=()=>{
    setGameStarted(true)
  };


  // console.log(selectedNum)
  const onNumberClicked=(value)=>{
    setSelectedNum(value);
    setError(null);
  }
 const genRandomNum=()=>{
  if(selectedNum){
    const generatedNum=Math.ceil(Math.random()*6);
    setDice(generatedNum);
    // console.log(generatedNum)

    if(selectedNum===generatedNum){
      setScore((prev)=>prev+generatedNum);
    }else{
      setScore((prev)=>prev-1)
    }
  }else{
    setError("Please Select Number ")
  }
  // setSelectedNum()
 }
  return (
    <>
   {
    gameStarted?(
      <> <Box margin={"30px"} ><Button bg={"black"} color={"white"} _hover={{bg:"red"}} onClick={()=>[setGameStarted(false),setScore(0),setSelectedNum()]} >Back To Home  </Button></Box>
      <Stack  alignItems="center" justify={'center'} maxW="1300px" h={"100vh"} ><Heading fontSize={{base:"xl", sm:"2xl", md:"3xl",lg:"4xl"}} color={error?"red":"black"}>{ error?error:"Select The Number"
}</Heading>

<Flex pb={"9"} >
    {numbers.map((value,index)=>(
    <Flex h={{base:"40px",md:"40px",lg:"50px"}} w={{base:"40px",md:"40px",lg:"50px"}}  bg={selectedNum===value?"green" :"black"} color="white" justify={'center'} align="center" fontSize={{md:"xl",lg:"2xl"}} margin={{base:"5px",md:"15px",lg:"20px"}} borderRadius={"10px"}  cursor="pointer" key={index}
    onClick={()=>onNumberClicked(value)}>{value}</Flex>
   ))}
    </Flex> 

   <Box  onClick={genRandomNum} >
   <Image w={{base:"50px",md:"60px",lg:"80px"}} cursor={'pointer'} borderRadius="10" src={`./dice/dice${dice}.png`}></Image>
   </Box>
   <Text fontSize={"xl"} as="p">Click On Dice To Roll</Text>
   <Text fontSize={{base:'4xl', md:"5xl",lg:"7xl"}} fontWeight="semibold" color={score>0 ?"green":"red"}>{score}</Text>
    <Text fontSize={"4xl"} fontWeight="semibold">Total Score</Text>
    <Button _hover={{bg:"grey"}} onClick={()=>[setScore(0),setSelectedNum()]} >Reset Score</Button>   
      
    </Stack>
    <Stack  m="40px">
      <Heading fontSize={{base:"xl", sm:"2xl", md:"3xl",lg:"4xl"}} as={"h2"}>Please Follow Game Rules:-</Heading>
      <List>
        <ListItem>1.Select any Number.</ListItem>
        <ListItem>2.Click on dice image to roll it and enjoy the game!</ListItem>
        <ListItem>3.If you fail to guess right number then score will be minus by 1 from total score.</ListItem>
        <ListItem>4.Click on <b>reset score</b> button for reset game.</ListItem>
      </List>
    </Stack>
    
      </>
    )
    :( <Flex justify={'center'} align="center" h={"100vh"}> 
    <Image width={"50%"} src="/dices.png"></Image>
    <Stack >
      <Heading as={"h1"} fontSize={{base:"20px",md:"30px",lg:"45px"}}>The Dice Game</Heading>
      <Button color={"white"} bg={'black'} alignSelf="flex-end" _hover={{bg:"grey"}} onClick={startGameHandler}>Play Now</Button>
    </Stack>
  </Flex>)
   }
    </>
  )
}

export default App;
