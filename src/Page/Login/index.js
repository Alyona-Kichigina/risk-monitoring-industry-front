import React, {useState} from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import {PageContainer, ContentContainer, FormContainer} from "./styles"
import {useNavigate} from "react-router-dom";

const Login = ({ onSubmit, initialRoute }) => {
  const [data, setData] = useState({email: "test@test", password: "test"})
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const onFinish = async ({username, password}) => {
    try {
      const token = "token"
      setLoading(true)
      if (username === "user" && password === "12345") {
        onSubmit(token)
        if (initialRoute) {
          navigate(initialRoute)
        } else {
          navigate("/tab")
        }
        console.log('Success:');
      } else {
        console.log("Пароль или логин не верный")
      }
    } catch (e) {
      console.log("login error", e)
    } finally {
      setLoading(false)
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <PageContainer className="w-full bg-color-light-blue-2">
      <ContentContainer>
        <FormContainer>
          <Form
            name="basic"
            layout="vertical"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Логин"
              name="username"
              rules={[{ required: true, message: 'Введите ваш логин!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Пароль"
              name="password"
              rules={[{ required: true, message: 'Введите ваш пароль!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 9, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Войти
              </Button>
            </Form.Item>
          </Form>
          <div className="flex justify-center">
            <div className="link inline" onClick={() => navigate("/registration")}>
              Зарегистрироваться
            </div>
          </div>
        </FormContainer>
      </ContentContainer>
    </PageContainer>
  );
};

export default Login;
