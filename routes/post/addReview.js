const addData = require("../../functions/addData");

const addReview = async (req, resp) => {
  try {
    const { body } = req;

    const res = await addData(body, "reviews");

    resp.send(res);
  } catch (err) {
    console.log("🚀 ~ file: addReview.js:5 ~ addReview ~ err:", err);
    resp.send({ status: "FAILURE" });
  }
};

module.exports = addReview;
