import React, { useEffect, useReducer, useRef, useState } from "react";
import {
  Box,
  Flex,
  Stack,
  Image,
  Text,
  Button,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";

const initialState = {
  data: [],
  isLoading: false,
  error: false,
  tax: 0,
  shipping: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Request":
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case "Success":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: false,
      };
    case "Failure":
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    default:
      throw new Error();
  }
};
const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, isLoading, error } = state;

  const [total, setTotal] = useState(0);

  const [ttotal, setTtotal] = useState(0);
  const [totalcart, setTotalCart] = useState(0);

  const toast = useToast();
  const a = () => {
    toast({
      title: "Item Deleted",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

  const getData = () => {
    dispatch({ type: "Request" });

    axios
      .get("https://mock-server-app-0i38.onrender.com/cart")
      .then((res) => {
        dispatch({ type: "Success", payload: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        dispatch({ type: "Failure", payload: err.message });
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    let Total = 0;

    data?.forEach((el) => (Total += +el.price * el.Quantity));
    setTotal(Total);
    setTtotal(Total + 5 + 10);
    console.log(Total);
  }, [data]);

  const Handleadd = (id, Quantity, val) => {
    data.map((el) => (el.id === id ? (Quantity = Quantity + val) : Quantity));
    axios
      .patch(`https://mock-server-app-0i38.onrender.com/cart/${id}`, {
        Quantity: Quantity,
      })
      .then(() => getData());
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://mock-server-app-0i38.onrender.com/cart/${id}`)
      .then((res) => {
        getData();
        a();
        setTotalCart(res.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box
      maxW="fit-content"
      p={{ base: 5, md: 10 }}
      textAlign="left"
      margin="auto"
    >
      <h1
        style={{
          fontSize: "25px",
          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
      >
        My Basket
      </h1>
      <Box display="flex" justifyContent="space-evenly" flexWrap="wrap">
        <Box>
          <Box
            maxW="max-content"
            mt={20}
            borderRadius="5px"
            p="15"
            display="flex"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <Box>
              <h6>The Sephora Credit Card Program</h6>
              <h5 style={{ fontSize: "15px" }}>
                Save 25% on this order when you open and use either Sephora
                Credit Card today
              </h5>
              <p style={{ fontSize: "10px" }}>
                *Subject to credit approval. Exclusions apply.
              </p>
            </Box>

            <Box p={15}>
              <Button borderRadius={5} p="5" bg="white">
                SEE DETAILS
              </Button>
            </Box>
          </Box>

          <Box>

            <Box
              mt="5px" borderRadius="5px" margin="auto"
              bg="ButtonShadow"
            >

              <h6>Get It Shipped({data.length})</h6>
              <Box bg="white" margin="5px">
                <h6 style={{ fontSize: "15px", fontFamily: "sans-serif" }}>
                  Beauty Insiders enjoy{" "}
                  <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                    FREE standard shipping
                  </span>{" "}
                  on all orders.
                </h6>
                <h6>
                  {" "}
                  <span style={{ color: "blue" }}>Free returns </span> on all
                  purchases.{" "}
                </h6>

                <Box
                  display={"flex"}

                  maxW="max-content"
                  margin="auto"

                  flexWrap="wrap"
                  margin="auto"
                 
                >
                  <Box border="1px solid grey" p={5} mt="5px">
                    <h6>
                      Get{" "}
                      <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                        2
                      </span>{" "}
                      free Samples for every order{" "}
                    </h6>
                    <Box textAlign={"center"}>
                      <h6>Select Your Samples</h6>
                    </Box>
                  </Box>

                  <Box
                    display="flex"
                    justifyContent="space-between"
                    border="1px solid grey"
                    p={5}
                    mt="5px"
                  >
                    <Box>
                      <h6 style={{ fontSize: "15px", fontWeight: "bold" }}>
                        Want free Shipping
                      </h6>
                      <h6
                        style={{ fontSize: "12px", fontFamily: "sans-serif" }}
                      >
                        Sign in to get free shipping <br /> for this purchase.
                      </h6>
                    </Box>

                    <Box p={15}>
                      <Button borderRadius="5px" bg={"black"} color="white">
                        Sign In
                      </Button>
                    </Box>
                  </Box>
                </Box>
                <hr />

                <Stack borderWidth="1px" rounded="lg" width="full">
                  {data?.length === 0 ? (
                    <Flex gap={5} direction={"column"} align="center" flex="1">
                      <h6>Your basket is Currently Empty.</h6>
                      <p>
                        Please{" "}
                        <span style={{ color: "blue", cursor: "pointer" }}>
                          Sign In
                        </span>{" "}
                        if you are trying to retrieve a basket created in the
                        past.
                      </p>
                      <Button
                        bg="black"
                        color="white"
                        pr="65px"
                        pl="65px"
                        pt="10px"
                        pb="10px"
                        borderRadius="5px"
                      >
                        Sign In
                      </Button>
                    </Flex>
                  ) : (
                    data.map((el) => (
                      <Flex
                        gap={5}
                        direction={"column"}

                        
                        flex="1"
                      >
                        <Box
                          width="70%"
                          display="flex"
                          justifyContent="space-evenly"
                          
                        >
                          <Box maxW="max-content">
                            <Image mt="3px" src={el.image} />
                          </Box>


                          <Box>
                            <span
                              style={{
                                fontFamily: "sans-serif",
                                fontWeight: "bolder",
                              }}
                            >
                              {el.title}
                            </span>
                            <h6
                              style={{
                                fontFamily: "sans-serif",
                                fontSize: "15px",
                              }}
                            >
                              {el.description}
                            </h6>
                            <h6
                              style={{
                                fontFamily: "sans-serif",
                                fontSize: "12px",
                              }}
                            >
                              {el.productid}
                            </h6>

                            <Box display="flex" justifyContent="space between">
                              <Box>
                                <Button
                                  bg={"green"}
                                  color="white"
                                  borderRadius="5px"
                                  mr={"5px"}
                                  borderColor="white"
                                  // eslint-disable-next-line no-sequences
                                  onClick={() =>
                                    Handleadd(el.id, el.Quantity, 1)
                                  }
                                >
                                  +
                                </Button>
                              </Box>
                              <Box>
                                <Text
                                  fontSize="lg"
                                  fontWeight="semibold"
                                  color="red"
                                  mt="2px"
                                >
                                  {el.Quantity}
                                </Text>
                              </Box>

                              <Box>
                                <Button
                                  borderColor="white"
                                  bg={"red"}
                                  color="white"
                                  ml={"5px"}
                                  mr={"5px"}
                                  borderRadius="5px"
                                  isDisabled={el.Quantity === 1}
                                  onClick={() =>
                                    Handleadd(el.id, el.Quantity, -1)
                                  }
                                >
                                  -
                                </Button>
                              </Box>

                              <Box>
                                <Button
                                  borderColor="white"
                                  borderRadius="5px"
                                  bg="red"
                                  color="white"
                                  ml={3}
                                  onClick={() => {
                                    handleDelete(el.id);
                                  }}
                                >
                                  Delete
                                </Button>
                              </Box>
                            </Box>
                          </Box>
                          <Box>
                            {" "}
                            <h6
                              style={{
                                marginTop: "5px",
                                fontFamily: "sans-serif",
                                fontSize: "15px",
                                fontWeight: "bolder",
                              }}
                            >
                              ${el.price * el.Quantity}
                            </h6>
                          </Box>
                        </Box>
                      </Flex>
                    ))
                  )}
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box maxW="max-content" p={20}>
          <Box border="1px solid grey" borderRadius="5px" mb={10}>
            <Box
              display="flex"
              justifyContent="space-between"
              pl={15}
              pr={15}
              margin="auto"
              mt="5"
            >
              <Box>
                <h6 style={{ fontSize: "15px", fontFamily: "sans-serif" }}>
                  Merchandise Subtotal
                </h6>
              </Box>
              <Box pl="35">
                <h6
                  style={{
                    fontSize: "15px",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  ${total}
                </h6>
              </Box>
            </Box>
            <Box>
              <Box
                display="flex"
                justifyContent="space-between"
                pl={15}
                pr={15}
                margin="auto"
              >
                <Box>
                  <h6 style={{ fontSize: "15px", fontFamily: "sans-serif" }}>
                    Shipping Handling
                  </h6>
                </Box>

                <Box pl="35">
                  {data?.length === 0 ? (
                    <h6
                      style={{
                        fontSize: "15px",
                        fontFamily: "sans-serif",
                        fontWeight: "bold",
                      }}
                    >
                      $0
                    </h6>
                  ) : (
                    <h6
                      style={{
                        fontSize: "15px",
                        fontFamily: "sans-serif",
                        fontWeight: "bold",
                      }}
                    >
                      $5
                    </h6>
                  )}
                </Box>
              </Box>

              <Box
                display="flex"
                justifyContent="space-between"
                pl={15}
                pr={15}
                margin="auto"
              >
                <Box>
                  <h6 style={{ fontSize: "15px", fontFamily: "sans-serif" }}>
                    Estimated Tax & Other Fees
                  </h6>
                </Box>

                <Box pl="35">
                  {data?.length === 0 ? (
                    <h6
                      style={{
                        fontSize: "15px",
                        fontFamily: "sans-serif",
                        fontWeight: "bold",
                      }}
                    >
                      $0
                    </h6>
                  ) : (
                    <h6
                      style={{
                        fontSize: "15px",
                        fontFamily: "sans-serif",
                        fontWeight: "bold",
                      }}
                    >
                      $10
                    </h6>
                  )}
                </Box>
              </Box>
              <hr style={{ width: "90%", margin: "auto" }} />
              <Box
                display="flex"
                justifyContent="space-between"
                pl={15}
                pr={15}
                margin="auto"
              >
                <Box>
                  <h6
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    Estimated Total
                  </h6>
                </Box>
                <Box pl="35">
                  {data?.length === 0 ? (
                    <h6
                      style={{
                        fontSize: "15px",
                        fontFamily: "sans-serif",
                        fontWeight: "bold",
                      }}
                    >
                      $0
                    </h6>
                  ) : (
                    <h6
                      style={{
                        fontSize: "15px",
                        fontFamily: "sans-serif",
                        fontWeight: "bold",
                      }}
                    >
                      ${ttotal}
                    </h6>
                  )}
                </Box>
              </Box>
            </Box>

            <Box
              display="flex"
              justifyContent="space-between"
              pl={15}
              pr={15}
              margin="auto"
            >
              <Box>
                <h6 style={{ fontSize: "12px", fontFamily: "sans-serif" }}>
                  or 4 payments of $5.75 with{" "}
                  <span
                    style={{
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    Klarna
                  </span>{" "}
                  or{" "}
                  <span
                    style={{
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    afterpay
                  </span>
                </h6>
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              pl={15}
              pr={15}
              margin="auto"
            >
              <Box>
                <h6 style={{ fontSize: "12px", fontFamily: "sans-serif" }}>
                  Shipping & taxes calculated during checkout
                </h6>
              </Box>
            </Box>

            <Box textAlign="center">
              <Link to={"/payment"}>
                <Button
                  pr="25px"
                  pl="25px"
                  pt="5px"
                  pb="5px"
                  color="white"
                  bg="red"
                  borderRadius="50px"
                  borderStyle="hidden"
                >
                  Checkout Shipped Items
                </Button>
              </Link>
            </Box>

            <Box
              display="flex"
              boxSize="100%"
              objectFit="contain"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                // width="10%"
                pr="30px"
                pl="30px"
                pt="5px"
                pb="5px"
                borderRadius="50px"
                mt="5px"
                borderStyle="hidden"
                marginBottom="20px"
              >
                Pay with{" "}
                <img
                  style={{ marginLeft: "5px" }}
                  width="75px"
                  src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_960_720.png"
                  alt=""
                />
              </Button>
            </Box>
          </Box>

          <Box border="1px solid grey" borderRadius="5px" m="auto">
            <p
              style={{
                textAlign: "right",
                fontSize: "12px",
                paddingTop: "5px",
                paddingRight: "5px",
                fontFamily: "sans-serif",
              }}
            >
              {" "}
              View Feautred Offers{" "}
            </p>

            <input
              style={{
                width: "90%",
                marginRight: "4px",
                marginLeft: "15px",
                marginBottom: "15px",
                padding: "5px",
                border: "1px solid black",
                borderRadius: "5px",
              }}
              type="text"
              placeholder="Promo or Reward Code"
            />
          </Box>
          <hr />

          <Box border="1px solid grey" borderRadius="5px" marginBottom="10px">
            <Box p={"10px"}>
              <img
                style={{ width: "10%", border: "1px solid black" }}
                src="https://www.sephora.com/img/ufe/payments/giftCard.svg"
                alt=""
              />{" "}
              <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                Add a Sephora Gift Card
              </span>
            </Box>

            <Box pl={"60px"} marginBottom="5px">
              <select name="" id="" style={{ paddingBottom: "5px" }}>
                <option value="">$50</option>
                <option value="">$100</option>
                <option value="">$150</option>
                <option value="">$200</option>
              </select>{" "}
              <span>
                <Button borderRadius="5px" bg="white">
                  Add to Basket
                </Button>
              </span>
            </Box>
          </Box>
          <Box border="1px solid grey" borderRadius="5px">
            <Box pl={"10px"}>
              <h6>Need Assistance?</h6>
              <p>
                1-877-SEPHORA (1-877-737-4672) <br />
                TTY: 1-888-866-9845{" "}
              </p>
              <p>Free return shipping or return in store</p>
              <p>We accept</p>
              <img
                width="90%"
                src="https://www.naturesbasket.co.in/Images/icons-card-payments-mode.png"
                alt=""
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;

{
  /* <h6>Your basket is Currently Empty.</h6>
<p>
  Please{" "}
  <span style={{ color: "blue", cursor: "pointer" }}>
    Sign In
  </span>{" "}
  if you are trying to retrieve a basket created in the
  past.
</p>
<Button
  bg="black"
  color="white"
  pr="65px"
  pl="65px"
  pt="10px"
  pb="10px"
  borderRadius="5px"
>
  Sign In
</Button> */
}

// // data.map((el) => (<Box
// width="100%"
// display="flex"
// justifyContent="space-between"
// p={15}
// >
// <Box maxW="max-content">
//   <Image src={el.image} />
// </Box>

// <Box width="70%">
//   <span style={{fontFamily:"sans-serif" , fontWeight:"bolder" }} >{el.title}</span>
//   <h6 style={{fontFamily:"sans-serif" , fontSize:"15px" }}>{el.description}</h6>
//   <h6 style={{fontFamily:"sans-serif" , fontSize:"12px" }} >{el.productid}</h6>

//   <Box display="flex" justifyContent="space between">
//     <Box>
//       <Button
//         bg={"yellow"}
//         borderRadius="5px"
//         mr={"5px"}
//         borderColor="white"
//         // eslint-disable-next-line no-sequences
//         onClick={() => Handleadd(el.id, el.Quantity, 1)}
//       >
//         +
//       </Button>
//     </Box>
//     <Box>
//       <Text fontSize="lg" fontWeight="semibold" color="red" mt="2px" >
//         {el.Quantity}
//       </Text>
//     </Box>

//     <Box>
//       <Button
//       borderColor="white"
//         bg={"green"}
//         ml={"5px"}
//         mr={"5px"}
//         borderRadius="5px"
//         isDisabled={el.Quantity === 1}
//         onClick={() =>
//           Handleadd(el.id, el.Quantity, -1)
//         }
//       >
//         -
//       </Button>
//     </Box>

//     <Box>
//       <Button
//       borderColor="white"
//       borderRadius="5px"
//       bg="red"
//       color="white"
//         ml={3}
//         onClick={() => {
//           handleDelete(el.id);
//         }}
//       >
//         Delete
//       </Button>
//     </Box>
//   </Box>
// </Box>

// <Box>
//   <h6  style={{marginTop:"5px" , fontFamily:"sans-serif" , fontSize:"15px" , fontWeight:"bolder" }}>${el.price * el.Quantity}.00</h6>
// </Box>
// </Box>))

{
  /* <Button
borderColor="white"
borderRadius="5px"
bg="red"
color="white"
ml={3}
onClick={() => {
  handleDelete(el.id);
}}
>
Delete
</Button> */
}
