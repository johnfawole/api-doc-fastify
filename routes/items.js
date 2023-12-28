const items = require('../Items')

const {getItems, getItem, addItem} = require('../controller/items')

const Item = {
    type: 'object',
    properties: {
        id: {type: 'string'},
        name: {type: 'string'}
    }
}

// this fetches all the items
const getItemsOptions = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: Item,
                }
            }
        },       
        handler: getItems,
}

// this fetches only a specified item
const getItemOptions = {
    schema: {
        response: {
            200: Item,
        }
    },
    handler: getItem,
}

// const postItemOptions = {
//     schema: {
//         response: {
//             201: Item,
//         }
//     },
//     handler: addItem,
// }

function itemRoutes(fastify, options, done) {
    // items is an endpoint
    // req & reply form the handler
    fastify.get('/items', getItemsOptions)
    
    fastify.get('/items/:id', getItemOptions)

    // fastify.post('/items', postItemOptions)

    done()
}

module.exports = itemRoutes