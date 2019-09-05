
export const insertFlowerSchema = {
    type: "object",
    required: ['name', 'description'],
    properties: {
      name: {
        type: 'string'
      },
      description: {
        type: 'string'
      },
      price: {
        type: 'string'
      }
    }
  }
  
  export const validateOnUpdateFlowerSchema = {
    type: "object",
    properties: {
      name: {
        type: 'string'
      },
      description: {
        type: 'string'
      },
      price: {
        type: 'string'
      }
    }
  }