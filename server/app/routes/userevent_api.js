var ObjectID = require('mongodb').ObjectID;
var UserEvent = require('../../models/userevent_model');

module.exports = function (app, db) {
    // ***** GET ***** //
    app.get('/UserEvent/ByEvent/:id_event', (req, res) => {
        var u = db.collection('UserEvent').find({id_event: req.params.id_event}).toArray(function(err, result) {
            if (err) {
                res.send({
                    'error': 'An error has ocurred'
                });
            } else {
                var list = []
                for (i = 0; i < result.length; i++) {
                    list.push(new UserEvent(result[i]._id, result[i].id_user, result[i].id_event));
                }
                res.send(list);
            }
        })
    });

    // ***** GET ***** //
    app.get('/UserEvent/ByUser/:id_user', (req, res) => {
        var u = db.collection('UserEvent').find({id_user: req.params.id_user}).toArray(function(err, result) {
            if (err) {
                res.send({
                    'error': 'An error has ocurred'
                });
            } else {
                var list = []
                for (i = 0; i < result.length; i++) {
                    list.push(new UserEvent(result[i]._id, result[i].id_user, result[i].id_event));
                }
                res.send(list);
            }
        })
    });

    // ***** POST ***** //
    app.post('/UserEvent', (req, res) => {              
        db.collection('UserEvent').findOne({id_user:req.body.id_user}, (err,item)=>{
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                console.log(item);
                if(item !== null){
                    res.send({
                        'error': 'This username already exists'
                    }); 
                }
                else{
                    const ids = {
                        id_user: req.body.id_user,
                        id_event: req.body.id_event
                    };
                    db.collection('UserEvent').insert(ids, (err, result) => {
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
    app.delete('/UserEvent/:id', (req, res) => {
        const id = req.params.id;
        const details = {
            '_id': new ObjectID(id)
        };
        db.collection('UserEvent').remove(details, (err, item) => {
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                res.send('User ' + id + ' deleted!');
            }
        });
    });
};