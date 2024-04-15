const addData = require("../../functions/addData");
const getData = require("../../functions/getData");

const bookBike = async (req, resp) => {
  try {
    const { body, user } = req;

    const {
      data: [bike],
    } = await getData(null, "bikes", `_id = ${body.bike}`);

    if (bike.quantity == 0)
      return resp.send({ status: "FAILURE", msg: "Bike is not available" });

    await addData({ _id: bike._id, quantity: bike.quantity - 1 });

    const res = await addData({ ...body, user }, "bookedBikes");

    resp.send(res);
  } catch (err) {
    console.log("🚀 ~ file: bookBike.js:5 ~ bookBike ~ err:", err);
    resp.send({ status: "FAILURE" });
  }
};

module.exports = bookBike;
