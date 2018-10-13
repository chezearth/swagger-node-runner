'use strict';

var util = require('util');

module.exports = {
  hello: hello,
  hello_body: hello_body,
  hello_file: hello_file,
  get: hello,
  multiple_writes: multiple_writes,
  hello_text_body: hello_text_body
};

function hello(req, res) {
  var name = req.swagger.params.name.value || 'stranger';
  // console.log('Req Params =', req.swagger.params.valid);
  // console.log('\n\nReq =', req);
  if(req.method === 'PUT' && req.url === '/expect_integer') {
    console.log('\n\nReq swagger params name =', req.swagger.params.name.error)//.parameterObject);
    console.log('\n\nReq query', req.query);
    console.log('\n\nReq url', req.url);
    console.log('\n\nReq body', req.body);
    console.log('\n\nReq params', req.params);
    console.log('\n\nReq method', req.method);
    console.log('\n\nReq Headers =', req.headers);
  }
  var hello = util.format('Hello, %s!', name);
  res.json(hello);
}

function hello_body(req, res) {
  var name = req.swagger.params.nameRequest.value.name || 'stranger';
  var hello = util.format('Hello, %s!', name);
  res.json(hello);
}

function hello_file(req, res) {
  var name = req.swagger.params.name.value || 'stranger';
  var file = req.swagger.params.example_file.value;
  var hello = util.format('Hello, %s! Thanks for the %d byte file!', name, file.size);
  res.json(hello);
}

function multiple_writes(req, res) {
  res.write('hello');
  res.write('world');
  res.end('yo');
}

function hello_text_body(req, res) {
  var name = req.swagger.params.name.value || 'stranger';
  // console.log('Req Params =', req.swagger.params.operation);
  // console.log('Req Headers =', req.headers);
  var hello = util.format('Hello, %s!', name);
  res.json(hello);
}
