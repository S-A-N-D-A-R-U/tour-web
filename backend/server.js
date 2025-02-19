require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const tourRoutes = require("./routes/tourRoutes");
const formRoutes = require("./routes/forms");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/tours", tourRoutes);
app.use("/api/forms", formRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
