import React, { FC, useCallback, useState } from "react";
import { ThreeDots } from "react-bootstrap-icons";
import BTable from "react-bootstrap/Table";
import { Dropdown } from "react-bootstrap";
import CustomToggle from "components/DropdownToggle";
import UpdateUserModal from "components/UpdateUserModal";
import DeleteUserModal from "components/DeleteUserModal";
import { UserType } from "types";

interface IProps {
  data: {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
  }[];
}

const Table: FC<IProps> = ({ data = [] }) => {
  const [currentUserToUpdate, setCurrentUserToUpdate] =
    useState<UserType | null>(null);

  const [currentUserToDelete, setCurrentUserToDelete] =
    useState<UserType | null>(null);

  const handleUpdateUserModalClose = useCallback(() => {
    setCurrentUserToUpdate(null);
  }, []);

  const handleDeleteUserModalClose = useCallback(() => {
    setCurrentUserToDelete(null);
  }, []);

  return (
    <>
      <UpdateUserModal
        user={currentUserToUpdate}
        onClose={handleUpdateUserModalClose}
      />

      <DeleteUserModal
        user={currentUserToDelete}
        onClose={handleDeleteUserModalClose}
      />

      <BTable className="text-center" striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => {
            const { id, firstName, lastName, username, email } = user;

            return (
              <tr key={id}>
                <td>
                  <Dropdown>
                    <Dropdown.Toggle as={CustomToggle}>
                      <ThreeDots />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => setCurrentUserToUpdate(user)}
                      >
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item
                        color="danger"
                        onClick={() => setCurrentUserToDelete(user)}
                      >
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
                <td>{id}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{username}</td>
                <td>{email}</td>
              </tr>
            );
          })}
        </tbody>
      </BTable>
    </>
  );
};

export default Table;
