const JokeController = require('../controllers/joke.controller');


module.exports = (app) => {
    app.get('/api/jokes', JokeController.index);
    app.post('/api/jokes/create', JokeController.create);
    app.get('/api/jokes/:id', JokeController.show);
    app.put('/api/jokes/update/:id', JokeController.update);
    app.delete('/api/jokes/delete/:id', JokeController.destroy);
}