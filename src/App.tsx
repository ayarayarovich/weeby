import React from 'react'
import {Row, Col, Card} from 'antd'
import LoginForm from "./components/LoginForm";

const App: React.FC = () => {
    return (
        <>
            <div style={{backgroundPosition: 'center', backgroundSize: 'cover', background: 'url(https://cdn.dribbble.com/users/2438573/screenshots/5710529/media/d3533559d26bb49cff775b06dfdea590.jpg)'}}>
                <Row align='stretch' style={{padding: '1rem', minHeight: '100dvh'}}>
                    <Col xs={24} lg={12}>
                        <Card style={{height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center'}}>
                            <LoginForm/>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}


export default App
