

export const reducer = (state, action) => {
    switch (action.type){
        case "ADD_TODO":
            return {
                ...state.push({
                item: action.payload,
                completed: false,
                id:new Date()
                })   
            }
        case "TOGGLE_COMPLETED":
            return{
                ...state,
                completed: !state.completed
            }
        case "CLEAR_COMPLETED":
            return{
                ...state.includes(false)
            }
        default:
            return state;
    }
}

export const initialState = [{
   item:'Learned about reducers',
   completed: false , 
   id:3892987589
}]

