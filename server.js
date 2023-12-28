const fastify = require('fastify')({ logger: true})
const PORT = 3000

// you register routes in Fastify
fastify.register(require('./routes/items'))

// starting server asynchronously, while using try/catch for error handling
const start = async () => {
    try{
        await fastify.listen(PORT)
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start()