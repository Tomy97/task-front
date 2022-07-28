export const delete_taks = "delete_task";
export const post_task = "post_task";
export const put_task = "put_task";
export const get_task = "get_task";
export const get_tasks = "get_tasks";

interface DefineTaskI {
  id: number;
  title: string;
  description: string;
  status: boolean;
}

export const get_tasks_action = () => {
  return {
    type: get_tasks
  };
};

export const get_task_action = (id: number) => {
  return {
    type: get_task,
    payload: id
  };
};

export const post_task_action = (data: DefineTaskI) => {
  return {
    type: post_task,
    payload: data
  };
};

export const put_task_action = (data: DefineTaskI) => {
  return {
    type: put_task,
    payload: data
  };
};

export const delete_task_action = (id: number) => {
  return {
    type: delete_taks,
    payload: id
  };
};
