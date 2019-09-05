// import clone from 'clone';
// import { ordersSchema } from '../../models/order/order.schema'


// const SwaggerOrderSchema = clone(ordersSchema);

export default class notificationDocs {
    getSwaggerSchema() {
      let schema = {
        paths: {
            '/push-notifications/unsubscribe?token={token}': {
                delete: {
                    tags: ['Push-Notification'],
                    summary: ['delete token from user'],
                    description: 'This can only be done by the logged in user.',
                    operationId: 'delete notification',
                    parameters: [
                        {
                            name: "token",
                            in: "path",
                            description: " delete token ",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        }],
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
            '/push-notifications/unsubscribe/{token}': {
                post: {
                    tags: ['Push-Notification'],
                    summary: ['post token from user'],
                    description: 'This can only be done by the logged in user.',
                    operationId: 'post notification',
                    parameters: [
                        {
                            name: "token",
                            in: "path",
                            description: " post token ",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        }],
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
  
  