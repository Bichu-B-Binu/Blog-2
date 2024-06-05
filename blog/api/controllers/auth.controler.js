import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: "All fields are required" });
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

    res.json("SignUp Succsseful");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
