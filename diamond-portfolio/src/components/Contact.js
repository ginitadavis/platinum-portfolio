import React from 'react';
import '../styles/Content.css';


import { PlusOutlined } from '@ant-design/icons';
import {
    Button,
    Form,
    Input,
} from 'antd';
import { useState } from 'react';
const { TextArea } = Input;

function Contact() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };



    return (
        <>
            <h1 className='title'>Contact</h1>

            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}

                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Name"
                    name="userName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name.',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email Address"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email address.',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Message:"
                    name="message"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your message.',
                        },
                    ]}
                >
                    <TextArea rows={4} />

                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>


        </>
    )
}

export default Contact;