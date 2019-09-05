// import clone from 'clone';
// import { ordersSchema } from '../../models/order/order.schema'


// const SwaggerOrderSchema = clone(ordersSchema);

export default class notificationDocs {
    getSwaggerSchema() {
      let schema = {
        paths: {
            '/notification': {
                get: {
                    tags: ['notification'],
                    summary: ['get notification'],
                    description: 'This can only be done by the logged in user.',
                    operationId: 'get notification',
                    'responses': {
                        '200': {
                            'description': 'user created successfully',
                        },
                        '400': {
                            'description': 'bad request',
                        }
                    }
                }
            },
        }
      };
      return schema;
    }
  }
  
  