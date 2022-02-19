import React from 'react';
import './Header.scss';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from 'utils/Typescript';
import { logout } from 'redux/actions/userAction';

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state: RootStore) => state.userLogin);

  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand>MOCHI</Navbar.Brand>
          </Link>

          {userInfo ? (
            <NavDropdown title={userInfo?.user?.name} id="username">
              <NavDropdown.Item>
                <Link to="/profile">Profile</Link>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Link to="/login">Sign In</Link>
          )}
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
