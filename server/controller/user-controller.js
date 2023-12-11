import { response } from "express";
import User from "../model/user-schema.js";

export const userSignUp = async (req, res) => {
  try {
    const exist = await User.findOne({ username: req.body.userName });
    if (exist) {
      return res.status(401).json({ message: "Username already exist" });
    }
    const user = req.body;
    const newUser = new User(user);
    await newUser.save();

    res.status(200).json({ message: user });
  } catch (e) {
    console.log("Error find in userSignUp controller due to ", e.message);
    res.status(500).json({ message: e.message });
  }
};
