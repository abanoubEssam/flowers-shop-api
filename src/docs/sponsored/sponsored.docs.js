// import clone from 'clone';
// import { ordersSchema } from '../../models/order/order.schema'


// const SwaggerOrderSchema = clone(ordersSchema);

export default class sponsoredDocs {
    getSwaggerSchema() {
        let schema = {
            paths: {
                '/shops/{shopId}/flowers/{flowerId}/sponsored': {
                    put: {
                        tags: ['Sponsored'],
                        summary: ['update one of all Flowers On A shop to make it sponsored'],
                        description: 'This can only be done by the logged in user.',
                        operationId: 'update one of Flowers on one shop make it sponsored',
                        parameters: [
                            {
                                name: "shopId",
                                in: "path",
                                description: "ID of shop to Get flower in it",
                                required: true,
                                schema: {
                                    type: "string"
                                }
                            },
                            {
                                name: "flowerId",
                                in: "path",
                                description: "ID of flower to Get flower data",
                                required: true,
                                schema: {
                                    type: "string"
                                }
                            }
                        ],

                        'responses': {
                            '200': {
                                'description': 'Flower Sponsord successfully',
                            },
                            '403': {
                                'description': 'forbidden',
                            }
                        }
                    }
                },
            }
        };
        return schema;
    }
}

