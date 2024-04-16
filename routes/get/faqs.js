const getData = require("../../functions/getData");

const faqs = async (req, resp) => {
  try {
    const res = await getData(null, "faqs");

    resp.send(res);
  } catch (err) {
    console.log("🚀 ~ file: faqs.js:5 ~ faqs ~ err:", err);
    resp.send({ status: "FAILURE" });
  }
};

module.exports = faqs;
