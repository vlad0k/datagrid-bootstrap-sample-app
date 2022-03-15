import React, { FC } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Field, Formik, Form as FormikForm } from 'formik';
import { UserType } from 'types';
import * as Yup from 'yup';

interface IProps {
  values: UserType;
  onSubmit: (values: UserType) => void;
  submitLabel?: string;
}

const AddUserSchema = Yup.object().shape({
  email: Yup.string().email('Please, enter a valid email').required('This field is required'),
  firstName: Yup.string().required('This field is required'),
  lastName: Yup.string().required('This field is required'),
  username: Yup.string().required('This field is required'),
});

const AddUserForm: FC<IProps> = ({ values, onSubmit, submitLabel = 'Submit' }) => {
  return (
    <Formik
      initialValues={values}
      validationSchema={AddUserSchema}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ errors, touched }) => (
        <Form as={FormikForm}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Field name="username" placeholder="Enter name" as={Form.Control} />
            {errors.username && touched.username && (
              <Form.Text className="text-danger">{errors.username}</Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Field name="firstName" placeholder="Enter name" as={Form.Control} />
            {errors.firstName && touched.firstName && (
              <Form.Text className="text-danger">{errors.firstName}</Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Field name="lastName" placeholder="Enter last name" as={Form.Control} />
            {errors.lastName && touched.lastName && (
              <Form.Text className="text-danger">{errors.lastName}</Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Field name="email" type="email" placeholder="name@example.com" as={Form.Control} />
            {errors.email && touched.email && (
              <Form.Text className="text-danger">{errors.email}</Form.Text>
            )}
          </Form.Group>

          <Form.Group>
            <Button type="submit">{submitLabel}</Button>
          </Form.Group>
        </Form>
      )}
    </Formik>
  );
};

export default AddUserForm;
