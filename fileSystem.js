var fs = require('fs');
var http = require('http');

const fetch = require('node-fetch');


fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.text())
    .then(text => 
        fs.writeFile('result/posts.txt', text, (err) => {
            if (err) throw err;
            console.log('File created successfully.');
        })
    );
        
