import React,{useReducer}from 'React'

///reducer function
function appleReducer(State=3,action){
    switch(action,type){
        case 'ADD_APPLE':
            return state+1 ;
        case 'EAT_APPLE':
            return state-1;
        default:
            return state;
    }
}


function App(){
    const[state,dispact]=useReducer(appleReducer ,3)
    return(
        <div>
            <h1>Apple Counter</h1>
            <p>Number of apples:{state}</p>

            <button onClick={()=>dispatch({type:'ADD_APPLE'})}>ADD_APPLE</button>
            <button onClick={()=>dispatch({type:'EAT_APPLE'})}>EAT APPLE</button>
            
        
        </div>
    )
}
export default app; 