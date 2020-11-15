import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectData } from "../reducers/data";
import Loader from "../components/Loader";
import TaskForm from "../components/TaskForm";
import { UPDATE_TASK_CONFIG } from "../constants/config";

const TaskPage = () => {
  const taskId = useParams().id;
  const data = useSelector(selectData);
  const currentTask = data.find((el) => el._id === taskId);

  if (!currentTask) {
    return <Loader />;
  }

  return <TaskForm {...{ config: UPDATE_TASK_CONFIG, value: currentTask }} />;
};

export default TaskPage;
