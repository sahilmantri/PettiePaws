const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT;
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.post("/pay", async (req, res) => {
  console.log(req.body);
  const response = await stripe.checkout.sessions.create({
    billing_address_collection: "required",
    line_items: req.body.map(item => (
      {
          price_data: {
            currency: "inr",
            product_data: {
              name: item.title,
            },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        }
    )),
    mode: "payment",
    success_url: `http://localhost:3000/`,
    cancel_url: `http://localhost:3000/cart`,
  });

  res.send(response.url);
});

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
