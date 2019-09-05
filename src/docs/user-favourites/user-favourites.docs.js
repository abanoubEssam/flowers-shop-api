// import clone from 'clone';
// import { ordersSchema } from '../../models/order/order.schema'


// const SwaggerOrderSchema = clone(ordersSchema);



export default class userFavouritesDocs {
    getSwaggerSchema() {
      let schema = {
        paths: {
            '/users/{userId}/favourites/{flowerId}': {
                get: {
                    tags: ['users favourites'],
                    summary: ['Get User by id and his/her favourite'],
                    description: 'This can only be done by the logged in user.',
                    operationId: 'get user by id and fav',
                    parameters: [
                        {
                            name: "userId",
                            in: "path",
                            description: "ID of user to return",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "flowerId",
                            in: "path",
                            description: "ID of user to return",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        }
                    ],
                    'responses': {

                        '200': {
                            'description': 'user logged in successfully',
                        },
                        '400': {
                            'description': 'bad request',
                        }
                    },
                },
                post: {
                    tags: ['users favourites'],
                    summary: ['post fav for User by id and his/her favourite flower by id'],
                    description: 'This can only be done by the logged in user.',
                    operationId: 'post user by id and fav',
                    parameters: [
                        {
                            name: "userId",
                            in: "path",
                            description: "ID of user to return",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "flowerId",
                            in: "path",
                            description: "ID of user to return",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        }
                    ],
                    'responses': {

                        '200': {
                            'description': 'user logged in successfully',
                        },
                        '400': {
                            'description': 'bad request',
                        }
                    },
                },
                delete: {
                    tags: ['users favourites'],
                    summary: ['delete fav for User by id and his/her favourite flower by id'],
                    description: 'This can only be done by the logged in user.',
                    operationId: 'delete user by id and fav',
                    parameters: [
                        {
                            name: "userId",
                            in: "path",
                            description: "ID of user to return",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "flowerId",
                            in: "path",
                            description: "ID of user to return",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        }
                    ],
                    'responses': {

                        '200': {
                            'description': 'user logged in successfully',
                        },
                        '400': {
                            'description': 'bad request',
                        }
                    },
                }
            },
            '/users/{userId}/favourites/?pageNumber={pageNumber}&pageSize={pageSize}': {
                get: {
                    tags: ['users favourites'],
                    summary: ['Get User by id and his/her All favourite'],
                    description: 'This can only be done by the logged in user.',
                    operationId: 'get user by id and all fav',
                    parameters: [
                        {
                            name: "userId",
                            in: "path",
                            description: "ID of user to return",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "pageNumber",
                            in: "path",
                            description: "Number of Page to return shops",
                            schema: {
                                type: "number"
                            }
                        },
                        {
                            name: "pageSize",
                            in: "path",
                            description: "Number of shops to return shops",
                            schema: {
                                type: "number"
                            }
                        }
                    ],
                    'responses': {

                        '200': {
                            'description': 'user logged in successfully',
                        },
                        '400': {
                            'description': 'bad request',
                        }
                    },
                },
            },
        }
      };
      return schema;
    }
  }
  
  