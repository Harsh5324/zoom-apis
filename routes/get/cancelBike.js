const addData = require("../../functions/addData");

const cancelBike = async (req, resp) => {
  try {
    await addData({ _id: req.params.id, status: 1 }, "bookedBikes");
    resp.send({ status: "SUCCESS" });
  } catch (err) {
    console.log("🚀 ~ file: cancelBike.js:5 ~ cancelBike ~ err:", err);
    resp.send({ status: "FAILURE" });
  }
};

module.exports = cancelBike;
