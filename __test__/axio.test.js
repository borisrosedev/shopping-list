import { UserService } from "./axios";
import axios from "axios";

jest.mock("axios");

test("should instance ", async function () {
  const users = [
    {
      id: "123",
      email: "boris@gmail.com",
      password: "caroline",
    },
    {
      id: "46",
      email: "caroline@gmail.com",
      password: "alexandre",
    },
  ];
  const resp = { data: users };
  axios.get.mockResolvedValue(resp);
  const userService = new UserService();

  return userService.getAll().then(data => expect(data).toEqual(users));
});
