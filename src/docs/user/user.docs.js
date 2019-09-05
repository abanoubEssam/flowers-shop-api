import clone from 'clone';
import { SignUpSchema , validateUserOnUpdateSchema } from '../../models/user/user.schema'

const SwaggerSignUpSchema = clone(SignUpSchema);
const SwaggervalidateUserOnUpdateSchema = clone(validateUserOnUpdateSchema);

if (!SwaggerSignUpSchema.required) SwaggerSignUpSchema.required = [];
SwaggerSignUpSchema.required.push('userImage');
SwaggerSignUpSchema.properties = {
    ...SwaggerSignUpSchema.properties,
    userImage: {
      description: 'file to upload',
      type: 'string',
      format: 'binary'
    }
  }


export default class userDocs {
  getSwaggerSchema() {
    let schema = {
      paths: {
        '/users': {
            post: {
                tags: ['users'],
                summary: ['Create User'],
                description: 'This can only be done by the logged in user.',
                operationId: 'createUser',
                requestBody: {
                    content: {
                        "multipart/form-data": {
                            schema: SwaggerSignUpSchema
                        }
                    }
                }
                ,
                'responses': {
                    '200': {
                        'description': 'user created successfully',
                    },
                    '400': {
                        'description': 'bad request',
                    }
                },
            },
            get: {
                tags: ['users'],
                summary: ['Get All User'],
                description: 'This can only be done by the logged in Admin.',
                operationId: 'get userId if admin',

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
        '/users/{userId}': {
            get: {
                tags: ['users'],
                summary: ['Get User by id'],
                description: 'This can only be done by the logged in user.',
                operationId: 'get user by id',
                parameters: [
                    {
                        name: "userId",
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
                tags: ['users'],
                summary: ['Delete User by id'],
                description: 'This can only be done by the logged in user.',
                operationId: 'get user and delete',
                parameters: [
                    {
                        name: "userId",
                        in: "path",
                        description: "ID of user to return",
                        required: true,
                        schema: {
                            type: "string"
                        }
                    }
                ],
                'responses': {
                    '400': {
                        'description': 'bad request',
                    }
                    ,
                    '204': {
                        'description': 'the user deleted successfuly and there is no content to shown(204)',
                    }
                },
            },
            put: {
                tags: ['users'],
                summary: ['update User by id'],
                description: 'This can only be done by the logged in user.',
                operationId: 'get user and update',
                parameters: [
                    {
                        name: "userId",
                        in: "path",
                        required: true,
                        description: "ID of user to return",
                        schema: {
                            type: "string"
                        }
                    }
                ],
                requestBody: {
                    content: {
                        "multipart/form-data": {
                            schema: SwaggervalidateUserOnUpdateSchema
                        }
                    }
                },
                'responses': {
                    '200': {
                        'description': 'user updated  successfully',
                    },
                    '400': {
                        'description': 'bad request',
                    }

                },
            }

        },
      }
    };
    return schema;
  }
}

