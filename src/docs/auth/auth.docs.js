// import clone from 'clone';
// import { ordersSchema } from '../../models/order/order.schema'


// const SwaggerOrderSchema = clone(ordersSchema);

export default class authDocs {
    getSwaggerSchema() {
      let schema = {
        paths: {
          '/auth': {
            post: {
                tags: ['Auth'],
                summary: ['Login'],
                description: 'This can only be done by the logged in user.',
                operationId: 'Login',
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    email: {
                                        type: 'string',
                                        require: true
                                    },
                                    password: {
                                        type: 'string',
                                        require: true
                                    }

                                }
                            }
                        }
                    }
                }
                ,
                'responses': {
                    '200': {
                        'description': 'user logged in successfully',
                    },
                    '400': {
                        'description': 'bad request',
                    }
                },
            },
        }
        }
      };
      return schema;
    }
  }
  
  