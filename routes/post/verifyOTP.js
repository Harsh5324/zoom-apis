const addData = require("../../functions/addData");

const verifyOTP = async (req, resp) => {
  try {
    const { otp } = req.body;

    const OTP = 2023;

    if (otp != OTP) return resp.send({ status: "FAILURE", msg: "Invalid OTP" });

    delete req.body.otp;

    const { data: res } = await addData(req.body, "users");

    return resp.send({
      status: "SUCCESS",
      data: { _id: res._id },
    });
  } catch (err) {
    console.log("🚀 ~ file: verifyOTP.js:5 ~ verifyOTP ~ err:", err);
    return resp.send({ status: "FAILURE" });
  }
};

module.exports = verifyOTP;
