const getData = require("../../functions/getData");

const bike = async (req, resp) => {
  try {
    const { id } = req.params;
    const {
      data: [bike],
    } = await getData(null, "bikes", `_id = ${id}`);

    if (!bike) return resp.send({ status: "FAILURE", msg: "Bike not found" });

    return resp.send({ status: "SUCCESS", data: bike });
  } catch (err) {
    console.log("🚀 ~ bike ~ err:", err);
    resp.send({ status: "FAILURE" });
  }
};

module.exports = bike;
