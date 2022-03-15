import axios from "axios";
import { FetchUserResponseType } from "types";

const instance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export const fetchUsers = () =>
  instance.get<FetchUserResponseType[]>("/users").then(({ data }) => data);

export default instance;
