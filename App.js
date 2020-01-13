import React, {Component} from 'react';

import {Container, Header, Body, Title, Content, Input, Item, Text, Button,Spinner} from 'native-base';

import {Formik} from 'formik';
import * as Yup from 'yup';

export default class App extends Component {

    _handleSubmit = values => {
        //TODO
        //API
    };

    render() {

        return (
            <Container>
                <Header>
                    <Body>
                        <Title>SIGNUP</Title>
                    </Body>
                </Header>
                <Formik
                    initialValues={{email: '',password:''}}
                    onSubmit={this._handleSubmit}
                    validationSchema={
                        Yup.object().shape({
                            email: Yup.string().email('geçersiz format').required('bu alan zorunlu'),
                            password: Yup.string().required('bu alan zorunlu')
                        })
                    }
                >
                    {({values, handleChange, handleSubmit,errors,touched,setFieldTouched,isValid,isSubmitting}) => (
                        <Content style={{padding: 10}}>
                            <Item errors={errors.email && touched.email}>
                                <Input
                                    onChangeText={handleChange('email')}
                                    value={values.email}
                                    placeholder={'email'}
                                    onBlur={()=> setFieldTouched('email')}
                                    autoCapitalize={'none'}
                                    keyboardType={'email-address'}

                                />
                                { (errors.email && touched.email) && <Text style={{color:'red'}}>{errors.email}</Text> }
                            </Item>
                            <Item errors={errors.password && touched.password}>
                                <Input
                                    onChangeText={handleChange('password')}
                                    value={values.password}
                                    placeholder={'password'}
                                    onBlur={()=> setFieldTouched('password')}
                                    secureTextEntry={true}
                                />
                                { (errors.password && touched.password) && <Text style={{color:'red'}}>{errors.password}</Text> }
                            </Item>
                            <Button
                                disabled={!isValid || isSubmitting}
                                onPress={handleSubmit}
                                block
                                style={{marginTop: 10}}>
                                {isSubmitting && <Spinner size={'small'} colo={'white'}/>}
                                <Text>LOGIN</Text>
                            </Button>
                        </Content>
                    )}
                </Formik>

            </Container>
        )
    }
}
