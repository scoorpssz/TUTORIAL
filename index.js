const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req,res) => {
    res.send('Servidor Funcionado');
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://TDW_DATABASE:123@tdw.0p8nu.mongodb.net/?retryWrites=true&w=majority&appName=TDW', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   });

   mongoose.connection.on('connected', () => {
    console.log('Concectado ao MongoDB');
   });

   mongoose.connection.on('error', (err) => {
    console.error('Erro na conexão ao MongoDB:', err);
   });
   
const logger = require('./Middlewares/loggers');

   app.use(logger);  
   
const auth = require('./Middlewares/auth');
app.use('/pratos', auth);
app.use('/restaurantes', auth);

const pratosRoutes = require('./Controllers/pratos');
app.use('/pratos', pratosRoutes)

const restaurantesRoutes = require('./Controllers/restaurantes');
app.use('/restaurante', restaurantesRoutes)

const userRoutes = require('./Controllers/user');
app.use('/user', userRoutes)