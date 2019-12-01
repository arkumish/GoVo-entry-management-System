var VisitorDetail = require('./models/VisitorDetail.model');
var HostDetail = require('./models/HostDetail.model');
var mongoose = require('mongoose');


exports.CheckIn = function (req, res) {
    var obj = req.body;

    HostDetail.findOne({ 'Email': obj.hostemail })
        .then((hostinfo) => {
            if (hostinfo) {

                //console.log(hostinfo); 
                qid = hostinfo._id;
                qid = mongoose.Types.ObjectId(qid);

                var obj = {
                    Name: req.body.Name,
                    Phone: req.body.Phone,
                    Email: req.body.Email,
                    Address: req.body.Address,
                    HostId: qid,
                    CheckInTime: req.body.CheckInTime,
                    CheckOutTime: null,

                }

                var success = {
                    outcome: "CheckIn Successfull",
                    hostemail: hostinfo.Email,
                    hostphone: hostinfo.Phone,
                    done: 1,
                }
                const newObj = new VisitorDetail(obj);
                newObj.save()
                    .then((data) => {
                        res.json(success);
                    }).catch((err) => {
                        res.json(err);
                    });



            }
            else { console.log("No data exist for this id"); res.send("Host Details not found"); }
        }).catch((err) => { res.send("Some techncal error") });

}


exports.CheckOut = (req, res) => {

    var obj = req.body;
    VisitorDetail.findOne({ 'Email': obj.Email })
        .then((visitorinfo) => {
            if (visitorinfo) {
                VisitorDetail.findByIdAndUpdate(visitorinfo._id, { 'CheckOutTime': new Date() }, { new: true }, (err, todo) => {
                    if (err) return res.status(500).send(err);
                    var success = {
                        outcome: "Checkout Successfull",
                        vdetail: visitorinfo,
                        done: 1,
                    }
                    return res.send(success);
                })
            } else {
                res.send("User not found")
            }
        }).catch((err) => {
            res.send(" Some technical issue");
        });
}


exports.AddHost = (req, res) => {
    const newObj = new HostDetail(req.body);
    newObj.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(200).send("SUCCESS");
    });
}

exports.HostList = (req, res) => {

    HostDetail.find({}).then((hostdata) => {
        if (hostdata) { res.status(200).send(hostdata); }
        else { res.status(500).send('Error'); }
    }).catch((err) => {
        console.log("error")
    });



}







