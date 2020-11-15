import React from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import { useAuth } from "../hooks/auth.hook";

const { Header } = Layout;

const Navbar = () => {
  const { pathname } = useLocation();
  const { logout } = useAuth();
  const history = useHistory();

  const logoutHandler = (event) => {
    event.preventDefault();
    logout();
    history.push("/");
  };

  return (
    <Header>
      <Menu
        theme="light"
        mode="horizontal"
        selectedKeys={
          pathname === "/create" ? ["1"] : pathname === "/tasks" ? ["2"] : [""]
        }
      >
        <Menu.Item key="1">
          <NavLink to="/create">Создать</NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/tasks">Список заданий</NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <a href="/" onClick={logoutHandler}>
            Выйти
          </a>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
