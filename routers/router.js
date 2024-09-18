const express = require('express')
const router = express.Router()
const controlador = require('../controllers/controller.js')

router.get('/:nome', controlador.procuraCerveja)
router.get('/nacionalidade/:nacionalidade', controlador.procuraNacionalidade)
router.get('/ordenar/abv', controlador.maiorAbv )
router.get('/tipo/:tipo', controlador.buscarTipo )
router.get('/nome/:nome', controlador.procuraNomeParcial )

module.exports = router
