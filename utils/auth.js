// Function to redirect the user to the login page if they are not logged in or execute the route function if they are
const withAuth = (req, res, next) => {

  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
