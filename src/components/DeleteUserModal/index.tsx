import React, { FC } from "react";
import { Button, Modal } from "react-bootstrap";
import { UserType } from "types";
import { useDispatch } from "react-redux";
import { deleteUser } from "store/users";

interface IProps {
  user?: UserType | null;
  onClose: () => void;
}

const DeleteUserModal: FC<IProps> = ({ user, onClose }) => {
  const dispatch = useDispatch();

  const handleDeleteUser = () => {
    if (user) {
      dispatch(deleteUser(user.id));
      onClose();
    }
  };

  return (
    <Modal show={!!user} onHide={onClose}>
      <Modal.Header>Are you sure to delete {user?.username}?</Modal.Header>
      <Modal.Footer>
        <Button variant="danger" onClick={handleDeleteUser}>
          Yes
        </Button>
        <Button variant="secondary" onClick={onClose}>
          No
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteUserModal;
