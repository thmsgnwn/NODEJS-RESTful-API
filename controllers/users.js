import { v4 as uuidv4 } from "uuid";

// separated function ===>> {createUser,getUserId,deleteUser,updatedUser}
let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`User with the name ${user.firstName} added to the database`);
};

export const getUser = (req, res) => {
  const { id } = req.params;

  const findUser = users.find((x) => x.id === id);

  res.send(findUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((x) => x.id !== id);

  res.send(`The id ${id} was deleted`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const userUpdated = users.find((x) => x.id === id);

  if (firstName) userUpdated.firstName = firstName;
  if (lastName) userUpdated.lastName = lastName;
  if (age) userUpdated.age = age;

  res.send(`User with the id ${id} 
    with name ${firstName} was Updated`);
};
