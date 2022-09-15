import { NavLink,Button, Container, Nav, Navbar } from "react-bootstrap";

import "../../custom.scss";
import { ShowOnLogOut,ShowOnLogin } from "./HiddenLinkes";
import { useDispatch } from "react-redux";
import { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } from "../../redux/slice/authSlice";



function Header() {


  const dispatch = useDispatch();

  const logOutUser = (e) => {
    e.preventDefault();
    localStorage.clear();
    console.log("worked 123")
    dispatch(REMOVE_ACTIVE_USER())    
  };

  

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">The Mercer</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
          </Nav>

          <ShowOnLogOut>
              <Button onClick={logOutUser} variant="outline-success">Log out</Button>
          </ShowOnLogOut>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
