//npm install @reduxjs/toolkit method 2
//npm install react-redux method 1

import {createStore} from 'redux';

//if we use redux tool kit  method 2
//import {createSlice,configureStore} from 'reduxjs/toolkit';

//reducer is a function where our logic resides
const initialState={counter:0,showCounter:true};


//if we use redux tool kit method 2
/*
const counterSlice=createSlice({
    name:'counter',
    initialState:initialState,
    reducers:{
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        increase(state,action){
          state.counter=state.counter+action.amount;
        },
        toggleCounter(state){
          state.showCounter=!state.showCounter;
        }
    }
})
*/

//method 1
const counterReducer=(state=initialState,action)=>{
    if(action.type==='increment'){
        return{
            counter:state.counter+1,
            showCounter:state.showCounter
        }
    }

    if(action.type==='increase'){
        return{
            counter:state.counter+action.amount,
            showCounter:state.showCounter
        }
    }

    if(action.type==='decrement'){
        return{
            counter:state.counter-1,
            showCounter:state.showCounter
        }
    }

    if(action.type==='toggle'){
        return{
            showCounter:!state.showCounter,
            counter:state.counter
        }
    }
    return state;
}

//create a store and attach it with reducer
const store=createStore(counterReducer);
//for method2
/*const store=configureStore({
reducer:{counter:counterSlice.reducer}
})
*/


export default store;
