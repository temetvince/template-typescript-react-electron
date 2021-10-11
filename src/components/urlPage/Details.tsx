import {
   Button,
   Checkbox,
   GridItem,
   FormControl,
   FormLabel,
   Heading,
   Input,
   Select,
   SimpleGrid,
   Text,
   VStack,
   useBreakpointValue,
} from "@chakra-ui/react";
import * as React from "react";

export interface UrlPageProps {
   spacing: number;
}

const Details = (props: UrlPageProps): JSX.Element => {
   const colSpan = useBreakpointValue({ base: 2, md: 1 });

   return (
      <VStack
         w={"full"}
         h={"full"}
         p={props.spacing}
         spacing={props.spacing}
         alignItems={"flex-start"}
      >
         <VStack spacing={3} alignItems={"flex-start"}>
            <Heading size={"2xl"}>Your details</Heading>
            <Text>If you already have an account, click here to log in.</Text>
         </VStack>
         <SimpleGrid columns={2} columnGap={3} rowGap={6} w={"full"}>
            <GridItem colSpan={colSpan}>
               <FormControl>
                  <FormLabel>First Name</FormLabel>
                  <Input placeholder={"John"} />
               </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
               <FormControl>
                  <FormLabel>Last Name</FormLabel>
                  <Input placeholder={"Doe"} />
               </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
               <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Input placeholder={"Blvd. Broken Dreams 21"} />
               </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
               <FormControl>
                  <FormLabel>City</FormLabel>
                  <Input placeholder={"San Francisco"} />
               </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
               <FormControl>
                  <FormLabel>Country</FormLabel>
                  <Select>
                     <option value={"usa"}>United States of America</option>
                     <option value={"other"}>Other</option>
                  </Select>
               </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
               <Checkbox defaultChecked>Ship to billing address.</Checkbox>
            </GridItem>
            <GridItem colSpan={2}>
               <Button variant={"primary"} size={"lg"} w={"full"}>
                  Place Order
               </Button>
            </GridItem>
         </SimpleGrid>
      </VStack>
   );
};

export default Details;
