const moment = require("moment");
const getData = require("../../functions/getData");

const bikes = async (req, resp) => {
  try {
    let { startDate, endDate } = req.query;
    console.log("🚀 ~ file: bikes.js:7 ~ bikes ~ startDate:", startDate);

    let { data: bikes } = await getData(null, "bikes");

    if (
      startDate &&
      endDate &&
      moment(startDate, "YYYY-MM-DD", true).isValid() &&
      moment(endDate, "YYYY-MM-DD", true).isValid()
    ) {
      startDate = moment(startDate).format("YYYY-MM-DD HH:mm:ss");
      endDate = moment(endDate).format("YYYY-MM-DD HH:mm:ss");

      await Promise.all(
        bikes.map(async (bike, index) => {
          const { data } = await getData(
            "_id",
            "bookedBikes",
            `endDate <= '${startDate}' && bike = ${bike._id}`
          );
          bikes[index].quantity = bike.quantity + data.length;
          console.log(
            "🚀 ~ file: bikes.js:27 ~ bikes.map ~ data.length:",
            data.length
          );
        })
      );

      resp.send({ status: "SUCCESS", data: bikes });
    } else {
      resp.send({ status: "SUCCESS", data: bikes });
    }
  } catch (err) {
    console.error("Error occurred:", err);
    resp.status(500).send({ status: "FAILURE" });
  }
};

module.exports = bikes;
