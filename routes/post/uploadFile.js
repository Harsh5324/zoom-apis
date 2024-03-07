const Base = require("file-base64");
const uid = require("harsh-uid");

const uploadFile = async (req, resp) => {
  try {
    let { base64, type } = req.body;
    base64 = base64.split("base64,")[1] || base64;
    const path = "./uploads/" + uid() + "." + type;
    Base.decode(base64, path, (err) => {
      if (err) {
        console.log("🚀 ~ base64.decode ~ err:", err);
        return resp.send({ status: "FAILURE" });
      }

      return resp.send({ status: "SUCCESS", data: { url: path.slice(1) } });
    });
  } catch (err) {
    console.log("🚀 ~ uploadFile ~ err:", err);
    resp.send({ status: "FAILURE", msg: "Invalid payload" });
  }
};

module.exports = uploadFile;
