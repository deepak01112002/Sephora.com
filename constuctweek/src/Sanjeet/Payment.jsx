import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Input,
  chakra,
  useDisclosure,
} from "@chakra-ui/react";

import React, { useReducer } from "react";
import { Link } from "react-router-dom";

const initialState = {
  name: "",
  lname : "",
  email: "",
  phone: "",
  cardno: "",
  expirey: "",
  address : "",
  cvv: "",
  isDisabled : true
}

const reducer = (state, action) => {
  switch (action.type) {
    case "name": {
      return {
        ...state,
        name: action.payload,
      };
    }

    case "lname" :{
      return {
        ...state,
        lname : action.payload
      }
    }
    case "email": {
      return {
        ...state,
        email: action.payload,
      };
    }
    case "phone": {
      return {
        ...state,
        phone: action.payload,
      };
    }
    case "cardno": {
      return {
        ...state,
        cardno: action.payload,
      };
    }
    case "expirey": {
      return {
        ...state,
        expirey: action.payload,
      };
    }

    case "cvv": {
      return {
        ...state,
        cvv: action.payload,
      };
    }

    case "address" : {
      return {
        ...state,
        address : action.payload
      }
    }
    default: {
      return state;
    }
  }
};



const Payment = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, dispatch] = useReducer(reducer, initialState);
  const cancelRef = React.useRef();
  return (
    <Box
      maxW={"max-content"}
      p={{ base: 5, md: 10 }}
      textAlign="left"
      margin="auto"
      //   border={"2px solid black"}
    >
      <Box
        display={"flex"}
        justifyContent="space-between"
        margin={"auto"}
        flexWrap="wrap"
      >
        <Box m={"10px"} p="10px">
          <h1
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            CheckOut
          </h1>
          <hr style={{ color: "black", border: "1px solid " }} />
          <Box
            display="flex"
            justifyContent="space-evenly"
            borderRadius={"5px"}
            bgGradient="linear(to-t, green.200, pink.500)"
            flexWrap="wrap"
            bg="ButtonShadow"
          >
            <Box w="max-content">
              <Box
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                margin="auto"
              >
                <Box margin="10px">
                  <Input type="text" placeholder="Enter First Name*" isRequired
                   value={state.name}
                   onChange={(e) =>
                     dispatch({ type: "name", payload: e.target.value })
                   } />
                </Box>

                <Box margin="10px">
                  <Input placeholder="Enter Last Name*" isRequired
                   value={state.lname}
                   onChange={(e) =>
                     dispatch({ type: "lname", payload: e.target.value })
                   } />
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                margin="auto"
              >
                <Box margin="10px">
                  <Input placeholder="Phone*" isRequired
                   value={state.phone}
                   onChange={(e) =>
                     dispatch({ type: "phone", payload: e.target.value })
                   } />
                </Box>

                <Box margin="10px">
                  <Input placeholder="Zip/Postal Code*" isRequired
                   value={state.postal}
                   onChange={(e) =>
                     dispatch({ type: "postal", payload: e.target.value })
                   } />
                </Box>
              </Box>

              <Box margin="10px">
                <Input placeholder="Street Address*" isRequired
                   value={state.address}
                   onChange={(e) =>
                     dispatch({ type: "address", payload: e.target.value })
                   } />
              </Box>

              <a
                style={{ color: "blue", marginLeft: "20px", fontSize: "12px" }}
                href="https://www.sephora.com/checkout/shipping"
              >
                Add Apt #, Floor, etc.
              </a>
              <br />
              <h6 style={{ marginLeft: "20px", fontSize: "12px" }}>
                Ship To Fedex Pickup Location
              </h6>
              <a
                style={{ color: "blue", marginLeft: "20px", fontSize: "12px" }}
                href="https://www.sephora.com/checkout/shipping"
              >
                Select a location near you
              </a>
              <br />
              <br />

              <Button
                mb="10px"
                ml={"12px"}
                bg="black"
                _hover={{ bg: "red" }}
                color="white"
                onClick={onOpen}

                isDisabled={state.name==="" || state.phone === "" || state.address === ""}
              >
                Save And Continue
              </Button>
              <AlertDialog
                motionPreset="slideInBottom"
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
              >
                <AlertDialogOverlay />

                <AlertDialogContent>
                  <AlertDialogHeader>Add Card Details</AlertDialogHeader>
                  <AlertDialogCloseButton />
                  <AlertDialogBody>
                   Address Saved..Add Your Card Details to continue
                  </AlertDialogBody>
                  <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                      No
                    </Button>
                    <Button colorScheme="red" ml={3} onClick={onClose} >
                      OK
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </Box>
          </Box>
          <hr />
          <h1
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            Delievery and Gift Options
          </h1>
          <hr style={{ color: "black", border: "1px solid " }} />
          <Box
            display="flex"
            justifyContent="left"
            borderRadius={"5px"}
            bgGradient="linear(to-t, green.200, pink.500)"
            flexWrap="wrap"
            bg="ButtonShadow"
          >
            <Box w="max-content">
              <Box m={"10px"}>
                <chakra.h6 fontSize="12px" fontFamily={"sans-serif"}>
                  Free - Standard
                </chakra.h6>
                <chakra.h6
                  color={"green.400"}
                  fontSize="12px"
                  fontFamily={"sans-serif"}
                >
                  Delivery By Tue, Apr 4
                </chakra.h6>
              </Box>
            </Box>
          </Box>
          <hr />
          <h1
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            Payment Method
          </h1>
          <hr style={{ color: "black", border: "1px solid " }} />
          <Box
            display="flex"
            justifyContent="space-evenly"
            borderRadius={"5px"}
            bgGradient="linear(to-t, green.200, pink.500)"
            flexWrap="wrap"
            bg="ButtonShadow"
          >
            <Box w="max-content">
              <Box
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                margin="auto"
              >
                <Box margin="10px">
                  <Input isRequired
                   type="text" placeholder="Enter First Name*" value={state.name}
                   onChange={(e) =>
                     dispatch({ type: "name", payload: e.target.value })
                   }/>
                </Box>

                <Box margin="10px">
                  <Input isRequired placeholder="Enter Last Name*" value={state.lname}
                    onChange={(e) =>
                      dispatch({ type: "lname", payload: e.target.value })
                    } />
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                margin="auto"
              >
                <Box margin="10px">
                  <Input isRequired placeholder="Expiry Month*" value={state.expirey}
                    onChange={(e) =>
                      dispatch({ type: "expirey", payload: e.target.value })
                    } />
                </Box>

                <Box margin="10px">
                  <Input isRequired placeholder="Cvv*"  value={state.cvv}
                    onChange={(e) =>
                      dispatch({ type: "cvv", payload: e.target.value })

                    } />
                </Box>
              </Box>

              <Box margin="10px">
                <Input isRequired placeholder="Card Number*"   value={state.cardno}
                    onChange={(e) =>
                      dispatch({ type: "cardno", payload: e.target.value })
                    } />
              </Box>
             
              <Link to="/otp">
              <Button
                mb="10px"
                ml={"12px"}
                bg="black"
                _hover={{ bg: "red" }}
                color="white"
                isDisabled={state.cvv==="" || state.name === "" || state.cardno === ""}
              >
                Proceed For Otp
              </Button>
              </Link>
            </Box>
          </Box>
        </Box>

        <Box mt="50px" p={"10px"}>
          <Box border="1px solid grey" borderRadius="5px">
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
                  $34
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
                  <h6
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    $5
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
                  <h6 style={{ fontSize: "15px", fontFamily: "sans-serif" }}>
                    Estimated Tax & Other Fees
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
                    $10
                  </h6>
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
                  <h6
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    $49
                  </h6>
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


            <Box
              display="flex"
              boxSize="100%"
              objectFit="contain"
              justifyContent="center"
              alignItems="center"
            >
              <Link to="https://www.paypal.com/in/home">
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
              </Link>
            </Box>
          </Box>

          {/* <Box border="1px solid grey" borderRadius="5px" m="auto">
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
          </Box> */}
          <hr />

          {/* <Box border="1px solid grey" borderRadius="5px" marginBottom="10px">
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
            </Box> */}
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

export default Payment;
