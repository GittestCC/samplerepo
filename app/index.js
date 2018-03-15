import Hapi from 'hapi'

// Create a server with a host and port
const server = Hapi.server({
  host: 'localhost',
  port: process.env.PORT || '8000'
})

/**
 * @api {get} / get protocol docs
 * @apiName GetSample
 * @apiHeader (Config) {String} configtest config test
 * @apiSuccess (Success_200) {Object} requestHeaders the request headers sent
 * @apiSuccess (Success_200) {String} data test text
 * @apiSuccess (Session) {String} kbsampleprovide-account-id testing the dependency headers
 */
server.route({
  method: 'GET',
  path: '/',
  handler: async function(request, h) {
    return h.response({
      data: 'test data',
      requestHeaders: request.headers
    }).header('kbsampleprovide-account-id', 'freakinyes')
  }
})

// Start the server
async function start() {
  try {
    await server.start()
  } catch (err) {
    console.error('app crashed', err)
    process.exit(1)
  }
  console.log('Server running at:', server.info.uri)
}

start()
