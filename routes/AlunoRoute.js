import express from 'express'
const router = express.Router()
import AlunoController from '../controllers/AlunoController.js'
const controller = new AlunoController()

const caminhobase = 'aluno/'

router.get(`/${caminhobase}add`, controller.openAdd)
router.post(`/${caminhobase}add`, controller.add)
router.get(`/${caminhobase}list`, controller.list)
router.get(`/${caminhobase}edit/:id`, controller.openEdit)
router.post(`/${caminhobase}edit/:id`, controller.edit)

export default router