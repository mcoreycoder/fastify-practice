async function mikeroutes (fastify, options) {

    // fastify.get('/mike', async (request, reply) => {
    //   return { hello: 'Hello Mike!' }
    // })

    fastify.get('/customer', async (request, reply) => {
      console.log('GET /')
      // console.log(reply.res) // this is the http.ServerResponse with correct typings!
      return reply.code(200).send({ hello: 'Hello Customer!' })
    })

    fastify.post('/customer', async (request, reply) => {
      console.log('POST /')
      // console.log(reply.res) // this is the http.ServerResponse with correct typings!
      return reply.code(200).send({ hello: 'Hello Customer!' })
    })

    fastify.get('/customer/:id', async (request, reply) => {
      console.log('GET /id')
      // console.log(reply.res) // this is the http.ServerResponse with correct typings!
      return reply.code(200).send({ hello: 'Hello Customer!' })
    })

    fastify.post('/customer/:id', async (request, reply) => {
      console.log('POST /id')
      // console.log(reply.res) // this is the http.ServerResponse with correct typings!
      return reply.code(200).send({ hello: 'Hello Customer!' })
    })

    fastify.delete('/customer/:id', async (request, reply) => {
      console.delete('DELETE /id')
      // console.log(reply.res) // this is the http.ServerResponse with correct typings!
      return reply.code(200).send({ hello: 'Hello Customer!' })
    })

  }
  
  module.exports = mikeroutes