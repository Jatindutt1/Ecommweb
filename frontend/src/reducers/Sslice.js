const {createSlice} = require ("@reduxjs/toolkit")

const cartvalue = createSlice({

    name:"cart",

    initialState:[0],

    reducers:{
        add(state,action){
            return[
                state +1
            ]

        },
        sub(state,action){
            return[
                state -= 1
            ]

        }

    }

})

export const {add ,sub} = cartvalue.actions;

export default cartvalue.reducer;