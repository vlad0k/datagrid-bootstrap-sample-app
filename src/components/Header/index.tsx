import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { usersAmountSelector } from "store/users";
import AddUserButton from "components/AddUserButton";
import DeleteAllUsersButton from "components/DeleteAllUsersButton";

const Header = () => {
  const usersAmount = useSelector(usersAmountSelector);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>React Bootstrap Data Grid</Navbar.Brand>

        {!!usersAmount && (
          <div>
            <AddUserButton />
            <DeleteAllUsersButton />
          </div>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
