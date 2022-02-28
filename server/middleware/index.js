// authentication
const withAuth = (req, res, next) => {
  if (!req.session.isAdmin) {
    res.redirect("/admin/");
  } else {
    next();
  }
};

module.exports = withAuth;
