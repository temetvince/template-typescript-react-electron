import * as React from "react";
import { Redirect } from "react-router-dom";
import { Container, Flex } from "@chakra-ui/react";
import Details from "./Details";
import Cart from "./Cart";

export interface UrlPageProps {
   text: string;
}

interface State {
   redirect: boolean;
   text: string;
}

const spacing = 10;

class UrlPage extends React.Component<UrlPageProps, State> {
   constructor(props: UrlPageProps) {
      super(props);

      this.state = {
         redirect: false,
         text: this.props.text,
      };
   }

   buttonClicked = (): void => {
      this.setState({ redirect: true });
   };

   render(): JSX.Element {
      if (this.state.redirect) {
         return (
            <Redirect
               to={{
                  pathname: "/",
                  state: { text: this.state.text },
               }}
            />
         );
      }

      return (
         <div>
            <Container maxW={"container.xl"} p={0}>
               <Flex
                  h={{ base: "auto", md: "100vh" }}
                  py={[0, spacing, spacing * 2]}
                  direction={{ base: "column-reverse", md: "row" }}
               >
                  <Cart
                     spacing={spacing}
                     redirectCallback={this.buttonClicked}
                  />
                  <Details spacing={spacing} />
               </Flex>
            </Container>
         </div>
      );
   }
}

export default UrlPage;
