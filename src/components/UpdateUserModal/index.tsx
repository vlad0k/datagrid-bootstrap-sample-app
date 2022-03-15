import React, { FC, useCallback } from 'react';
import { Modal } from 'react-bootstrap';
import AddUserForm from 'components/AddUserForm';
import { useDispatch } from 'react-redux';
import { editUser } from 'store/users';
import { UserType } from 'types';

interface IProps {
  user?: UserType | null;
  onClose: () => void;
}

const UpdateUserModal: FC<IProps> = ({ user, onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (values: UserType) => {
      dispatch(editUser(values));
      onClose();
    },
    [dispatch, onClose],
  );

  return (
    <Modal show={!!user} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit User</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {user && <AddUserForm values={user} onSubmit={handleSubmit} submitLabel="Save Changes" />}
      </Modal.Body>
    </Modal>
  );
};

export default UpdateUserModal;
