export const setEvents = (items) => ({ type: "SET_EVENT", payload: items });
export const addItemsToEvents = (item) => ({ type: "ADD_EVENT", payload: item });
export const updateEventAction = (item) => ({ type: "UPDATE_EVENT", payload: item });
export const deleteEventAction = (id) => ({ type: "DELETE_EVENT", payload: id });
