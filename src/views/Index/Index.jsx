import {NavLink,Redirect} from 'react-router-dom';
import Router from '../../router/route';
import React, { Component, Fragment } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import { Layout, Menu,Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';

class Index extends Component {
    state = {
        collapsed: false,
    };
    
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }
    render() {
        let UserD =window.localStorage.getItem('Username');
        if(UserD){
            return <Fragment>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
                >
                <div className="logo" />
                
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                    <Icon type="pie-chart" />
                    <span>首页概览</span>
                    </Menu.Item>
                    <SubMenu
                    key="sub1"
                    title={<span><Icon type="user" /><span>广告管理</span></span>}
                    >
                    <Menu.Item key="3"><NavLink to='/index/AdvCreative'>广告计划</NavLink></Menu.Item>
                    <Menu.Item key="4"><NavLink to='/index/advUnit'>广告单元</NavLink></Menu.Item>
                    <Menu.Item key="5"><NavLink to='/index/advPlan'>广告创意</NavLink></Menu.Item>
                    </SubMenu>
                    <SubMenu
                    key="sub2"
                    title={<span><Icon type="team" /><span>数据中心</span></span>}
                    >
                    <Menu.Item key="6">Team 1</Menu.Item>
                    <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9">
                    <Icon type="file" />
                    <span>工具箱</span>
                    </Menu.Item>
                </Menu>
                </Sider>
                <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>广告计划 <RangePicker
                        defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                        format={dateFormat}
                        />
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <Router routes={this.props.routes}></Router>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
                </Layout>
            </Layout>
        </Fragment>
        }else{
            return <Redirect to='/login'></Redirect>
        }
    }

};

export default Index;