const asyncHandler = require('express-async-handler');
// @desc Register a user
// @routes POST /api/users/register
// @access public

const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;
    if(!username)
    res.json({message : "Register the User"}); 
});

// @desc login a user
// @routes POST /api/users/login
// @access public

const loginUser = asyncHandler(async (req, res) => {
    res.json({"message" : "login the user"})
});

// @desc Register a userGet all contacts
// @routes POST /api/users/register
// @access private

const currentUser = asyncHandler(async (req, res) => {
    res.json({"message" : "Current user info"})
});


module.exports = {registerUser, loginUser, currentUser}