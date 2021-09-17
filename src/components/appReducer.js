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
           let items = state.items.filter((id, elem) => elem !== action.id);
            return {
                items
            }
        }
        default:
            return state;
    }
}

export default appReducer;