// import User from "../models/UserModel.js";
const { Users } = require("../models") 
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const whoAmI = async(req, res) => {
  try {
    let where = { id: req.id };
    const response = await Users.findOne({
      where,
      attributes: ['id', 'name', 'email', 'role', 'refreshToken']
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

const registerMember = async (req, res) => {
  try {
    const { name, email, password, confPassword } = req.body;
    const role = 'member';
    if (password !== confPassword) res.status(400).json({msg: `Password Doesn't Match`});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    await Users.create({
      name,
      email,
      password: hashPassword,
      role
    });
    res.status(201).json({msg: 'Member User Created'});
  } catch (error) {
    console.log(error.message);
  }
}

const loginUser = async(req, res) => {
  console.log(Users.name);
  try {
    const user = await Users.findOne({
      where: {
        email: req.body.email,
      }
    });
    if (user) {
      const match = await bcrypt.compare(req.body.password, user.password)
      if(!match) res.status(400).json({msg: 'Incorrect Password'});
      const { id, name, email, role } = user;
      const accessToken = jwt.sign({ id, name, email, role }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '20s'
      });
      const refreshToken = jwt.sign({ id, name, email, role }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: '1d'
      });
      await Users.update({ refreshToken }, {
        where: {
          id,
        }
      });
      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        maxAge: 24*60*60*1000
      })
      res.json({ accessToken });
    }
    else res.status(404).json({msg: 'Email Not Found'})
  } catch (error) {
    console.log(error.message);
  }
}

const logoutUser = async(req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if(!refreshToken) res.sendStatus(204);
  const user = await Users.findOne({
    where: {
      refreshToken,
    }
  })
  if (user==null) res.sendStatus(204);
  const { id } = user;
  await Users.update({
    refreshToken: null,
  }, {
    where: {
      id,
    }
  })
  res.clearCookie('refreshToken');
  res.sendStatus(200);
}

const registerAdmin = async (req, res) => {
  try {
    const { name, email, password, confPassword } = req.body;
    const role = 'admin';
    if (password !== confPassword) res.status(400).json({msg: `Password Doesn't Match`});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    await Users.create({
      name,
      email,
      password: hashPassword,
      role
    });
    res.status(201).json({msg: 'Admin User Created'});
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { whoAmI, registerMember, registerAdmin, loginUser, logoutUser }