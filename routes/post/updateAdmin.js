const addData = require("../../functions/addData");

const updateAdmin = async (req, resp) => {
  try {
    const { body } = req;
    const res = await addData(body, "admins", `_id = 1`);
    return resp.send(res);
  } catch (err) {
    console.log("🚀 ~ updateAdmin ~ err:", err);
    return resp.send({ status: "FAILURE" });
  }
};

module.exports = updateAdmin;
