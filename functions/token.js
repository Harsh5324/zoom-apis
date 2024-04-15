const jwt = require("jsonwebtoken");

const key = `ORZvS£bvlo<K'£^8HuUJsd<36J/7/;+2?[E*>6.XxV(8i9p5$u`;

const generateToken = (data) => {
  return jwt.sign(data, key, { expiresIn: "30d" });
};

const authenticate = (req, resp, next) => {
  jwt.verify(token, key, (err, decoded) => {
    if (err) {
      console.log("🚀 ~ file: token.js:12 ~ jwt.verify ~ err:", err);
      return resp.send({ status: "FAILED", msg: "Invalid token" });
    } else {
      req.user = decoded;
      next();
    }
  });
};

module.exports = { generateToken, authenticate };
