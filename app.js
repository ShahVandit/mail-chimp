const express = require("express");
const request = require("request");

// const user=require('./routes/users');
const app = express();

app.post("/signup", (req, res) => {
  var options = {
    method: "POST",
    url: "https://us5.api.mailchimp.com/3.0/lists/fd008107c4/members",
    headers: {
      Authorization:
        "Basic cmFuZG9tOjFmNmQzMmRkMDc4YzZhZTZmODM3NGZmYjJmNjg0NWYwLXVzNQ==",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email_address: req.body.email,
      status: req.body.status,
      FNAME: req.body.fname,
      LNAME: req.body.lname,
    }),
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on ${PORT}`));
