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
                    var i = new InfoCategory(item._id,item.id_info,item.id_category);
                    res.send(i);
                }
            }
        });
    });


    

    // ***** POST ***** //
    app.post('/InfoCategory', (req, res) => {
        const infoCategory = {
            id_info: req.body.id_info,
            id_category: req.body.id_category
        };
        db.collection('InfoCategory').findOne({id_info:req.body.id_info,id_category:req.body.id_category}, (err, item) => {
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                if(item === null){
                    db.collection('InfoCategory').insert(infoCategory, (err, result) => {
                        if (err) {
                            res.send({
                                'error': 'An error has occurred'
                            });
                        } else {
                            res.send(result.ops[0]);
                        }
                    });
                }
                else{
                    res.send({
                        'error': 'The couple info-category already exists'
                    });      
                }
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
                res.send('InfoCategory ' + id + ' deleted!');
            }
        });
    });

    app.put('/InfoCategory/:id', (req, res) => {
        const id = req.params.id;
        const info = { '_id': new ObjectID(id) };
        // Problème si on veut uniquement modifier un attribut
        if(req.body.id_info !== undefined && req.body.id_category !== undefined){           
            const infoCategory = { id_info: req.body.id_info, id_category: req.body.id_category};
            db.collection('InfoCategory').update(info, infoCategory, (err, result) => {
              if (err) {
                  res.send({'error':'An error has occurred'});
              } else {
                  var infoCatObj = new InfoCategory(req.params.id,req.body.id_info,req.body.id_category);
                  res.send(infoCatObj);
              } 
            });
        }else{
            res.send({'error':'An error has occurred'})
        }
      });
};