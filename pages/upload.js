import React, { useCallback, useState, useRef } from 'react';
import AppLayout from '../Component/AppLayout';
import { Upload, Button, Form, Input, Row, Col } from 'antd';
import { UploadOutlined, DeleteOutlined, LineOutlined, MinusSquareOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import faker from 'faker';

const imagePaths = [{ src : faker.image.image()},{ src : faker.image.image()},{ src : faker.image.image()}];

const upload = () => {
    const [content, setContent] = useState('');    
    const imageInput = useRef();
    const dispatch = useDispatch();

    const onImageUpload = useCallback(() =>{
        dispatch({
            type : UP_LOAD_POST_REQUEST,
            data : {
                content : content,
                imagePaths
            }
        })
    },[])
    
    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    },[imageInput.current])

    const onChangeInput = useCallback((e) => {
        console.log('images', e.target.files) // 우리가 선택한 이미지 정보
        // const imageFormData = new FormData(); // multer 가 처리하기 위해
        // [].forEach.call(e.target.files, (f) => {
        //     imageFormData.append('image', f); // 키, 값 ( upload.array('image') ) 의 키('images) 값이랑 같아야함
        //     console.log(imageFormData)
        // });
        dispatch({
            type : 'UPLOAD_IMAGES_REQUEST',
            data : e.target.files
        })
    });

    const onChangeContent = useCallback((e) => {
        setContent(e.target.value)
    },[])

    const onRemoveItem =() => {
        // 구현 해야함
    }
    


    return (
        <AppLayout>
            <Row gutter={24}>
                {imagePaths.map((v, i) => {
                  return  (
                      <>
                          <Col xs={12} md={12}>
                          <div key={v} style={{width: '100%', height: '100%'}}>
                              <MinusSquareOutlined onClick={onRemoveItem} style={{marginTop : '10px', color: 'rgb(234, 16, 34)' ,fontSize: '16px', float : 'right'}}/>
                            <img src={v.src} style={{ width : '100%'}} alt={v} />
                        {/* <img src={`http://localhost:3055/${v}`} style={{ width :'200px' }} alt={v}/> */}
                    </div>
                        </Col>
                        </>
                  )
                })}
            </Row>
            <br/><br/><br/>
            <div>
            <label>Title</label>
            <Input type='text'></Input>
            <br/><br/>
            <Form encType="multipart/form-data" onFinish={onImageUpload}>
            <Input.TextArea 
             value={content}
             onChange={onChangeContent}
             style={{ minHeight : '480px' }}
             placeholder="상품소개"
            />
            
              <div>
                <input type="file" name='image' multiple hidden ref={imageInput} onChange={onChangeInput}/>
                <Button onClick={onClickImageUpload}>
                    이미지 업로드
                </Button>
                <Button type="primary" style={{float:'right'}} htmlType="submit">
                    업로드
                </Button>
            </div>
            
            </Form>
            </div>
        </AppLayout>
    );
};

export default upload;
