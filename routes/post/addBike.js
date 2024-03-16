const addData = require("../../functions/addData");

const addBike = async (req, resp) => {
  try {
    const { body } = req;
    const res = await addData(body, "bikes");
    return resp.send(res);
  } catch (err) {
    console.log("🚀 ~ addBike ~ err:", err);
    resp.send({ status: "FAILURE", msg: "Failed to add bike" });
  }
};

module.exports = addBike;
