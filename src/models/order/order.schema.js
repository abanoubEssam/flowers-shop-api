// ajv schema
export const ordersSchema = {
    type: "object",
    properties: {
      product:{
        type:'number',
        require:'true'
      },
      quantity: {
        type: 'number',
        require: true,
      }
    }
  }