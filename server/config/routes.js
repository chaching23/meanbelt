const pets = require('../controllers/controllers');
const path = require('path');

module.exports = (app) => {
    app.put("/api/pets/:id/like", pets.addLike)
    app.get("/api/pets",pets.getAll)
    app.get("/api/pets/:id", pets.getOne)
    app.post("/api/pets", pets.create)
    app.post("/api/pets/:id", pets.update)
    app.delete("/api/pets/:id", pets.delete)
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve('./sample-app/dist/sample-app/index.html'))
    })
};



