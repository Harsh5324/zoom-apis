const db = require("./db");

const deleteData = (_id, table) =>
  new Promise(async (resolve, reject) => {
    try {
      await db.promise().query(`delete from ${table} where _id = ${_id}`);
      resolve({ status: "SUCCESS" });
    } catch (err) {
      reject(err);
    }
  });

module.exports = deleteData;
