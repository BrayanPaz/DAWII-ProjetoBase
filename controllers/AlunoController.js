import Aluno from '../models/aluno.js';

export default class AlunoController{
    constructor(caminhoBase='aluno/'){
        this.caminhoBase = caminhoBase
        this.openAdd = async (req,res)=>{
            res.render(this.caminhoBase+'add')
        }
        this.add = async(req, res)=>{
            //cria aluno
            await Aluno.create({
                nome: req.body.nome,
                matricula: req.body.matricula,
            })
            res.redirect('/'+this.caminhoBase+'add')
        }
        this.list = async (req, res) => {
            const resultado = await Aluno.find({})
            res.render(this.caminhoBase +'list',  {Alunos: resultado})
        }
    }
}
