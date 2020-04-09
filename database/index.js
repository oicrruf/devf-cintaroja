const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://oicrruf:GWGetEw2NcVR44gx@cluster0-4efbl.mongodb.net/supermercado?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Database connected'))
  .catch(() => console.log('Error connecting to database...'));