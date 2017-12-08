// routes/user_api.ts
var ObjectID = require('mongodb').ObjectID;
var Category = require('../../models/category_model');

module.exports = function (app, db) {
    // ***** GET ***** //
    app.get('/Category/:id', (req, res) => {
        const id = req.params.id;
        const details = {
            '_id': new ObjectID(id)
        };
        db.collection('Category').findOne(details, (err, item) => {
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                var u = new Category(item._id,item.label);
                res.send(u);
            }
        });
    });

    // ***** POST ***** //
    app.post('/Category', (req, res) => {
        const category = {
            label: req.body.label
        };
        db.collection('Category').insert(category, (err, result) => {
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
    app.delete('/Category/:id', (req, res) => {
        const id = req.params.id;
        const details = {
            '_id': new ObjectID(id)
        };
        db.collection('Category').remove(details, (err, item) => {
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                res.send('Category ' + id + ' deleted!');
            }
        });
    });

    // ***** PUT ***** //
    app.put('/Category/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        // Problème si on veut uniquement modifier un attribut
        if(req.body.label !== undefined){
            const category = { label: req.body.label};
            db.collection('Category').update(details, category, (err, result) => {
              if (err) {
                  res.send({'error':'An error has occurred'});
              } else {
                  res.send(category);
              } 
            });
        }else{
            res.send({'error':'An error has occurred'})
        }
      });
};