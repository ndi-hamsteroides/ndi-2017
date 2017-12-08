var ObjectID = require('mongodb').ObjectID;
var Event = require('../../models/event_model');

module.exports = function (app, db) {
	// ***** GET ***** //
	app.get('/Event/:id_master', (req, res) => {
        console.log('hhhhhh');
		db.collection('Event').findOne({id_master:req.params.id_master}, (err, item) => {
			if (err) {
				res.send({
					'error': 'An error has occurred'
				});
			} else {
                if(item === null){
                    res.send(item);
                }
                else{
                    var e = new Event(item.id, item.id_master, item.sam)
                    res.send(e);
                }
			}
		});
	});

	// ***** POST ***** //
    app.post('/Event', (req, res) => {              
        db.collection('Event').findOne({id_master:req.body.id_master}, (err,item)=>{
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                if(item !== null){
                    res.send({
                        'error': 'An error has occurred'
                    });
                }
                else{
                    const event = {
                        id_master: req.body.id_master,
                        sam: req.body.sam
                    };
                    db.collection('Event').insert(event, (err, result) => {
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
    app.delete('/Event/:id_master', (req, res) => {
        const id_master = req.params.id_master;
        const details = {
            '_id': new ObjectID(id)
        };
        db.collection('Event').remove(details, (err, item) => {
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                res.send('Event by user number ' + id + ' deleted!');
            }
        });
    });

    app.put('/Event/:id_master', (req, res) => {
        const id_master = req.params.id_master;
        const details = { '_id': new ObjectID(id) };
        // Problème si on veut uniquement modifier un attribut
        if(req.body.id_master !== undefined){
            const sam = { event: req.body.sam};
            db.collection('Event').update(details, id_master, sam, (err, result) => {
              if (err) {
                  res.send({'error':'An error has occurred'});
              } else {
                  res.send(sam);
              } 
            });
        } else {
            res.send({'error':'An error has occurred'})
        }
    });
}