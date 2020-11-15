import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Col, Row } from "antd";
import { useHttp } from "../hooks/http.hook";
import { selectToken } from "../reducers/auth";
import { FORM_CONFIG, VALIDATE_MSG } from "../constants/config";

const CreateTaskPage = () => {
  const history = useHistory();
  const { request } = useHttp();
  const token = useSelector(selectToken);

  const onFinish = async (values) => {
    const valueWithDate = { ...values.task, date: Date.now() };
    try {
      const data = await request("/api/task/create", "POST", valueWithDate, {
        Authorization: `Bearer ${token}`,
      });
      console.log(data);
      history.push(`/task/${data.task._id}`);
    } catch (e) {}
  };

  return (
    <Row justify="center">
      <Col span={8}>
        <Form
          {...FORM_CONFIG.LAYOUT}
          onFinish={onFinish}
          validateMessages={VALIDATE_MSG}
        >
          <h1 align="center" style={{ marginBottom: "30px" }}>
            Создать задание
          </h1>
          <Form.Item
            name={["task", "name"]}
            label="Название"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={["task", "description"]} label="Описание">
            <Input.TextArea rows={6} />
          </Form.Item>
          <Form.Item {...FORM_CONFIG.TAIL_LAYOUT}>
            <Button type="primary" htmlType="submit">
              Создать
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default CreateTaskPage;
