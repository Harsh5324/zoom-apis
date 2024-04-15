const getData = require("../../functions/getData");

const bookedBikes = async (req, resp) => {
  try {
    let { data } = await getData(null, "bookedBikes", `user = ${req.user}`);

    data.forEach((item, index) => {
      data[index].status = item.status == 0;
    });

    resp.send({ status: "SUCCESS", data });
  } catch (err) {
    console.log("🚀 ~ file: bookedBikes.js:5 ~ bookedBikes ~ err:", err);
    resp.send({ status: "FAILURE" });
  }
};

module.exports = bookedBikes;
