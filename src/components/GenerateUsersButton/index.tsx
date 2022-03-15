import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setUsersData } from "store/users";
import { fetchUsers } from "api";

const GenerateUsersButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleGenerateUsers = async () => {
    setIsLoading(true);

    try {
      const fetchedUsers = await fetchUsers();

      const usersData = fetchedUsers.map((user) => ({
        id: user.id,
        firstName: user.name.firstname,
        lastName: user.name.lastname,
        username: user.username,
        email: user.email,
      }));

      dispatch(setUsersData(usersData));
    } catch (err: any) {
      console.log(err.response.data);
    }

    setIsLoading(false);
  };

  return (
    <Button className="m-1 " variant="success" onClick={handleGenerateUsers}>
      Generate Users
      <Spinner
        className="mx-2"
        animation="border"
        variant="light"
        size={"sm"}
        hidden={!isLoading}
      />
    </Button>
  );
};

export default GenerateUsersButton;
