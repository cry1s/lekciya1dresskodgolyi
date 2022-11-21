const message = require('../client/models/message');

function helloworld(req, res) {
    let msg = new message("Hello World", "Hello World");
    msg.title = "Hello w";
    res.json(msg);
}

function aboutpage(req, res) {
    res.json(new message('This is the about page', 'About'));
}

let boom = (req, res) => {
    res.send(new message('Boom!', 'Boom'));
}


module.exports = {
    helloworld,
    aboutpage,
    boom
};