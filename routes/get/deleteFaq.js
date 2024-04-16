const deleteData = require("../../functions/deleteData");

const deleteFaq = async (req, resp) => {
  try {
    const res = await deleteData(req.params.id, "faqs");
    resp.send(res);
  } catch (err) {
    console.log("🚀 ~ file: deleteFaq.js:5 ~ deleteFaq ~ err:", err);
    resp.send({ status: "FAILURE" });
  }
};

module.exports = deleteFaq;
