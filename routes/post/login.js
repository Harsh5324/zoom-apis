const login = async (req, resp) => {
  try {
    return resp.send({ status: "SUCCESS" });
  } catch (err) {
    console.log("🚀 ~ file: login.js:32 ~ login ~ err:", err);
    return resp.send({ status: "FAILURE" });
  }
};

module.exports = login;
