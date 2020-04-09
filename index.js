const express = require('express');
const app = express();
const PORT = process.env.PORT || 6060;
require('./database');
const Items = require('./models/Items');
const Tickets = require('./models/Tickets');

// Middlewares
app.use(express.json()); // Habilitan el req.body
app.use(express.urlencoded({ extended: true }));

// Endpoints
app.get('/', (req, res) => res.json({ "message": '¡Bienvenido! 😎' }));

// Crear Item
app.post('/api/v1/items/', (req, res) => {
    const { body } = req;
    return Items.create(body)
        .then(newItem => res.status(201).json(newItem))
        .catch(err => {
            console.log('😞', err);
            res.status(400).json(err)
        })
});

// Leer todos
app.get('/api/v1/items/', (req, res) => {
    Items.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json(err));
});

// Leer un item
app.get('/api/v1/items/:id', (req, res) => {
    const { id } = req.params;
    Items.findById(id)
        .then(item => {
            if (!item) res.status(404).json('Item not found');
            res.json(item)
        })
        .catch(err => res.status(404).json(err));
});

// Actualizar item
app.patch('/api/v1/items/:id', (req, res) => {
    const { body } = req;
    const { id } = req.params;
    Items.findByIdAndUpdate(id, body, { new: true })
        .then(updateItem => res.json(updateItem))
        .catch(err => res.status(404).json(err));
});

// Eliminar item
app.delete('/api/v1/items/:id', (req, res) => {
  const { id } = req.params;
  Items.findByIdAndDelete(id)
    .then(() => res.status(204).json())
    .catch(err => res.status(404).json(err));
});

// Crear ticket
app.post('/api/v1/tickets/', async (req, res) => {
    const { body } = req;
    return Tickets.create(body)
        .then(newTicket => res.status(201).json(newTicket))
        .catch(err => {
            console.log('😞', err);
            res.status(400).json(err)
        })
});

// Encender el servidor
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));