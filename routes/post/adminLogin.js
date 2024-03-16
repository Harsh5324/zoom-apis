const getData = require("../../functions/getData");

const adminLogin = async (req, resp) => {
  try {
    const { body } = req;
    const {
      data: [admin],
    } = await getData(
      "_id",
      "admins",
      `username = '${body.username}' && password = '${body.password}'`
    );

    if (!admin)
      return resp.send({ status: "FAILURE", msg: "Invalid credentials" });

    return resp.send({ status: "SUCCESS", data: { _id: admin._id } });
  } catch (err) {
    console.log("🚀 ~ adminLogin ~ err:", err);
    return resp.send({ status: "FAILURE", msg: "Invalid credentials" });
  }
};

module.exports = adminLogin;
