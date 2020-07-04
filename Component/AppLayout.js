import React from 'react';
import NavBar from './NavBar'
import { Row, Col } from 'antd';
import CardComponent from './CardComponent';
import  Router, { useRouter } from 'next/router';


const AppLayout = ({ children, name }) => {

  const router = useRouter();
  
  return (
    <div>
      <NavBar name={name} />
      <Row justify="center" align="middle" gutter={8}>
        {/* gutter => col간에 간격 */}
        <Col xs={24} md={3}/>
        <Col xs={24} md={18}>
          {router.pathname.slice(1) !== 'upload' && <CardComponent/>}
          {children}
        </Col>
        <Col xs={24} md={3}>
        </Col>
      </Row>
    </div>

  );
};

export default AppLayout;
