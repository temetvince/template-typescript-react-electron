import * as React from "react";
import { Redirect } from "react-router-dom";

export interface RootProps {
   text: string;
}

interface State {
   redirect: boolean;
   text: string;
}

class Root extends React.Component<RootProps, State> {
   constructor(props: RootProps) {
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
                  pathname: "/UrlPage",
                  state: {
                     text: "Start Over",
                  },
               }}
            />
         );
      }

      return (
         <div style={styles.app}>
            <div style={styles.container}>
               <button onClick={() => this.buttonClicked()}>
                  {this.state.text}
               </button>
            </div>
         </div>
      );
   }
}

const styles = {
   app: {
      height: "100vh",
      width: "100%",
      alignItems: "center",
   },
   container: {
      flex: 1,
      justifyContent: "center",
   },
};

export default Root;
