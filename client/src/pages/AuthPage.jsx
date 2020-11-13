import React, { useState } from "react";
import { Form, Input, Button, Col, Row } from "antd";
import FORM_CONFIG from "../constants/config";

const AuthPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <Row justify="center">
      <Col span={8}>
        <Form
          {...FORM_CONFIG.LAYOUT}
          name="basic"
          initialValues={{
            remember: true,
          }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Email"
            name="email"
            value={form.email}
            onChange={changeHandler}
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input name="email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            value={form.password}
            onChange={changeHandler}
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password name="password" />
          </Form.Item>

          <Form.Item {...FORM_CONFIG.TAIL_LAYOUT}>
            <Button type="primary" htmlType="submit">
              Войти
            </Button>
            <Button
              htmlType="button"
              onClick={() => console.log("register")}
              style={{ margin: "0 8px" }}
            >
              Регистрация
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default AuthPage;
