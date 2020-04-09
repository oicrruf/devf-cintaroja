const express = require('express');
const app = express();
const PORT = process.env.PORT || 6060;
require('./database');
const Items = require('./models/Items');

// Middlewares
app.use(express.json()); // Habilitan el req.body
app.use(express.urlencoded({ extended: true }));

// Endpoints
app.get('/', (req, res) => res.json({ "message": '¡Bienvenido! 😎' }));

// Crear Item
app.post('/api/v1/items/', (req, res) => {
    const { body } = req;
    return Items.create(body)
        .then(newMovie => res.status(201).json(newMovie))
        .catch(err => {
            console.log('😞', err);
            res.status(400).json(err)
        })
});

// Encender el servidor
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));