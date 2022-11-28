const https = require('https');

function getJSON(url, callback) {
    const request = https.get(url);
    
    request.on('response', response => {
        let httpStatus = response.statusCode;
        response.setEncoding('utf-8');
        let body = "";

        response.on('data', (chunk) => { body += chunk});

        response.on('end', () => {
            if (httpStatus === 200) {
                callback(null, body);
            } else {
                callback(httpStatus, null);
            }
        });

        response.on('error', () => {
            callback(err, null);
        });
    })
}

function callback(httpStatus, body) {
    if (httpStatus !== null) {
        console.log('Error with ' + httpStatus);
    } else {
        console.log(JSON.parse(body));
    }
}

getJSON('https://api.publicapis.org/random', callback);