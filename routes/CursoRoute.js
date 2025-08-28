import express from 'express'
const router = express.Router()
import CursoController from '../controllers/CursoController.js'
const controller = new CursoController()

const caminhobase = 'curso/'

router.get(`/${caminhobase}add`, controller.openAdd)
router.post(`/${caminhobase}add`, controller.add)
router.get(`/${caminhobase}list`, controller.list)

export default router