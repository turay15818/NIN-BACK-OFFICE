const  express  =require ("express");
const {
     getNin,
     ninCreate,
     getNinById,
     updateNin, 
     getDataByRejected,
     getDataByConfirmed,
     ninSearch,
     ninSearchh
     } =require ("../controllers/NinController.js");

const { verifyUser,userOnly,adminOnly } =require ("../middleware/AuthUser.js");

const router = express.Router()

router.get('/nin',verifyUser, getNin)
router.post('/ninSearch', ninSearch)
router.post('/ninSearchh',ninSearchh)
router.get('/dataByConfirmed',getDataByConfirmed)
router.get('/dataByRejected',  getDataByRejected)
router.post('/nin',  ninCreate)
router.get('/nin/:id',  getNinById)
router.patch('/nin/:id', updateNin)


module.exports= router