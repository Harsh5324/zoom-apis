const addData = require("../../functions/addData");

const completeKyc = async (req, resp) => {
  try {
    const { aadhaarNo } = req.body;

    await addData({ _id: req.user, aadhaarNo }, "users");

    resp.send({ status: "SUCCESS" });
  } catch (err) {
    console.log("🚀 ~ file: completeKyc.js:5 ~ completeKyc ~ err:", err);
    resp.send({ status: "FAILURE" });
  }
};

module.exports = completeKyc;
