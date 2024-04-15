const getData = require("../../functions/getData");

const kycStatus = async (req, resp) => {
  try {
    const {
      data: [{ aadhaarNo }],
    } = await getData("aadhaarNo", "users", `_id = ${req.user}`);

    resp.send({
      status: "SUCCESS",
      data: { kycStatus: aadhaarNo ? "COMPLETED" : "PENDING" },
    });
  } catch (err) {
    console.log("🚀 ~ file: kycStatus.js:5 ~ kycStatus ~ err:", err);
    resp.send({ status: "FAILURE" });
  }
};

module.exports = kycStatus;
