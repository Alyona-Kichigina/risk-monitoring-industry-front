import React, {useState} from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import {PageContainer, ContentContainer, FormContainer} from "../Login/styles"
import {useNavigate} from "react-router-dom";

const Registration = ({ onSubmit, initialRoute }) => {
  const [data, setData] = useState({email: "test@test", password: "test"})
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const onFinish = async ({username, password, last_name, name, patronymic, email, repeat_password}) => {
    try {
      if (password === repeat_password) {
          // делается запрос на по
        setLoading(true)
        navigate("/login")
      } else {
        console.log("выводим ошибку что пароли не равны")
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
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Фамилия"
              name="last_name"
              rules={[{ required: true, message: 'Введите данные!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Имя"
              name="name"
              rules={[{ required: true, message: 'Введите данные!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Отчество"
              name="patronymic"
              rules={[{ required: true, message: 'Введите данные!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Почта"
              name="email"
              rules={[{ required: true, message: 'Введите данные!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Пароль"
              name="password"
              rules={[{ required: true, message: 'Введите данные!' }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Повторите пароль"
              name="repeat_password"
              rules={[{ required: true, message: 'Введите данные!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 9, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Зарегистрироваться
              </Button>
            </Form.Item>
          </Form>
        </FormContainer>
      </ContentContainer>
    </PageContainer>
  );
};

export default Registration;
