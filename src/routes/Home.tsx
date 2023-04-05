import {FC, useEffect, useState} from "react";
import axios from "axios";
import {Card, Layout, Menu} from "antd";
import WithAuth from "hoc/WithAuth";
import {Outlet, useNavigate} from "react-router-dom";


const Home: FC = WithAuth(() => {
    const navigate = useNavigate()

    return (
        <>
            <div style={{height: '100dvh', padding: '1rem', backgroundPosition: 'center', backgroundSize: 'cover', background: 'url(https://cdn.dribbble.com/users/2438573/screenshots/5710529/media/d3533559d26bb49cff775b06dfdea590.jpg)'}}>
                <Card>
                    <Layout style={{height: '100%', borderRadius: '0.5rem'}}>
                        <Layout.Sider>
                            <Menu
                                mode='inline'
                                items = {[
                                        {label: 'Overview', key: 'overview', onClick: () => navigate('')},
                                        {label: 'Edit', key: 'edit', onClick: () => navigate('edit')}
                                ]}
                            />
                        </Layout.Sider>
                        <Layout.Content>
                            <Outlet/>
                        </Layout.Content>
                    </Layout>
                </Card>
            </div>
        </>

    )
})

export default Home
