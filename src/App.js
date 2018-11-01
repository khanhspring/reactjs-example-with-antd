import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import './App.css';
import Dashboard from "./containers/Dashboard/Dashboard";
import User from "./containers/User/User";

import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }


    render() {
    return (
      <Router>
          <div>
              <Layout style={{ minHeight: '100vh' }}>
                  <Sider
                      collapsible
                      collapsed={this.state.collapsed}
                      onCollapse={this.onCollapse}
                  >
                      <div className="logo" />
                      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                          <Menu.Item key="/">
                              <Link to="/">
                                  <Icon type="pie-chart" />
                                  <span>Dashboard</span>
                              </Link>
                          </Menu.Item>
                          <SubMenu
                              key="sub1"
                              title={<span><Icon type="user" /><span>System</span></span>}
                          >
                              <Menu.Item key="3">
                                  <Link to="/user">
                                      User
                                  </Link>
                              </Menu.Item>
                              <Menu.Item key="4">
                                  <Link to="/">
                                      Group
                                  </Link>
                              </Menu.Item>
                          </SubMenu>
                          <Menu.Item key="9">
                              <Icon type="file" />
                              <span>File</span>
                          </Menu.Item>
                      </Menu>
                  </Sider>
                  <Layout>
                      <Header style={{ background: '#fff', padding: 0 }} />
                      <Content style={{ margin: '0 16px' }}>
                          <div>
                              <Route exact path="/" component={Dashboard} />
                              <Route exact path="/user" component={User} />
                          </div>
                      </Content>
                      <Footer style={{ textAlign: 'center' }}>
                          KhanhSpring ©2018 Created by Tran Xuan Khanh
                      </Footer>
                  </Layout>
              </Layout>
          </div>
      </Router>
    );
  }
}

export default App;
