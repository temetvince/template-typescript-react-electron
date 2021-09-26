import * as React from "react";

export interface RefURLProps {
   text: string;
   onClick: () => void;
}

interface State {
   redirect: boolean;
}

class RefURL extends React.Component<RefURLProps, State> {
   constructor(props: RefURLProps) {
      super(props);

      this.state = {
         redirect: false,
      };
   }

   render(): JSX.Element {
      return (
         <button onClick={() => this.props.onClick()}>{this.props.text}</button>
      );
   }
}

export default RefURL;
