

export const reducer = (state, action) => {
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
            // return {
            //     item: state.map((i,id)=>{
            //         id === action.id ? { ...i , completed: !i.completed}:i
            //     })
            // }
            const mapArr = state.map(item =>{
                if (item.id === action.payload){
                    return {
                        ...item,
                        completed: !state.completed
                    }
                  
                }
              
            })

            return mapArr
           
            
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

