'use strict';

module.exports = (req, res, next) => {
    const queryName = req.query.name;
    let reg = /^[a-zA-Z]+$/;
    if (queryName) {
        if(reg.test(queryName)){
            req.name = queryName;
            next();
        }
        else{
            req.query.name = "wrong Name";
            next('The name should be a string');
        }
    }
    else {
        next('There is no name in query!');
    }
}