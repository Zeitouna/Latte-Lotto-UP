// /admin/generate
/*
        - Verify the current user is the admin user
        - Use the utility function and retrieve the pair (this function is async so we await)
        - Once we get the pairs, store them in a session so that they are available to us. e.g., req.session.pairs= await getPairs();
        - Save the session and then send the response.
        -  req.session.save(()=> {
            res.status(200).json(req.session.pairs);
        })
    */
//  /admin/sendinvites
/*
        - Check the user is an admin user
        - Check req.session.pairs is populated else give error
        - Use the utility function to send emails
*/

const Admin = require("../../models/Admin");
const router = require("express").Router();
const matchUsers = require("../../utils/matchUsers");
const withAuth = require("../../middleware");

// /admin/login (post request)
router.post("/login", async (req, res) => {
  console.log(req.body);
  const dbUserData = await Admin.findOne({
    where: {
      username: req.body.username,
    },
  });
  if (!dbUserData) {
    res.status(403).json({ message: "No account found!" });
    return;
  }

  const passwordIsValid = dbUserData.checkPassword(req.body.password);
  if (passwordIsValid) {
    req.session.user_id = dbUserData.id;
    req.session.username = dbUserData.username;
    req.session.loggedIn = true;
    req.session.isAdmin = true;
    req.session.save(() => {
      res.json({ user: dbUserData, message: "You are now logged in!" });
      return;
    });
  } else {
    return res.status(403).json("Invalid password");
  }
});

module.exports = router;
