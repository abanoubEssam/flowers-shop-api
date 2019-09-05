import clone from 'clone';
import { insertFlowerSchema , validateOnUpdateFlowerSchema } from '../../models/flower/flower.schema'


const CreateFlowerSwaggerSchema = clone(insertFlowerSchema);
if (!CreateFlowerSwaggerSchema.required) CreateFlowerSwaggerSchema.required = [];
CreateFlowerSwaggerSchema.required.push('flowerImage', 'price');
CreateFlowerSwaggerSchema.properties = {
    ...CreateFlowerSwaggerSchema.properties,
    flowerImage: {
      description: 'file to upload',
      type: 'string',
      format: 'binary'
    }
  }


const validateUpdateFlowerSwaggerSchema = clone(validateOnUpdateFlowerSchema)

validateUpdateFlowerSwaggerSchema.properties = {
    ...validateUpdateFlowerSwaggerSchema.properties,
    flowerImage: {
        description: 'file to upload',
        type: 'string',
        format: 'binary'
    }
}


export default class orderDocs {
    getSwaggerSchema() {
      let schema = {
        paths: {
          '/flowers/?pageNumber={pageNumber}&pageSize={pageSize}': {
            get: {
                tags: ['Flowers'],
                summary: ['Get All Flowers'],
                description: 'This can only be done by the logged in user with shop id.',
                operationId: 'Get All Flowers',
                parameters: [
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
                        'description': 'flowers finde successfuly',
                    },
                    '400': {
                        'description': 'bad request',
                    }
                },
            }
        },
        '/shops/{shopId}/flowers': {
            post: {
                tags: ['Flowers'],
                summary: ['Create Flowers'],
                description: 'This can only be done by the logged in user with shop id.',
                operationId: 'Create Flowers',
                parameters: [
                    {
                        name: "shopId",
                        in: "path",
                        description: "ID of shop to add flower in it",
                        required: true,
                        schema: {
                            type: "string"
                        }
                    }
                ],
                requestBody: {
                    content: {
                        "multipart/form-data": {
                            schema: CreateFlowerSwaggerSchema
                        }
                    }
                }
                ,
                'responses': {
                    '200': {
                        'description': 'Flower created successfully',
                    },
                    '400': {
                        'description': 'bad request',
                    }
                },
            },
            get: {
                tags: ['Flowers'],
                summary: ['Get All Flowers On A shop'],
                description: 'This can only be done by the logged in user.',
                operationId: 'Get All Flowers on one shop',
                parameters: [
                    {
                        name: "shopId",
                        in: "path",
                        description: "ID of shop to Get flower in it",
                        required: true,
                        schema: {
                            type: "string"
                        }
                    }
                ],
                'responses': {
                    '200': {
                        'description': 'Flower created successfully',
                    },
                    '400': {
                        'description': 'bad request',
                    }
                },
            }
        },
        '/shops/{shopId}/flowers/{flowerId}': {
            get: {
                tags: ['Flowers'],
                summary: ['Get one of all Flowers On A shop'],
                description: 'This can only be done by the logged in user.',
                operationId: 'Get one of Flowers on one shop',
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
                        'description': 'Flower created successfully',
                    },
                    '400': {
                        'description': 'bad request',
                    }
                },
            },
            put: {
                tags: ['Flowers'],
                summary: ['update one of all Flowers On A shop'],
                description: 'This can only be done by the logged in user.',
                operationId: 'update one of Flowers on one shop',
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
                requestBody: {
                    content: {
                        "multipart/form-data": {
                            schema: validateUpdateFlowerSwaggerSchema
                        }
                    }
                },
                'responses': {
                    '200': {
                        'description': 'Flower updated successfully',
                    },
                    '400': {
                        'description': 'bad request',
                    }
                }
            },
            delete: {
                tags: ['Flowers'],
                summary: ['Delete flower using id of shop and flower'],
                description: 'This can only be done by the logged in user.',
                operationId: 'delete flower by id of shop and flower',
                parameters: [
                    {
                        name: "shopId",
                        in: "path",
                        description: "ID of Shop to return ",
                        required: true,
                        schema: {
                            type: "string"
                        }
                    },
                    {
                        name: "flowerId",
                        in: "path",
                        description: "ID of flower to return ",
                        required: true,
                        schema: {
                            type: "string"
                        }
                    }
                ],
                'responses': {
                    '204': {
                        'description': 'flower deleted successfully',
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
  
  