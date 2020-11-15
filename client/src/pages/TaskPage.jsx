import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useHttp } from "../hooks/http.hook";
import { fetchData, selectData } from "../reducers/data";
import { selectToken } from "../reducers/auth";
import Loader from "../components/Loader";
import TaskForm from "../components/TaskForm";
import { UPDATE_TASK_CONFIG } from "../constants/config";

const TaskPage = () => {
  const taskId = useParams().id;
  const data = useSelector(selectData);
  const { request } = useHttp();
  const token = useSelector(selectToken);
  const history = useHistory();
  const dispatch = useDispatch();
  const currentTask = data.find((el) => el._id === taskId);

  if (!currentTask) {
    return <Loader />;
  }

  const onFinish = async (values) => {
    const { name, description } = values;
    const newValue = { ...currentTask, name, description };
    try {
      await request(`/api/task/update/${currentTask._id}`, "PUT", newValue, {
        Authorization: `Bearer ${token}`,
      });
      dispatch(fetchData(token));
      history.push(`/tasks`);
    } catch (e) {}
  };

  return (
    <TaskForm
      {...{ onFinish, config: UPDATE_TASK_CONFIG, value: currentTask }}
    />
  );
};

export default TaskPage;
