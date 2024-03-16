const getData = require("../../functions/getData");

const bikes = async (req, resp) => {
  try {
    const res = await getData(null, "bikes");
    return resp.send(res);
  } catch (err) {
    console.log("🚀 ~ bikes ~ err:", err);
    resp.send({ status: "FAILURE" });
  }
};

module.exports = bikes;
