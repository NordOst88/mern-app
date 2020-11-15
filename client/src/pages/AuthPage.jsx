import React, { useEffect, useState } from "react";
import { Form, Input, Button, Col, Row, message } from "antd";
import { useHttp } from "../hooks/http.hook";
import { useAuth } from "../hooks/auth.hook";
import { FORM_CONFIG } from "../constants/config";

const AuthPage = () => {
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useAuth();

  useEffect(() => {
    if (error) {
      message.error(error, 1);
    }
    clearError();
  }, [error, clearError]);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request("/api/auth/register", "POST", { ...form });
      message.info(data.message, 1);
    } catch (e) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      login(data.token, data.userID);
    } catch (e) {}
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
          onFinish={loginHandler}
        >
          <h1 align="center">Авторизация</h1>
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
            <Button type="primary" htmlType="submit" disabled={loading}>
              Войти
            </Button>
            <Button
              htmlType="button"
              onClick={registerHandler}
              disabled={loading}
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
