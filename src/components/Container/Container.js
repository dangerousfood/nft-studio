import React from 'react';
import './Container.css';
import ToolBar from '../ToolBar/ToolBar';
import MainView from '../MainView/MainView';

class Container extends React.Component {
    constructor() {
      super();
      this.state = {}
    //   this.sendTransaction = this.sendTransaction.bind(this)
    //   this.deployContract = this.deployContract.bind(this)
    //   this.sendScript = this.sendScript.bind(this)
    //   this.authenticate = this.authenticate.bind(this)
    //   this.unauthenticate = this.unauthenticate.bind(this)
    //   this.deployImplContract = this.deployImplContract.bind(this)
    }

    componentDidMount() {
    //   this.unauthenticate()
    }

    render() {
     return (
        <div className="container">
          <ToolBar/>
          <MainView/>
        </div>
     );
    }
  }
export default Container;