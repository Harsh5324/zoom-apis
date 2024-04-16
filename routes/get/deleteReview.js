const deleteData = require("../../functions/deleteData");

const deleteReview = async (req, resp) => {
  try {
    const res = await deleteData(req.params.id, "reviews");
    resp.send(res);
  } catch (err) {
    console.log("🚀 ~ file: deleteReview.js:5 ~ deleteReview ~ err:", err);
    resp.send({ status: "FAILURE" });
  }
};

module.exports = deleteReview;
