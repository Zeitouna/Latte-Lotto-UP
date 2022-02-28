// User Routes
const router = require("express").Router();
const { User } = require("../../models/Admin");
const withAuth = require("../../middleware");
const matchUsers = require("../../utils/matchUsers");
const sendCoffee = require("../../utils/sendCoffee");

// render admin login page
router.get("/", (req, res) => {
  res.render("admin-login");
});

// add handler for /admin/dashboard (after login)
router.get("/dashboard", withAuth, (req, res) => {
  res.render("admin-dashboard");
});

// generate the matches and store them in the session
//match users
router.get("/generate", withAuth, async (req, res) => {
  console.log("Generating matches");
  const matches = await matchUsers();
  req.session.pairs = matches;
  req.session.save(() => {
    res.status(200).render("admin-dashboard", { matches });
  });
});

router.get("/sendemails", withAuth, async (req, res) => {
  const matches = req.session.pairs;
  if (req.session.pairs) {
    req.session.pairs.map((match) => {
      // send email for each forat
      const firstUser = match.match1;
      const secondUser = match.match2;
      console.log("Now sending email to ", firstUser, "and", secondUser);
      // call util function
      sendCoffee(firstUser, secondUser);
    });
    res.status(200).render("admin-dashboard", { matches, emailsSent: true });
  } else {
    // matches are not yet generated
    res.send("fail");
  }
});
//update the admin data view

module.exports = router;
