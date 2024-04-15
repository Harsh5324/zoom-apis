const moment = require("moment");
const getData = require("../../functions/getData");

const bikes = async (req, resp) => {
  try {
    let { startDate, endDate } = req.query;

    let q = null;

    if (startDate && endDate) {
      startDate = moment(startDate).format("YYYY-MM-DD HH:mm:ss");
      endDate = moment(endDate).format("YYYY-MM-DD HH:mm:ss");

      q = `endDate <= '${startDate}'`;
    }

    let { data: bikes } = await getData(null, "bikes");

    const prom = await bikes.map(async (item, index) => {
      if (item.quantity == 0 && startDate && endDate) {
        const { data } = await getData(
          "_id",
          "bookedBikes",
          `endDate <= '${startDate}' && bike = ${item._id}`
        );
        bikes[index].quantity = data.length;
      }
    });

    await Promise.all(prom);

    resp.send({ status: "SUCCESS", data: bikes });
  } catch (err) {
    console.log("🚀 ~ bikes ~ err:", err);
    resp.send({ status: "FAILURE" });
  }
};

module.exports = bikes;
