const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

const http = require('http')

server = http.createServer((req, res) => {
    console.log(req.method)
    console.log(req.url)

    let reqBody = ''
    let reqObj = {}
    req.on('data', (data) => {
        reqBody += data
    })
    req.on('end', () => {
        reqObj = parseBody(reqBody)
        req.body = reqObj
        sendFormPage(req, res)
    })
})

server.listen(5000, () => console.log("Successfully started the server on port 5000"))

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
