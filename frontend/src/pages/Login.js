import React, { Component } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { connect } from "react-redux";
import { login, logout } from "../actions/authActions";


const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
};

const tailLayout = {
wrapperCol: {
    offset: 8,
    span: 16,
},
};

class Login extends Component {
    componentDidMount() {
        this.props.dispatch(logout());
    }
    state = {
        username: '',
        password: ''
    }
    
    onFinish = e => {
        const { dispatch } = this.props;
        const { username, password } = this.state;
        dispatch(login(username, password));
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        const { isAuthenticated, error, errorMessage } = this.props;
        if (isAuthenticated) 
            this.props.history.push('/');

        return (
           
            <div style={{ margin: "auto", marginTop: "10%" }}>
                <Form onFinish={this.onFinish} {...layout} name="basic">
                    <h1 style={{ textAlign: "center" }}>Login</h1>
                    <Form.Item>
                        <Input
                            placeholder="Username" onChange={this.handleChange} required name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input.Password name="password" required
                            placeholder="Password" onChange={this.handleChange}
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        />
                    </Form.Item>
                    
                    
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>

                    {isAuthenticated ? <Alert style={{ textAlign: "center" }} message="Login Success" type="success" closable /> : null}
                    {error && !isAuthenticated ? <Alert style={{ textAlign: "center" }} message={errorMessage} type="error" closable /> : null}
                </Form>
            </div>
        ) 
    }
}

const mapStateToProps = state => {
    const { isAuthenticated, error, errorMessage, user } = state.auth;
    return {
        isAuthenticated,
        error,
        errorMessage,
        user
    }
}

export default connect(mapStateToProps)(Login);