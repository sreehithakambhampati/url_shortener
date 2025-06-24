import wrapAsync from "../utils/tryCatch.js";
import { findUserByEmail, createUser,findUserByEmailByPassword } from "../dao/user.dao.js";
import { ConflictError } from "../utils/errorHandler.js";
import { signToken } from "../utils/helper.js";
const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "None",
  maxAge: 1000 * 60 * 60, 
};



export const register_user = wrapAsync(async (req, res) => {
  const { name, email, password } = req.body;
  const user = await findUserByEmail(email);

  if (user) throw new ConflictError("User already exists");
  const newUser = await createUser(name, email, password);
  const token = signToken({ id: newUser._id });
  req.user = user
  res.cookie("accessToken", token, cookieOptions);
  res.status(200).json({ message: "Registration successful" });
});

export const login_user = wrapAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await findUserByEmailByPassword(email)
  if(!user) throw new Error("Invalid email or password")
  req.user = user
  const isPasswordValid = await user.comparePassword(password)
   if(!isPasswordValid) throw new Error("Invalid email or password")
  const token = signToken({ id: user._id });
  res.cookie("accessToken", token, cookieOptions);
  res.status(200).json({ user:user,message: "Login successful" }); 
});

export const logout_user = wrapAsync( async (req, res) => {
    res.clearCookie("accessToken", cookieOptions)
    res.status(200).json({message:"logout success"})
})

export const get_current_user = wrapAsync( async (req, res) => {
    res.status(200).json({user:req.user})
})
