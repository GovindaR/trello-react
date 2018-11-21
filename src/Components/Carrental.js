import React,{Component} from 'react';
import { ControlLabel,controlId,FormControl,Col,Button,Form,FormGroup,Checkbox } from 'react-bootstrap';

import "../assets/css/reset.css";
import "../assets/css/App.css";



class Carrental extends Component{

    render(){
        return(
       <div className="detail" style={{width: '80%',display:"block"}}>
            <div className="description" style={{width: '100%', height: '100%',display:"block"}}>
            <Form horizontal>
            <FormGroup controlId="formHorizontalFirstName">
    <Col componentClass={ControlLabel} sm={2}>
      FirstName
    </Col>
    <Col sm={10}>
      <FormControl type="text" placeholder="FirstName" />
    </Col>
  </FormGroup>
  <FormGroup controlId="formHorizontalLastName">
    <Col componentClass={ControlLabel} sm={2}>
      LastName
    </Col>
    <Col sm={10}>
      <FormControl type="text" placeholder="LastName" />
    </Col>
  </FormGroup>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} sm={2}>
      Email
    </Col>
    <Col sm={10}>
      <FormControl type="email" placeholder="Email" />
    </Col>
  </FormGroup>
  <FormGroup controlId="formHorizontalNumber">
    <Col componentClass={ControlLabel} sm={2}>
      Mobile.no
    </Col>
    <Col sm={10}>
      <FormControl type="number" placeholder="Number" />
    </Col>
  </FormGroup>
  <FormGroup controlId="formHorizontalNumber">
    <Col componentClass={ControlLabel} sm={2}>
      Mobile.no
    </Col>
    <Col sm={10}>
      <FormControl type="textarea" placeholder="Message" />
    </Col>
  </FormGroup>
  


  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Button type="submit">Sign in</Button>
    </Col>
  </FormGroup>
</Form>
            </div>
       </div>

        );
    }
}

export default Carrental;
