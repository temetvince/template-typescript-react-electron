import * as React from "react";
import { Redirect } from "react-router-dom";
import RefURL from "./RefURL";
import { tryCatch } from "../../Utils";

export interface UrlPageProps {
   text: string;
}

interface State {
   redirect: boolean;
   text: string;
   hasGetBeenCalled: boolean;
}

class UrlPage extends React.Component<UrlPageProps, State> {
   constructor(props: UrlPageProps) {
      super(props);

      this.state = {
         redirect: false,
         text: this.props.text,
         hasGetBeenCalled: false,
      };
   }

   buttonClicked = (): void => {
      this.setState({ redirect: true });
   };

   downloadButtonClicked = async (url: URL): Promise<void> => {
      return await tryCatch(() => {
         window.open(url);
      });
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
         <div style={styles.app}>
            <div>
               <RefURL
                  text={"My Personal Website"}
                  onClick={() =>
                     this.downloadButtonClicked(new URL("http://elcasey.com"))
                  }
               />
            </div>
            <div>
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
      flexFlow: "column",
      gap: "1em",
   },
};

export default UrlPage;
