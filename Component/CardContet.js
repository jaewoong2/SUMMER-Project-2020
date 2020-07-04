import React from 'react';
import { Card, Col } from 'antd';
import { ShoppingTwoTone } from '@ant-design/icons';

const { Meta } = Card;


const CardContet = ({ content }) => {

    return (
        <Col xs={12} md={8}>
    <Card
    bordered={false}
    extra={<div style={{color : 'red'}}>{content.title}</div>}
    hoverable
    style={{ width: '100%' }}
    cover={<img alt="example" src={content.image} />}
    actions={[
        <span>{content.price ? `${content.price} 원` : 'free'}</span>,
        <ShoppingTwoTone twoToneColor={true} />
    ]}
    >
    <Meta description={content.description} />
  </Card>
        </Col>
    );
};

export default CardContet;