let nextTodoId = 0;

export const addTodo = payload => {
  return {
    type: "ADD_TODO",
    id: nextTodoId++,
    payload,
  };
};

export const toggleTodo = id => {
  return {
    type: "TOGGLE_TODO",
    id,
  };
};

export const deleteTodo = id => {
  return {
    type: "DELETE_TODO",
    id,
  };
};
