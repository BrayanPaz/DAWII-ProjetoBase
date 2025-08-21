import Express from 'express'
const router = express.Router()
import AlunoController from '../controllers/AlunoController.js'
const controller = new AlunoController()

const caminhobase = 'aluno/'

router.get(`/${caminhobase}add`, controller.openAdd)
router.post(`/${caminhobase}add`, controller.add)
router.get(`/${caminhobase}add`, controller.list)