import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


class Search extends Component {



    render() {


        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 }
        };

        return (
            <Form name="horizontal_login" layout="inline" >
                <Form.Item
                    {...formItemLayout}
                    name="keyword"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your keyword!',
                        },
                    ]}
                >
                    <Input prefix={<SearchOutlined className="site-form-item-icon" />} />
                </Form.Item>


                <Form.Item shouldUpdate>
                    {() => (
                        <Button
                            type="primary"
                            htmlType="submit">
                            search
                        </Button>
                    )}
                </Form.Item>
            </Form>
        );
    }
}

export default Search;