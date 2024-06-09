import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All files are required"));
  }

  const hashPassword = bcryptjs.hashSync(password, 10);

  //this method for credention empty or proper formate to show an error
  const newUser = new User({
    username, //cheking req.body username=== schema model username
    email,
    password: hashPassword,
  });

  try {
    await newUser.save();

    res.json("SignUp Sucscsseful");
  } catch (error) {
    // res.status(500).json({ message: error.message });
    next(error);
  }
};
