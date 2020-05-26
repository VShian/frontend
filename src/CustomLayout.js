import React from "react";
import { Link } from "react-router-dom";

import { Layout, Menu } from "antd";


class CustomLayout extends React.Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }
  render () {
    const { Content } = Layout;
    const { children } = this.props;
    return (
      <Layout>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="upload">
            <Link to={"/upload"}>
              Upload
            </Link>
          </Menu.Item>
          <Menu.Item key="list">
            <Link to={"/"}>
              List
            </Link>
          </Menu.Item>
        </Menu>
        <Content className="layout-content">{children}</Content>
      </Layout>
    );
  }
}

export default CustomLayout;