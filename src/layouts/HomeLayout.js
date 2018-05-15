import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon ,Layout ,Menu ,Input ,Progress ,Row ,Col} from 'antd';
import { BrowserRouter as Router ,Route } from 'react-router-dom';
import Player from '../components/Player';
import '../App.less';

const { Header, Footer, Sider, Content } = Layout;
const Search = Input.Search;
class HomeLayout extends Component {
    render() {
        const { children } = this.props;
        return (
            <div>
                <Layout>
                    <Header>
                        <div className="logo">
                            <Icon type="arrow-left" style={{fontSize:25,fontWeight:"bold",marginRight:20}}/>
                            <span style={{color:"#fff",fontSize:20,fontWeight:"bold"}}>ReactMusic</span>
                        </div>
                    </Header>
                    <Layout>
                        <Sider width={180}>
                            <Menu mode="inline" defaultSelectedKeys={['1']}>
                                <Menu.Item key='1'>
                                    <Link to="/">
                                        <Icon type="gift" />
                                        <span className="nav-text">推荐歌单 </span>
                                    </Link>
                                </Menu.Item>

                                <Menu.Item key='2'>
                                    <Link to="/search">
                                        <Icon type="search" />
                                        <span className="nav-text">搜索</span>
                                    </Link>
                                </Menu.Item>

                                <Menu.Item  key='3'>
                                    <Link to="/rank">
                                        <Icon type="star" />
                                        <span className="nav-text">排行榜</span>
                                    </Link>
                                </Menu.Item>

                                <Menu.Item  key='4'>
                                    <Link to="/location">
                                        <Icon type="appstore-o" />
                                        <span className="nav-text">本地音乐 </span>
                                    </Link>
                                </Menu.Item>

                                <Menu.Item  key='5'>
                                    <Link to="recently">
                                        <Icon type="clock-circle-o" />
                                        <span className="nav-text">最近播放</span>
                                    </Link>
                                </Menu.Item>

                                <Menu.Item  key='6'>
                                    <Link to="/download">
                                        <Icon type="download" />
                                        <span className="nav-text">下载管理</span>
                                    </Link>
                                </Menu.Item>

                                <Menu.Item  key='7'>
                                    <Link to="/collect">
                                        <Icon type="heart" />
                                        <span className="nav-text">我的收藏</span>
                                    </Link>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Content style={{height:'100%'}}>
                            { children }
                        </Content>
                    </Layout>
                    <Footer>
                        <Player />
                    </Footer>
                </Layout>
            </div>
        );
    }
}

export default HomeLayout;
