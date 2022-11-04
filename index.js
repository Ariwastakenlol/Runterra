const reddit = require('reddit-image-fetcher')
const http = require('http')
const url = require('url')

let image;
const requestListener = function (req, res) {
    res.writeHead(200);
    
    let q = url.parse(req.url, true).query
    
    subs = [q.subreddit]
    
    reddit.fetch({ type: 'custom', total: 1, subreddit: subs}).then(result => {
    image = result[0].image
        });
    res.end('<!DOCTYPE html><html><body><style></style><img src="'+image+'"></body></html>');
}

const server = http.createServer(requestListener);
server.listen(8080);