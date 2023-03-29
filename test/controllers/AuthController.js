const User =require ("../models/UserModel.js");
const bcrypt =require ('bcrypt')

const Login = async (req, res) => {
    const user = await User.findOne({
        where: {
            userEmail: req.body.userEmail,
        }
    });
    if (!user) return res.status(404).json({ msg: "User not found" });
    const compareUserPassword = await bcrypt.compare(req.body.userPassword, user.userPassword)
    if (!compareUserPassword) return res.status(400).json({ msg: "Wrong Password" });
    req.session.userId = user.id;
    const id = user.id;
    const userIDD = user.userIDD;
    const userName = user.userName;
    const userEmail = user.userEmail;
    const role = user.role;
    const userPhone = user.userPhone;
    res.status(200).json({ id, userIDD, userName, userEmail, userPhone, role });
}

const Me = async (req, res) => {
    if (!req.session.userId) {
        return res.status(401).json({ msg: "User Not Found" });
    }
    const user = await User.findOne({
        attributes: ['userIDD','userName', 'userEmail', 'role', 'userPhone', 'id'],
        where: {
            id: req.session.userId
        }
    });
    if (!user) return res.status(404).json({ msg: "User not found" });
    res.status(200).json(user);
}

const logOut = (req, res) => {
    req.session.destroy((err) => {
        if (err) return res.status(400).json({ msg: "Can't log out" });
        res.status(200).json({ msg: "You have logged out" });
    });
}

module.exports={
    Login,
    Me,
    logOut
}