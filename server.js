const express = require("express"); //Line 1
const app = express(); //Line 2
var bodyParser = require("body-parser");
const port = process.env.PORT || 5000; //Line 3
var cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6e

// create a GET route
// app.get("/express_backend", (req, res) => {
//   //Line 9
//   res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" }); //Line 10
// });
const stripe = require("stripe")("sk_test_51LBCqSG99swRqIy6ExYJ9htJNINXREcI9j4Tq9n45E1FazYzG2IVjbBLETStg2UoQDUwOh4JAkr7CjE0GUoo5L7800xOc9DoGN");

app.post("/payment", cors(), async (req, res, next) => {
  const token = req.body.stripeToken.id;
  const amount = req.body.price;
console.log("Req is here==>", req.body);
  try {
    const charge = await stripe.charges.create({
      amount: amount*100,
      currency: "pkr",
      description: "Example charge",
      source: token,
    });
    res.send({ charge:{charge} });
  } catch (err) {
    res.json({ err:{err} });
  }
});
