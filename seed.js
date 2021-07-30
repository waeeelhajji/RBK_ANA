/**
 *  This file should be a standalone script that seeds your database,
 *  making testing interactions with your database much easier.
 *
 *  You should be able to run this file from Terminal with:
 *
 *    node ./seed.js
 *
 *  And populate your database with all the data from `data.json`
 */

const data = require("./data.json");
const db = require("../db/indexdb.js");
const Cat = require("../db/Cat.js");

Cat.insertMany(data, function (err, result) {
  if (err) throw err;
  console.log("db seeded");
});

