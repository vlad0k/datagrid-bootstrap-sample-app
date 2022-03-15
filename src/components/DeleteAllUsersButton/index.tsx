import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { deleteAllUsers } from "store/users";

const DeleteAllUsersButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const handleDeleteAllUsers = () => {
    dispatch(deleteAllUsers());
  };

  return (
    <>
      <Button className="m-1" variant="danger" onClick={handleModalOpen}>
        Delete All Users
      </Button>
      <Modal show={isModalOpen} onHide={handleModalClose}>
        <Modal.Header>Are you sure to delete all users?</Modal.Header>
        <Modal.Footer>
          <Button variant="danger" onClick={handleDeleteAllUsers}>
            Yes
          </Button>
          <Button variant="secondary" onClick={handleModalClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteAllUsersButton;
