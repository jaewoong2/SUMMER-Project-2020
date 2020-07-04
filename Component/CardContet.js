import React from 'react';
import { Card, Col } from 'antd';

const { Meta } = Card;


const CardContet = ({ content }) => {

    return (
        <Col xs={12} md={8}>
    <Card
    hoverable
    style={{ width: '100%' }}
    cover={<img alt="example" src={content.image} />}
    >
    <Meta title={content.title} description={content.description} />
  </Card>
        </Col>
    );
};

export default CardContet;