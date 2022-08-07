const withAuth = (req, res, next) => {
    // redirecting users to the login route if they're not logged in. (I did this in HtmlRoute also- but you do not have to do that, you can simply cann 'withauth' if you need to redirect users to login page at any point)

    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;