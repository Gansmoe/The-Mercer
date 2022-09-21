
import { NavLink,Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


import "../../custom.scss";

import { useDispatch } from "react-redux";
import {  REMOVE_ACTIVE_USER } from "../../redux/slice/authSlice";

import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectName } from "../../redux/slice/authSlice";

function Header() {
  const dispatch = useDispatch();

  const logOutUser = (e) => {
    e.preventDefault();
    localStorage.clear();
    console.log("worked 123");
    dispatch(REMOVE_ACTIVE_USER());
  };

  const isLoggedin = useSelector(selectIsLoggedIn);
  const name = useSelector(selectName);

  const loggedinfo = isLoggedin ? (
   <>
      <div className="px-3">
        <p >{name}</p>
      </div>{" "}
      <div>
        <Button onClick={logOutUser} variant="success">
          Log out
        </Button>
      </div>
    </>
  ) : null;

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">The Mercer</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Link className="nav-links" to="/alarms">Alarms</Link>
            <Link className="nav-links" to="/home">Telemetry</Link>
          </Nav>
          {loggedinfo}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
