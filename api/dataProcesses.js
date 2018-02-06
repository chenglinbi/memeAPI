const fs = require('fs');
const path = require('path');
/* 
id
first name
last name
email
gender
ip_address
*/
module.exports.getAll = () => {
    console.log('getall called');
    return new Promise(function(resolve, reject) {
        fs.readFile('./MOCK_DATA.json', 'utf8', (err, data) => {
        var obj = JSON.parse(data);            
            if (err) {
                console.log('failure to read content');                
                reject(err);
            } else {
                console.log('content read success');
                resolve(obj);
            }
        });
    });
};
module.exports.searchById = (id) => {
    var found = false;
    console.log('searchById called');
    outputBuffer = []; //should only be 1 user, but used list incase if duplicate user apepars
    return new Promise(function(resolve, reject) {
        fs.readFile('./MOCK_DATA.json', 'utf8', (err, data) => {
            var obj = JSON.parse(data);
            if (err) {
                console.log('failure to read content');                                
                reject(err);
            } else {
                console.log('content read success');                
                for (let i = 0; i < obj.length; i++) {
                    if (obj[i].id == id) {
                        found = true;
                        resolve(obj[i]);
                    }
                }
                if (!found) {resolve('not found!')};
            }
        });
    });
};