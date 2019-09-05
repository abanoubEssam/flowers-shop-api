export const validateUserOnUpdateSchema = {
    type: "object",
    properties: {
        name: {
            type: 'string',
            require: true,
            minLength: 4
        },
        email: {
            type: 'string',
            require: true,
            "format": "email"
        },
        password: {
            type: 'string',
            require: true,
            minLength: 6
        }
    }
}

export const SignUpSchema = {
    type: "object",
    required:['name' , 'email' , 'password'],
    properties: {
        name: {
            type: 'string',
            require: true,
            minLength: 4
        },
        email: {
            type: 'string',
            require: true,
            "format": "email"

        },
        password: {
            type: 'string',
            require: true,
            minLength: 6


        }

    }
}