import React from 'react';
import CardContet from './CardContet';
import { Row, Col } from 'antd';
import faker from 'faker';

const dummyCard = () => { 
    const values = {
        id : faker.random.number(),
        title : faker.random.word(),
        description : faker.random.words(),
        image : faker.image.image()
    }
    return values
}
const dummy = Array(30).fill(0).map((v) => dummyCard())

const CardComponent = () => {

    return (
        <div>
            <Row style={{ marginTop : '15px', marginLeft : '15px', marginRight : '15px'}} gutter={[24, 24]}>
            {dummy.map((v, i) => {
                return (
                    <CardContet key={i + '안녕'} content={v} />
                )
            })}
          </Row>
        </div>
    );
};

export default CardComponent;