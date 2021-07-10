const router = require('express').Router();
let User = require(`../models/user.model`);

router.route('/').get((req, res) => {
    // when we're locally accessing via 5000/ get request
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: '+ err)); 
});

router.route('/add').post((req,res ) => {
    //when we are locally adding via 5000/add/ post request
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: '+ err)); 
});

module.exports = router;