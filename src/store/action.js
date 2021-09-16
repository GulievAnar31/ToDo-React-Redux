export const addItem = (payload) => ({
  type: 'ADD_ITEM',
  payload  
})

export const deleteItem = (id) => ({
  type: 'DELETE_ITEM',
  id
})