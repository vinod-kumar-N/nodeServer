var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let t dataArray =[
    {name: 'John', age: 12},
    {name: 'Lisa', age: 15},
    {name: 'Nil', age: 50}
  ];
  res.json({
    data: dataArray
  })
});

module.exports = router;
