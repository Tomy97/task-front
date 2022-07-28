import {
  delete_taks,
  get_task,
  post_task,
  get_tasks,
  put_task
} from "../actions/TaskActions";

const initialState: any = {
  tasks: []
};

const TaksReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case get_task:
      return {
        ...state,
        tasks: state.tasks.filter((task: any) => task.id === action.payload)
      };
    case delete_taks:
      return {
        ...state,
        tasks: state.tasks.filter((task: any) => task.id !== action.payload)
      };
    case get_tasks:
      return {
        ...state,
        tasks: state.tasks
      };
    case post_task:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case put_task:
      return {
        ...state,
        tasks: state.tasks.map((task: any) => {
          if (task.id === action.payload.id) {
            return action.payload;
          }
          return task;
        })
      };
    default:
      return state;
  }
};

export default TaksReducer;
