import React, { Component } from 'react';
import './App.css';
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Layout } from 'antd';
import LinkMenu from './Menu.js';
import Home from '../home';

const { Header, Content, Footer, Sider } = Layout;


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
    };
  }

  handleCollapse = collapsed => {
    console.log('Action', { collapsed });
    this.setState({ collapsed });
  };

  render () {
    return (
        <HashRouter>
          <Layout className="layout">
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.handleCollapse}
                >
              <div className="logo" />
              <LinkMenu location={this.location}/>
            </Sider>
            <Layout>
            <Header className="header" />
            <Content className="aligner content">
                <Switch>
                  <Route exact path="/" render={() => <Redirect to="/home" />} />

                  <Route path="/home" component={Home} />
                </Switch>
            </Content>
            <Footer className="footer">Ant Design ©2016 Created by Ant UED</Footer>
            </Layout>
          </Layout>
        </HashRouter>
    );
  }

}

export default App;
