const express = require("express");
const app = express();
const { PORT = 8080 } = process.env;
const mysql = require("mysql");
const data = require("./data/addresses");
const bodyParser = require("body-parser");
const cors = require("cors");

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));

app.use(cors());

// Middleware for parsing body data
app.use(bodyParser.json());

// Configure connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Addressbook"
  // host: "us-cdbr-iron-east-05.cleardb.net",
  // user: "bf90b3abc31e38",
  // password: "f763d6ac",
  // database: "heroku_51a56a17b470ea0"
});

// Connect
db.connect(err => {
  if (err) {
    throw err;
  } else {
    console.log("Connected...");
  }
});

// Create table
app.get("/api/create_table", (req, res) => {
  let sql =
    "CREATE TABLE addresses (id INT AUTO_INCREMENT PRIMARY KEY, forename VARCHAR(255), surname VARCHAR(255), address VARCHAR(255), postcode VARCHAR(255), telephone VARCHAR(255), email VARCHAR(255), date_of_birth VARCHAR(255))";
  db.query(sql, (err, rows) => {
    if (err) {
      throw err;
    } else {
      res.send("table created");
    }
  });
});

// Populate table with initial data
app.get("/api/add_data", (req, res) => {
  let sql = "INSERT INTO addresses SET ?";
  for (i = 0; i < data.length; i++) {
    db.query(sql, data[i], (err, rows) => {
      if (err) {
        throw err;
      } else {
        res.send(rows);
      }
    });
  }
});

// Get all rows from the table
app.get("/api/addresses", (req, res) => {
  let sql = "SELECT * FROM addresses";
  db.query(sql, (err, rows) => {
    if (err) {
      throw err;
    } else {
      res.send(rows);
    }
  });
});

// Get specific row from the table
app.get("/api/address/:id", (req, res) => {
  let sql = `SELECT * FROM addresses WHERE id = ${req.params.id}`;
  db.query(sql, (err, rows) => {
    if (err) {
      throw err;
    } else if (rows.length !== 0) {
      res.send(rows);
    } else {
      res.status(400).send({ msg: "Address not found" });
    }
  });
});

// Post new row
app.post("/api/addresses", (req, res) => {
  let sql = "INSERT INTO addresses SET ?";
  let newRow = {
    forename: req.body.forename,
    surname: req.body.surname,
    address: req.body.address,
    postcode: req.body.postcode,
    telephone: req.body.telephone,
    email: req.body.email,
    date_of_birth: req.body.date_of_birth
  };
  db.query(sql, newRow, (err, rows) => {
    if (err) {
      throw err;
    } else {
      res.send("added address");
    }
  });
});

// Update row
app.patch("/api/address/:id", (req, res) => {
  db.query(
    `SELECT * FROM addresses WHERE id = ${req.params.id}`,
    (err, rows) => {
      if (err) {
        throw err;
      } else {
        let {
          forename,
          surname,
          address,
          postcode,
          telephone,
          email,
          date_of_birth
        } = req.body;
        let updatedRow = {
          forename: forename ? forename : rows[0].forename,
          surname: surname ? surname : rows[0].surname,
          address: address ? address : rows[0].address,
          postcode: postcode ? postcode : rows[0].post,
          telephone: telephone ? telephone : rows[0].telephone,
          email: email ? email : rows[0].email,
          date_of_birth: date_of_birth ? date_of_birth : rows[0].date_of_birth
        };
        let sql = `UPDATE addresses SET ? WHERE id = ${req.params.id}`;
        db.query(sql, updatedRow, (err, rows) => {
          if (err) {
            throw err;
          } else {
            res.send(rows);
          }
        });
      }
    }
  );
});

// Delete row
app.delete("/api/address/:id", (req, res) => {
  let sql = `DELETE FROM addresses WHERE id = ${req.params.id}`;
  db.query(sql, (err, rows) => {
    if (err) {
      throw err;
    } else {
      res.send("deleted address");
    }
  });
});
