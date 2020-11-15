/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Table } from "antd";
import { fetchData, selectData } from "../reducers/data";
import { selectToken } from "../reducers/auth";
import { useHttp } from "../hooks/http.hook";

const TasksListPage = () => {
  const data = useSelector(selectData);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const { request } = useHttp();

  const columns = [
    {
      title: "Дата",
      dataIndex: "date",
      key: "date",
      render: (text) => {
        return new Date(text).toLocaleString();
      },
    },
    {
      title: "Название",
      dataIndex: "name",
      key: "name",
      render: (text, record) => <Link to={`/task/${record._id}`}>{text}</Link>,
    },
    {
      title: "Описание",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Действие",
      key: "action",
      render: (_, record) => (
        <a
          onClick={async () => {
            await request(`/api/task/delete/${record._id}`, "DELETE", null, {
              Authorization: `Bearer ${token}`,
            });
            dispatch(fetchData(token));
          }}
        >
          Удалить
        </a>
      ),
    },
  ];

  return (
    <div className="table-container">
      <h1 align="center" style={{ marginBottom: "30px" }}>
        Список заданий
      </h1>
      <Table
        rowKey="_id"
        pagination={false}
        dataSource={data}
        columns={columns}
      />
    </div>
  );
};

export default TasksListPage;
