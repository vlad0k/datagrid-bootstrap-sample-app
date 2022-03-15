import React, { useCallback, useState } from "react";
import { Button } from "react-bootstrap";
import AddUserModal from "components/AddUserModal";

const AddUserButton = () => {
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);

  const handleAddUserModalOpen = () => setIsAddUserModalOpen(true);

  const handleAddUserModalClose = useCallback(
    () => setIsAddUserModalOpen(false),
    []
  );

  return (
    <>
      <Button className="m-1" onClick={handleAddUserModalOpen}>
        Add User
      </Button>
      <AddUserModal
        isOpen={isAddUserModalOpen}
        onClose={handleAddUserModalClose}
      />
    </>
  );
};

export default AddUserButton;
