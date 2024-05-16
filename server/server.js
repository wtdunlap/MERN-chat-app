import express from "express";
import dotenv from "doenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello Whirled")
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

