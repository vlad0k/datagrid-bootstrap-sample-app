//
export type UserType = {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
};

export type FetchUserResponseType = {
  email: string;
  id: number;
  name: {
    firstname: string;
    lastname: string;
  };
  username: string;
};
