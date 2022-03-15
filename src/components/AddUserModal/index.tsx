import React, { FC, useCallback, useMemo } from "react";
import { Modal } from "react-bootstrap";
import AddUserForm from "components/AddUserForm";
import { useDispatch, useSelector } from "react-redux";
import { addUser, usersDataSelector } from "store/users";
import { UserType } from "types";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddUserModal: FC<IProps> = ({ isOpen, onClose }) => {
  const users = useSelector(usersDataSelector);
  const dispatch = useDispatch();

  const initialUserData = useMemo<UserType>(
    () => ({
      id: users.reduce((acc, user) => (user.id > acc ? user.id : acc), 0) + 1,
      firstName: "",
      lastName: "",
      username: "",
      email: "",
    }),
    [users]
  );

  const handleSubmit = useCallback(
    (values: UserType) => {
      dispatch(addUser(values));
      onClose();
    },
    [dispatch, onClose]
  );

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit User</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <AddUserForm
          values={initialUserData}
          onSubmit={handleSubmit}
          submitLabel="Save Changes"
        />
      </Modal.Body>
    </Modal>
  );
};

export default AddUserModal;
