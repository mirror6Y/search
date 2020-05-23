import React, { Component } from 'react';
import { Layout } from 'antd';
import Search from '../service/search';
import '../asset/component/css/index.css'

class Index extends Component {

    render() {
        const { Content } = Layout;

        return (
            <Layout className="layout">

                <Content style={{ textAlign: 'center' }}>
                    <div className="site-layout-content">
                        <Search />
                    </div>
                </Content>
            </Layout>
        );
    }
}

export default Index;