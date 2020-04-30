import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const Linkmenu = withRouter(props => {
    const { location } = props;
    return (
        <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[location.pathname]}
            defaultSelectedKeys={['/home']}
        >
            <Menu.Item key="/home">
                <Icon type="home" />
                <span>Home</span>
                <Link to="/home" />
            </Menu.Item>
            <Menu.Item key="/about-me">
                <Icon type="user-add" />
                <span>About Me</span>
                <Link to="/about-me" />
            </Menu.Item>
            <Menu.Item key="/projects">
                <Icon type="usergroup-add" />
                <span>Projects</span>
                <Link to="/projects" />
            </Menu.Item>
            <Menu.Item key="/contact">
                <Icon type="user" />
                <span>Contact</span>
                <Link to="/contact" />
            </Menu.Item>
        </Menu>
    );
});

export default Linkmenu;