import express from "express";
import mongoose from "mongoose";
import { shortUrl, getOriginalUrl } from "./Controllers/url.js";

const app = express();

app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://niharrughani30_db_user:database1@cluster0.immgjwi.mongodb.net/",
    { dbname: "Nodejs_course_mastery" }
  )
  .then(() => console.log("MongoDb Connected..!"))
  .catch((err) => console.log(err));

// rendering the ejs file
app.get("/", (req, res) => {
  res.render("index.ejs", { shortUrl: null });
  console.log(req);
});

// shorting url logic
app.post("/short", shortUrl);

// redirect to original url using short code :- dynamic routing
app.get("/:shortCode", getOriginalUrl);

const port = 1000;
app.listen(port, () =>
  console.log(`server is running on port http://localhost:${port}`)
);
