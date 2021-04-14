import { Layout, Menu, Breadcrumb } from "antd";
import { Icon } from "@ant-design/compatible";
import routes from "../router";
import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import "./index.css";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu, Item } = Menu;
export default class MyLayout extends React.Component {
  state = {
    collapsed: false,
  };

  getMenu(menus) {
    return menus.map((menu, index) =>
      menu.children ? (
        <SubMenu key={index} icon={<Icon type={menu.icon} />} title={menu.name}>
          {this.getMenu(menu.children)}
        </SubMenu>
      ) : (
        <Item key={index} title={menu.name}>
          <Link to={menu.path}>
            <Icon type={menu.icon} />
            <span>{menu.name}</span>
          </Link>
        </Item>
      )
    );
  }

  componentDidMount() {}

  render() {
    return (
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            {this.getMenu(
              routes.find((item) => item.name == "Layout").children
            )}
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={() =>
                this.setState({ collapsed: !this.state.collapsed })
              }
            />
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 490,
            }}
          >
            <h1>Content</h1>
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2021 Created by LiuChen
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
