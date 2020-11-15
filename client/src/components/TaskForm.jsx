import React, { useEffect } from "react";
import { Form, Input, Button, Col, Row } from "antd";
import { FORM_CONFIG, VALIDATE_MSG } from "../constants/config";

const TaskForm = ({ onFinish, config, value }) => {
  const { title, btnName } = config;
  const [form] = Form.useForm();

  useEffect(() => {
    if (value) {
      const date = new Date(value.date);
      const newValue = { ...value, date: date.toLocaleString() };
      form.setFieldsValue(newValue);
    }
  }, [form, value]);

  return (
    <Row justify="center">
      <Col span={8}>
        <Form
          form={form}
          {...FORM_CONFIG.LAYOUT}
          onFinish={onFinish}
          validateMessages={VALIDATE_MSG}
        >
          <h1 align="center" style={{ marginBottom: "30px" }}>
            {title}
          </h1>
          <Form.Item name="date" label="Дата" hidden={!value}>
            <Input disabled />
          </Form.Item>
          <Form.Item
            name="name"
            label="Название"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Описание">
            <Input.TextArea rows={6} />
          </Form.Item>
          <Form.Item {...FORM_CONFIG.TAIL_LAYOUT}>
            <Button type="primary" htmlType="submit">
              {btnName}
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default TaskForm;
