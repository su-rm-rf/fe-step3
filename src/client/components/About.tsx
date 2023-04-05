import React from 'react'

import { Button, message, Layout } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'

import styles from '@/styles/index.scss'

const About = () => {
  return (
    <div className={styles.about}>
      <Button type="primary" onClick={ () => message.info('注册') }>注册</Button>
      <Button type="primary" onClick={ () => message.info('登录') }>登录</Button>
      {/* <Layout>
        <Header>header</Header>
        <Layout>
          <Sider>left sider</Sider>
          <Content>content</Content>
          <Sider>right sider</Sider>
        </Layout>
        <Footer>footer</Footer>
      </Layout> */}
    </div>
  )
}

export default About