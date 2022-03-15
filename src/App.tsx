import React, { useEffect, useState } from "react";
// components
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Header from "components/Header";
import Table from "components/Table";
import AddUserButton from "components/AddUserButton";
import GenerateUsersButton from "components/GenerateUsersButton";
// redux
import {
  setUsersData,
  usersAmountSelector,
  usersDataSelector,
} from "store/users";
// db
import { getUsers } from "db";
// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const usersData = useSelector(usersDataSelector);
  const usersAmount = useSelector(usersAmountSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    getUsers().then((data) => {
      dispatch(setUsersData(data));
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <Header />

      {!!usersAmount && !isLoading && (
        <Container className="p-3">
          <Table data={usersData} />
        </Container>
      )}

      {!usersAmount && !isLoading && (
        <Container className="m-4 d-flex flex-column align-items-center justify-content-center">
          <h3>There are no users</h3>
          <p>Please, add user or use generate button</p>
          <div>
            <AddUserButton />
            <GenerateUsersButton />
          </div>
        </Container>
      )}
    </div>
  );
}

export default App;
