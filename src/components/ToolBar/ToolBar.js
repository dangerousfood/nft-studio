import React from 'react';
import './ToolBar.css';
import Settings from '../Settings/Settings'
import Account from '../Account/Account'

class ToolBar extends React.Component {
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
        <div className="toolBar">
            <Account/>
            <Settings/>
        </div>
     );
    }
  }
export default ToolBar;