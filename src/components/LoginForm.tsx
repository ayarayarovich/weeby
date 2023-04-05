import {FC} from "react"
import {Form, Input, Checkbox, Button, Space, Typography} from 'antd'
import {UserOutlined, LockOutlined} from '@ant-design/icons'
import axios from "axios"
import qs from 'qs'
import {useNavigate} from "react-router-dom";


const MyForm: FC = () => {

    const [form] = Form.useForm()
    const navigate = useNavigate()

    const onFinish = async (values: any) => {
        console.log('Received values of form: ', values);
        axios.post('/api/auth.php', qs.stringify(values))
            .then(() => {
                navigate('/home')
            })
    };

    return (
        <Form
            name="normal_login"
            form={form}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            size={"large"}
            action='/api/auth.php'
            wrapperCol={{
                xs: {offset: 0, span: 24},
                sm: {offset: 6, span: 12}
            }}
        >
            <Form.Item
                name="username"
                rules={[
                    { required: true, message: 'Введите почту!' },
                    // { type: 'email', message: 'Почта кривая'}
                ]}
            >
                <Input prefix={<UserOutlined/>} placeholder="Почта"/>
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Введите пароль!' }]}
            >
                <Input
                    prefix={<LockOutlined/>}
                    type="password"
                    placeholder="Пароль"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Запомнить</Checkbox>
                </Form.Item>
            </Form.Item>

            <Form.Item style={{marginBottom: '0'}}>
                <Button type="primary" htmlType="submit" style={{width: '100%'}}>
                    Войти
                </Button>
                Нет аккаунта? <a href="">Создать аккаунт</a>
            </Form.Item>
        </Form>
    );
}

const LoginForm: FC = () => {
    return (
        <Space direction='vertical' size={64} style={{display: 'flex'}}>
            <Typography.Title style={{textAlign: 'center'}}>Добро пожаловать!</Typography.Title>
            <MyForm/>
        </Space>
    )
}

export default LoginForm;
