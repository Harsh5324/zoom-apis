const express = require("express");
const cors = require("cors");

const login = require("./routes/post/login");
const verifyOTP = require("./routes/post/verifyOTP");
const uploadFile = require("./routes/post/uploadFile");
const addBike = require("./routes/post/addBike");
const bikes = require("./routes/get/bikes");
const adminLogin = require("./routes/post/adminLogin");
const updateAdmin = require("./routes/post/updateAdmin");
const bike = require("./routes/get/bike");
const bookBike = require("./routes/post/bookBike");
const { authenticate } = require("./functions/token");

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/uploads", express.static("./uploads"));

app.listen(80);

app.get("/", (_, resp) => resp.send("Hello from zoom server"));
app.get("/bikes", bikes);
app.get("/bike/:id", bike);

app.post("/login", login);
app.post("/verify-otp", verifyOTP);
app.post("/upload-file", uploadFile);
app.post("/add-bike", addBike);
app.post("/admin-login", adminLogin);
app.post("/admin-update", updateAdmin);
app.post("/book-bike", authenticate, bookBike);
