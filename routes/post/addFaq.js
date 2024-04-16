const addData = require("../../functions/addData");

const addFaq = async (req, resp) => {
  try {
    const { body } = req;

    const res = await addData(body, "faqs");

    resp.send(res);
  } catch (err) {
    console.log("🚀 ~ file: addFaq.js:5 ~ addFaq ~ err:", err);
    resp.send({ status: "FAILURE" });
  }
};

module.exports = addFaq;
