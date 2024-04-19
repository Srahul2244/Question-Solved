const initialState = {
  todos: [],
  completed: false,
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(
          (todo, index) =>
            index === action.index
              ? { ...todo, completed: !todo.completed }
              : todo
        ),
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo, index) => index !== action.index),
      };

    default:
      return state;
  }
};

export default todo;
