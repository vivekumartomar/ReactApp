import React, { createContext } from 'react'

const userContext = createContext({

    user:{
        name:'Test',
        email:'abc@gmail.com'
    }
})

export default userContext