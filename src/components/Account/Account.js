import React from 'react';

// import { Nav, Navbar, Icon, Dropdown, Avatar, Container, FlexboxGrid } from 'rsuite';
// import 'rsuite/dist/styles/rsuite-default.css'
import { Image } from 'react-bootstrap';
import './Account.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Account extends React.Component {
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
       <div className="account">
            <Image className="avatar" src="https://avatars2.githubusercontent.com/u/12592949?s=460&v=4" roundedCircle />
            <div className="address" >0x000...03fa</div>
       </div>
     );
    }
  }
export default Account;