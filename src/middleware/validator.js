'use strict';

module.exports = (req, res, next) => {
    const queryName = req.query.name;
    req.name = queryName;

    if (queryName) {
        next();
    }
    else {
        next('There is no name in query!');
    }
}