const mongoose = require('mongoose');


const habilidadesSchema = new mongoose.Schema({
    linguagem: String,
    Framework: String,
    anosdeexperiencia: Number,
});

module.exports = mongoose.model('Habilidades', habilidadesSchema)