// routes/note_routes.js
var ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {
    // ***** GET ***** //
    app.get('/notes/:id', (req, res) => {
        console.log(req);
        const id = req.params.id;
        const details = {
            '_id': new ObjectID(id)
        };
        db.collection('notes').findOne(details, (err, item) => {
            if (err) {
                console.log(err);
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                
                res.header("Access-Control-Allow-Origin", "*");
                res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                console.log("izoezouyb");
                res.send(item);
            }
        });
    });

    // ***** POST ***** //
    app.post('/notes', (req, res) => {
        const note = {
            text: req.body.body,
            title: req.body.title
        };
        db.collection('notes').insert(note, (err, result) => {
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
    app.delete('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = {
            '_id': new ObjectID(id)
        };
        db.collection('notes').remove(details, (err, item) => {
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                res.send('Note ' + id + ' deleted!');
            }
        });
    });

    app.put('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        // Problème si on veut uniquement modifier un attribut
        if(req.body.body !== undefined && req.body.title !== undefined){
            const note = { text: req.body.body, title: req.body.title };
            db.collection('notes').update(details, note, (err, result) => {
              if (err) {
                  res.send({'error':'An error has occurred'});
              } else {
                  res.send(note);
              } 
            });
        }else{
            res.send({'error':'An error has occurred'})
        }
      });
};