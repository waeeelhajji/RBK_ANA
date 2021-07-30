const express = require("express");
const app = express();
const path = require("path");
const db = require("../../src/db/indexdb.js");
const Cat = require("../../src/db/Cat.js");

const port = 3214;

app.use(
  express.static(path.join(__dirname, "..", "client", "react-client", "dist"))
);
app.use(express.json());

app.get("/cats", (req, res) => {
  Cat.find({}, (err, result) => {
    if (err) {
      res.send(err.message);
    }
    res.send(result);
  });
});

app.post("/cats", (req, res) => {
  Cat.create(req.body, (err, result) => {
    if (err) {
      res.send(err.message);
    }
    res.send(result);
  });
});
// Cat.find((err, res) => {
//   if (err) throw err;
//   res.send(res);
// });

app.listen(port, () => {
  console.log(`cats are available on port ${port}`);
});
