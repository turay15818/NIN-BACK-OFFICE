const express =require ('express')
const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    updateTokenUser,
    deleteUser
} =require ("../controllers/UserController.js");

const { forgotPassword,resetPasswordToken} =require ("../controllers/UserResetPass.js")
// const { verifyUser,adminOnly } =require ('../middleware/AuthUser.js');

const router = express.Router()

router.post('/forgotPassword',  forgotPassword)
router.post('/reset-password/:token',  resetPasswordToken)

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.patch('/update/:id', updateTokenUser);
router.delete('/users/:id',  deleteUser);

module.exports= router;