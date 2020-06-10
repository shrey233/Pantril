//Subcategory-filter
import React from "react";
import {
  Button,
  ButtonGroup,
  CustomInput,
  UncontrolledDropdown,
  UncontrolledDropdownGroup,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  Modal,
  ModalHeader,
  ModalBody,
  Container,
  NavbarBrandProps,
  
  //NavDropdown, 
} from "reactstrap";
//import TopMenu from "../components/top-menu/top-menu";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const Subcategoryfilter = () => {
    return (
        <>
      <Button>
        Fruit
      </Button>
      <Button>
        Vegetagbles
      </Button><Button>
        Berries
      </Button>
      
      
      <UncontrolledDropdown>
  <DropdownToggle color="light" id="dropdown-basic">
    A-Z
  </DropdownToggle>
  <DropdownMenu  >
  <DropdownItem href="#/action-27">A-Z</DropdownItem>
    <DropdownItem href="#/action-28">Z-A</DropdownItem>
    </DropdownMenu>
    <DropdownToggle color="light" id="dropdown-basic">
    Letter
  </DropdownToggle>
  <DropdownMenu  >
    <DropdownItem href="#/action-1">A</DropdownItem>
    <DropdownItem href="#/action-2">B</DropdownItem>
    <DropdownItem href="#/action-3">C</DropdownItem>
    <DropdownItem href="#/action-4">D</DropdownItem>
    <DropdownItem href="#/action-5">E</DropdownItem>
    <DropdownItem href="#/action-6">F</DropdownItem>
    <DropdownItem href="#/action-7">G</DropdownItem>
    <DropdownItem href="#/action-8">H</DropdownItem>
    <DropdownItem href="#/action-9">I</DropdownItem>
    <DropdownItem href="#/action-10">J</DropdownItem>
    <DropdownItem href="#/action-11">K</DropdownItem>
    <DropdownItem href="#/action-12">L</DropdownItem>
    <DropdownItem href="#/action-13">M</DropdownItem>
    <DropdownItem href="#/action-14">N</DropdownItem>
    <DropdownItem href="#/action-15">O</DropdownItem>
    <DropdownItem href="#/action-16">P</DropdownItem>
    <DropdownItem href="#/action-17">Q</DropdownItem>
    <DropdownItem href="#/action-18">R</DropdownItem>
    <DropdownItem href="#/action-19">S</DropdownItem>
    <DropdownItem href="#/action-20">T</DropdownItem>
    <DropdownItem href="#/action-21">U</DropdownItem>
    <DropdownItem href="#/action-22">V</DropdownItem>
    <DropdownItem href="#/action-23">W</DropdownItem>
    <DropdownItem href="#/action-24">X</DropdownItem>
    <DropdownItem href="#/action-25">Y</DropdownItem>
    <DropdownItem href="#/action-26">Z</DropdownItem>

    </DropdownMenu>
</UncontrolledDropdown>


<Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
</Form>
<Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Control as="select">
      <option>A</option>
      <option>B</option>
      <option>C</option>
      <option>D</option>
      <option>E</option>   
      <option>F</option>
      <option>G</option>
      <option>H</option>
      <option>I</option>
      <option>J</option>
      <option>K</option>
      <option>L</option>
      <option>M</option>
      <option>N</option>
      <option>O</option>   
      <option>P</option>
      <option>Q</option>
      <option>R</option>
      <option>S</option>
      <option>T</option>
      <option>U</option>
      <option>V</option>   
      <option>W</option>
      <option>X</option>
      <option>Y</option>
      <option>Z</option>
    </Form.Control>
  </Form.Group> 
  <Form>
  {['checkbox'].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`Fruit`}
      />    
    </div>
  ))}
  {['checkbox'].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`Vegetables`}
      />    
    </div>
  ))}
</Form>
        </>
        



  );
};

export default Subcategoryfilter;