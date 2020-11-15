import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useHttp } from "../hooks/http.hook";
import { selectToken } from "../reducers/auth";
import { fetchData } from "../reducers/data";
import TaskForm from "../components/TaskForm";
import { CREATE_TASK_CONFIG } from "../constants/config";

const CreateTaskPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { request } = useHttp();
  const token = useSelector(selectToken);

  const onFinish = async (values) => {
    const valueWithDate = { ...values, date: Date.now() };
    try {
      await request("/api/task/create", "POST", valueWithDate, {
        Authorization: `Bearer ${token}`,
      });
      dispatch(fetchData(token));
      history.push(`/tasks`);
    } catch (e) {}
  };

  return <TaskForm {...{ onFinish, config: CREATE_TASK_CONFIG }} />;
};

export default CreateTaskPage;
