const initialState = {
    items: [],
};

const appReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_ITEM': {
            return {    
                items: [...state.items, action.payload]
            }
        }
        case 'DELETE_ITEM': {
            const newItems = [Object.keys(state.items).filter((e) => e != action.id)]
            console.log(newItems[0]);
            return {
                
            }
        }
        default:
            return state;
    }
}

export default appReducer;