//aca configuracion de bd ejemplo:
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ayudinadm:REolfqEvHV8D3toF@ayudinfiles.pjgqg.mongodb.net/?retryWrites=true&w=majority')
	.then(db => console.log('Db conectada'))
	.catch(err => console.log(err));
