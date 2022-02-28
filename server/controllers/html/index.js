const router = require("express").Router();
const { v1: uuidv1, v2: uuidv2 } = require("uuid");
const User = require("../../models/User");
const sendEmail = require("../../utils/sendEmail");
const adminRoutes = require("./admin");
router.use("/admin", adminRoutes);

// render login page
router.get("/login", async (req, res) => {
  res.render("login");
});

// render signup page
router.get("/signup", async (req, res) => {
  res.render("signup");
});

// process magic-link requrest
router.get("/link", async (req, res) => {
  const userDbData = await User.findOne({
    where: {
      email: req.query.email,
    },
  });

  if (userDbData) {
    const userData = userDbData.get({ plain: true });
    userData.login_token = uuidv1();
    console.log(userData);
    await User.update(userData, { where: { id: userData.id } });
    const magicLink = `${req.protocol}://${req.headers.host}/preferences/${userData.id}?token=${userData.login_token}`;
    // User is valid

    console.log("Click the url: ", magicLink);
    sendEmail(userData.email, magicLink);
    // Refresh the token
    res.render("login");
    /*res.json({
      user: userData.get({ plain: true }),
      message: "You are now logged in!",
    });*/
  } else {
    res.send("Invalid email");
  }
});

// render preferences page
router.get("/preferences/:userId", async (req, res) => {
  console.log(
    "CHECK preferences for user: ",
    req.params.userId,
    " token is : ",
    req.query.token
  );

  const userDbData = await User.findOne({
    where: {
      id: req.params.userId,
    },
  });

  if (userDbData) {
    //User is valid
    if (userDbData.validateToken(req.query.token)) {
      const userData = userDbData.get({ plain: true });
      // you hit the valid magic link
      // res.send("You are in preferences");
      res.render("preferences");
    } else {
      // you hit the expired magic link or someone is hacking your account
      res.send(
        "You may have clicked the expired link, redirecting you to the page to request a new magic link"
      );
    }
    //res.render("home");
  } else {
    res.send("Invalid username or token");
  }
  return;
});

module.exports = router;
