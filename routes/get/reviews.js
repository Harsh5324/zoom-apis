const getData = require("../../functions/getData");

const reviews = async (req, resp) => {
  try {
    const res = await getData(null, "reviews");

    resp.send(res);
  } catch (err) {
    console.log("🚀 ~ file: reviews.js:5 ~ reviews ~ err:", err);
    resp.send({ status: "FAILURE" });
  }
};

module.exports = reviews;
