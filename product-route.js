async function anotherroutes (fastify, options) {

    // fastify.get('/mike', async (request, reply) => {
    //   return { hello: 'Hello Mike!' }
    // })

    fastify.get('/product', async (request, reply) => {
      console.log('GET /')
      // console.log(reply.res) // this is the http.ServerResponse with correct typings!
      return reply.code(200).send({ hello: 'Hello Product!' })
    })

    fastify.post('/product', async (request, reply) => {
      console.log('POST /')
      // console.log(reply.res) // this is the http.ServerResponse with correct typings!
      return reply.code(200).send({ hello: 'Hello Product!' })
    })

    fastify.get('/product/:id', async (request, reply) => {
      console.log('GET /id')
      // console.log(reply.res) // this is the http.ServerResponse with correct typings!
      return reply.code(200).send({ hello: 'Hello Product!' })
    })

    fastify.post('/product/:id', async (request, reply) => {
      console.log('POST /id')
      // console.log(reply.res) // this is the http.ServerResponse with correct typings!
      return reply.code(200).send({ hello: 'Hello Product!' })
    })

    fastify.delete('/product/:id', async (request, reply) => {
      console.delete('DELETE /id')
      // console.log(reply.res) // this is the http.ServerResponse with correct typings!
      return reply.code(200).send({ hello: 'Hello Product!' })
    })

  }
  
  module.exports = anotherroutes