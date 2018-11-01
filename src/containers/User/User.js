import React, { Component } from 'react';
import {Breadcrumb, Card, Row} from "antd";
import {Link} from "react-router-dom";

class User extends Component {
    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>
                        <Link to="/">Home</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/user">User</Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div  style={{ background: '#fff', minHeight: 360 }}>
                    <Row span={12}>
                        <Card title="User list" bordered={false}>

                        </Card>
                    </Row>
                </div>
            </div>
        );
    }
}

export default User;