const addData = require("../../functions/addData");
const getData = require("../../functions/getData");
const { generateToken } = require("../../functions/token");

const verifyOTP = async (req, resp) => {
  try {
    const { otp, mobNo } = req.body;

    const OTP = 2023;

    if (otp != OTP) return resp.send({ status: "FAILURE", msg: "Invalid OTP" });

    delete req.body.otp;

    const {
      data: [user],
    } = await getData("_id", "users", `mobNo = '${mobNo}'`);

    if (!user) {
      const { data: res } = await addData(req.body, "users");
      return resp.send({
        status: "SUCCESS",
        data: { token: generateToken(res._id) },
      });
    } else {
      return resp.send({
        status: "SUCCESS",
        data: { token: generateToken(user._id) },
      });
    }
  } catch (err) {
    console.log("🚀 ~ file: verifyOTP.js:5 ~ verifyOTP ~ err:", err);
    return resp.send({ status: "FAILURE" });
  }
};

module.exports = verifyOTP;
