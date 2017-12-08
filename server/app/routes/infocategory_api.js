// routes/note_routes.js
var InfoCategory = require('../../models/infocategory_model');
var ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {
    // ***** GET ***** //
    app.get('/InfoCategory/:id', (req, res) => {
        const id = req.params.id;
        const details = {
            '_id': new ObjectID(id)
        };
        db.collection('InfoCategory').findOne(details, (err, item) => {
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                if(item === null){
                    res.send(item);
                }
                else{
                    var i = new InfoCategory(item._id,item.description);
                    res.send(i);
                }
            }
        });
    });

    // ***** POST ***** //
    app.post('/InfoCategory', (req, res) => {
        const info = {
            description: req.body.description
        };
        db.collection('InfoCategory').insert(info, (err, result) => {
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                res.send(result.ops[0]);
            }
        });
    });
    
    // ***** DELETE ***** //
    app.delete('/InfoCategory/:id', (req, res) => {
        const id = req.params.id;
        const details = {
            '_id': new ObjectID(id)
        };
        db.collection('InfoCategory').remove(details, (err, item) => {
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                res.send('Info ' + id + ' deleted!');
            }
        });
    });

    app.put('/InfoCategory/:id', (req, res) => {
        const id = req.params.id;
        const info = { '_id': new ObjectID(id) };
        // Problème si on veut uniquement modifier un attribut
        if(req.body.description !== undefined){
            const description = { description: req.body.description};
            db.collection('InfoCategory').update(info, description, (err, result) => {
              if (err) {
                  res.send({'error':'An error has occurred'});
              } else {
                  var infoObj = new Info(req.params.id,req.body.description);
                  res.send(infoObj);
              } 
            });
        }else{
            res.send({'error':'An error has occurred'})
        }
      });
};