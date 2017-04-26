"use strict";

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

app.get('/:time', (req, res) => {
    let time = req.params.time;
    let tmp = time * 1;
    let tmp1, tmp2;
    
    let result = {
        "unix": null,
        "natural": null,
    };

    if (isNaN(tmp)) {
        tmp = new Date(time); // Dec
        // console.log(tmp);
    } else {
        tmp = new Date(tmp); // 14xxxxxxxxxxx
    }
    
    // console.log(result.natural);
    
    if (tmp.toDateString() === 'Invalid Date') {
        result.unix = null;
        result.natural = null;
        res.json(result);
    } else {
        // console.log(tmp);
        result.unix = tmp.getTime();
        result.natural = tmp.toDateString();
        res.json(result);
    }
    

});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
})