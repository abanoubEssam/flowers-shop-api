// import clone from 'clone';
// import { ordersSchema } from '../../models/order/order.schema'


// const SwaggerOrderSchema = clone(ordersSchema);

export default class orderDocs {
  getSwaggerSchema() {
    let schema = {
      paths: {
        '/users/{userId}/orders': {
          get: {
              tags: ['orders'],
              summary: ['Get Orders of user'],
              description: 'this can only be done by the logged in user',
              operationId: 'get Order',
              parameters: [
                  {
                      name: "userId",
                      in: "path",
                      description: "ID of user to return cart",
                      required: true,
                      schema: {
                          type: "string"
                      }
                  }
              ],
              'responses': {
                  '200': {
                      'description': 'order find successfuly',
                  },
                  '400': {
                      'description': 'bad request',
                  }
              },
          },
          post: {
              tags: ['orders'],
              summary: ['Post Orders of user'],
              description: 'this can only be done by the logged in user',
              operationId: 'Post Order',
              parameters: [
                  {
                      name: "userId",
                      in: "path",
                      description: "ID of user to return cart",
                      required: true,
                      schema: {
                          type: "string"
                      }
                  }
              ],
              'responses': {
                  '200': {
                      'description': 'order find and posted successfuly',
                  },
                  '400': {
                      'description': 'bad request',
                  }
              },
          }
      },
      '/users/{userId}/orders/{orderId}': {
          delete: {
              tags: ['orders'],
              summary: ['delete an Order of user using id'],
              description: 'this can only be done by the logged in user',
              operationId: 'delete Order',
              parameters: [
                  {
                      name: "userId",
                      in: "path",
                      description: "ID of user to return cart",
                      required: true,
                      schema: {
                          type: "string"
                      }
                  },
                  {
                      name: "orderId",
                      in: "path",
                      description: "ID of order to delete order",
                      required: true,
                      schema: {
                          type: "string"
                      }
                  }
              ],
              'responses': {
                  '200': {
                      'description': 'order deleted successfuly',
                  },
                  '400': {
                      'description': 'bad request',
                  }
              },
          }
      }
      }
    };
    return schema;
  }
}

