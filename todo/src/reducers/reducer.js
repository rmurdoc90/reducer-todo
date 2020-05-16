

export const reducer = (state=initialState, action) => {
    console.log(action)
    switch (action.type){
        case "ADD_TODO":
           return [...state ,
            {
                item:action.payload.todoText,
                completed:false,
                id:Date.now()
            }
        ]
           
            
        case "TOGGLE_COMPLETED":

            const mapArr = state.map(item =>{
                if (item.id === action.payload){
                    return {
                        ...item,
                        completed: !state.completed
                    }
                  
                } else return item
              
            })

            return mapArr
           
            
        case "CLEAR_COMPLETED":
            const incTodo = state.filter((item)=>{
                return item.completed === false
            })
            return incTodo
            
        default:
            return state;
    }
}

export const initialState = [{
   item:'Learned about reducers',
   completed: false , 
   id:3892987589
}]

