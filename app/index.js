import Hapi from 'hapi'

// Create a server with a host and port
const server = Hapi.server({
  port: process.env.PORT || '8000'
})

/**
 * @api {get} /sample get protocol docs
 * @apiName GetDetails
 * @apiSuccess (Success_200) {Object} requestHeaders the request headers sent
 * @apiSuccess (Success_200) {String} data test text
 * @apiSuccess (Session) {String} kbsampleprovidej-account-id testing the dependency headers
 */
server.route({
  method: 'GET',
  path: '/sample',
  handler: async function(request, h) {
    return h.response({
      data: 'test data',
      requestHeaders: request.headers
    }).header('kbsampleprovidej-account-id', 'freakinyes')
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
