const express =require ('express')
const { Login, logOut, Me } =require ('../controllers/AuthController.js')

const router = express.Router()

router.post('/login', Login)
router.get('/me', Me)
router.delete('/logout',logOut)

module.exports= router;