const router = require("express").Router();
const { v1: uuidv1, v2: uuidv2 } = require("uuid");
const User = require("../../models/User");
const sendCoffee = require("../../utils/sendCoffee");
const sendEmail = require("../../utils/sendEmail");
const adminRoutes = require("./admin");
router.use("/admin", adminRoutes);

// // render preferences page
// router.get("/preferences", async (req, res) => {});

// create new user
router.post("/signup", async (req, res) => {
  try {
    const newUser = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      user_group: req.body.user_group,
      cadence: req.body.cadence,
      login_token: uuidv1(),
    });
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});

// send email to two users:
//  http://localhost:3001/api/match?first=1&second=2
//  will send an email to the two users in the url params
router.get("/match", async (req, res) => {
  const first = req.query.first;
  const second = req.query.second;

  if (!first || !second) {
    res.json({ msg: "two ids are required" });
    return;
  }
  const firstUser = (
    await User.findOne({
      where: {
        id: parseInt(first),
      },
    })
  ).get({ plain: true });
  const secondUser = (
    await User.findOne({
      where: {
        id: parseInt(second),
      },
    })
  ).get({ plain: true });

  //console.log(firstUser, secondUser);
  await sendCoffee(firstUser, secondUser);
  res.json({ msg: "Sent mails" });
});

module.exports = router;
