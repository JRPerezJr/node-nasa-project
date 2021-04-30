const http = require('http');
const mongoose = require('mongoose');

const app = require('./app');

const { loadPlanetsData } = require('./models/planets.model');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const PORT = process.env.PORT || 8000;

const MONGO_URL = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@nasa-api.felix.mongodb.net/nasa?retryWrites=true&w=majority`;

console.log(MONGO_URL);
const server = http.createServer(app);

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', err => {
  console.error(err);
});

async function startServer() {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`🦄 Flying high on port ${PORT}`);
  });
}

startServer();
