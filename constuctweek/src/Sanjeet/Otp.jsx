import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Checkbox,
  Link,
  Image,
  Flex,
  PinInput,
  PinInputField,
  Center,
  Box,
  Text,
  Grid,
  useToast,
} from "@chakra-ui/react";

import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState,useEffect,useReducer } from "react";
import axios from "axios";
import { clearCart, getData, getcartproduct } from "../redux/CartReducer/action";

 

const SplitWithImage = () => {
  const toast = useToast();
  const dispatch = useDispatch()
  const getData = ()=>{
    axios
        .get("https://mock-server-app-0i38.onrender.com/cart")
        .then((res) => {
          dispatch({ type: "Success", payload: res.data });
          console.log(res.data);
        })
        .catch((err) => {
          dispatch({ type: "Failure", payload: err.message });
        });
  }
  useEffect(()=>{
    getData()
  },[])
const{data}= useSelector((store)=>store.cartReducer)

const a = () => {
    toast({
      title: "Payment Succesfull..Hope You Like Our Products..",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    
      for(let x=0; x<data.length; x++){
        
        axios
        .delete(`https://mock-server-app-0i38.onrender.com/cart/${data[x].id}`)
        .then((res) => {
         dispatch(getData);

        })
        .catch((error) => {
          console.log(error);
        });
      
    }
    
  };
 
 


  return (
    <Box ml={{ base: 0, md: 60 }} p="0">
      {/* <Box ml={{ base: 0, md: 60 }} p="8">
      <Flex flex={1} >
        <Center>
        <Image
          alt="Cover image"
          objectFit="cover"
          src="https://d6xcmfyh68wv8.cloudfront.net/assets/payments-app/1st-fold/lp-hero-gif-without-phone.gif"
        />
        </Center>
      </Flex>
      </Box> */}

      <Flex p={8} flex={1} align="center" justify="center">
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="2xl">
              Powered By{" "}
              <span>
                <Image
                  width={"100px"}
                  src="https://static.lottiefiles.com/blog_media/PwX9dSnDySzYvG35Zx5LkNPaFEYCJy4DokWqdhMW.png"
                />
              </span>{" "}
            </Heading>
            <Text fontSize="2xl">Authorize Your Payment Securely</Text>
            <Image src="https://media.tenor.com/GfJhtgrHZhgAAAAC/qr-code-link.gif" />
            <Box
              display={"flex"}
              justifyContent={"space-evenly"}
              width={"100%"}
            >
              <Heading fontSize="2xl">Name</Heading>
              <Heading fontSize="2m">Sanjeet Kumar</Heading>
            </Box>

            <Box
              display={"flex"}
              justifyContent={"space-evenly"}
              width={"100%"}
            >
              <Heading fontSize="2xl">Card No.</Heading>
              <Heading fontSize="2m">********9321</Heading>
            </Box>
          </Stack>
          <VStack
            as="form"
            spacing={8}
            boxSize={{ base: "xs", sm: "sm", md: "md" }}
            h="max-content !important"
            bg={useColorModeValue("white", "gray.700")}
            rounded="lg"
            boxShadow="lg"
            p={{ base: 5, sm: 10 }}
          >
            <VStack spacing={4} w="100%">
              <Center>
                <Flex>
                  <PinInput otp>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                </Flex>
              </Center>
            </VStack>
            <VStack w="100%">
              <Stack direction="row" justify="space-between" w="100%">
                <Text colorScheme="green" size="md">
                  Fast And Secure Payment
                </Text>
                <Link fontSize={{ base: "md", sm: "md" }}>Resend Otp</Link>
              </Stack>
              <RouterLink to="/Makeup">
                <Button
                  bg="green.300"
                  color="white"
                  _hover={{
                    bg: "green.500",
                  }}
                  rounded="md"
                  w="100%"
                  onClick={() => a()}
                >
                  Confirm
                </Button>
              </RouterLink>
            </VStack>
          </VStack>
        </Stack>
      </Flex>
    </Box>
  );
};

export default SplitWithImage;
