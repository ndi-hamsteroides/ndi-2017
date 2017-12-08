// routes/user_api.ts
var ObjectID = require('mongodb').ObjectID;
var User = require('../../models/user_model');

module.exports = function (app, db) {
    // ***** GET ***** //
    app.get('/User/:id', (req, res) => {
        const id = req.params.id;
        const details = {
            '_id': new ObjectID(id)
        };
        db.collection('User').findOne(details, (err, item) => {
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                var u = new User(item._id,item.username);
                res.send(u);
            }
        });
    });

    // ***** POST ***** //
    app.post('/User', (req, res) => {              
        db.collection('User').findOne({username:req.body.username}, (err,item)=>{
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                console.log(item);
                if(item !== null){
                    res.send({
                        'error': 'An error has occurred'
                    }); 
                }
                else{
                    const user = {
                        username: req.body.username,
                    };
                    db.collection('User').insert(user, (err, result) => {
                        if (err) {
                            res.send({
                                'error': 'An error has occurred'
                            });
                        } else {
                            res.send(result.ops[0]);
                        }
                    });
                }
            }
        })      
    });

    // ***** DELETE ***** //
    app.delete('/User/:id', (req, res) => {
        const id = req.params.id;
        const details = {
            '_id': new ObjectID(id)
        };
        db.collection('User').remove(details, (err, item) => {
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                res.send('User ' + id + ' deleted!');
            }
        });
    });

    app.put('/User/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        // Problème si on veut uniquement modifier un attribut
        if(req.body.username !== undefined){
            const user = { username: req.body.username};
            db.collection('User').update(details, user, (err, result) => {
              if (err) {
                  res.send({'error':'An error has occurred'});
              } else {
                  res.send(user);
              } 
            });
        }else{
            res.send({'error':'An error has occurred'})
        }
      });
};