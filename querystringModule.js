var querystring=require('querystring')
var q=querystring.parse('year= 2025 & month=march')
console.log(q.year)