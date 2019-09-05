export const validateShopOnUpdateSchema = {
    type: "object",
    properties: {
      name: {
        type: 'string',
       
      },
      geometryLng: {
        type: 'string'
      },
      geometryLat: {
        type: 'string'
      }
    }
  }
  
  export const CreateShopSchema = {
    type: "object",
    required: ['name' , 'geometryLng' , 'geometryLat'],
    properties: {
      name: {
        type: 'string',
        minimum: 5
      },
      geometryLng: {
        type: 'string'
      },
      geometryLat: {
        type: 'string'
      }
  
    }
  }