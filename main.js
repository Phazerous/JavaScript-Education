const http = require('http');

function getJSON(url) {
    return new Promise((resolve, reject) => {
        let request = http.get(url, response => {
            if (response.statusCode !== 200) {
                reject(new Error('Bad status code.'))
            } else if (!response.headers["content-type"].includes("application/json")) {
                console.log(response.headers["content-type"]);
                reject(new Error('Wrong content type!'))
            } else {
                let body = "";
                response.setEncoding('UTF-8');
    
                response.on('data', (chunk) => {body += chunk});
    
                response.on('end', () => {
                    try {
                        let parse = JSON.parse(body);

                        resolve(parse)
                    } catch (e) {
                        reject(e);
                    }
                });
            }

            request.on('error', error => {
                reject(error);
            })
        });
    });
}

getJSON('http://apiv3.iucnredlist.org/api/v3/version')
    .then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err.message);
    })