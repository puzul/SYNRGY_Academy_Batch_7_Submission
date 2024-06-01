const { Users } = require("../models");
const jwt = require("jsonwebtoken");

const refreshToken = async(req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(401);
    const user = await Users.findOne({
      where: {
        refreshToken,
      }
    })
    if (user==null) res.sendStatus(403);
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
      if (err) return res.sendStatus(403);
      const { id, name, email, role } = user ;
      const accessToken = jwt.sign({ id, name, email, role }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '15s',
      })
      res.json({ accessToken });
    })
  }
  catch (error) {
    console.log(error);
  }
};

module.exports = { refreshToken }