import {
   Button,
   useColorMode,
   useColorModeValue,
   VStack,
} from "@chakra-ui/react";
import * as React from "react";

export interface UrlPageProps {
   spacing: number;
   redirectCallback: () => void;
}

const Cart = (props: UrlPageProps): JSX.Element => {
   const { toggleColorMode } = useColorMode();
   const bgColor = useColorModeValue("gray.100", "whiteAlpha.50");

   return (
      <VStack
         w={"full"}
         h={"full"}
         p={props.spacing}
         spacing={props.spacing}
         justifyContent={"center"}
         bg={bgColor}
      >
         <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
         <Button onClick={props.redirectCallback} colorScheme={"brand"}>
            Start Over
         </Button>
      </VStack>
   );
};

export default Cart;
