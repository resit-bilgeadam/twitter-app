import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { loginAction } from '../../store/actionCreators';
import s from './Login.module.scss';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

const loginSchema = yup.object().shape({
    identifier: yup.string().min(3, 'En az 3 karakter olmalı').required('Zorunlu alan'),
    password: yup
                .string()
                .min(6)
                .required('Zorunlu alan')
})

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = async (values, {setSubmitting}) => {
        console.log(values)
        setSubmitting(true);

        await dispatch(loginAction(values));
        setSubmitting(false);
        navigate('/');
    }

    return (
        <Card type='rounded' shadow>
            <h1 className={s.title}>Login</h1>

            <div className={s.formWrapper}>
                <Formik
                    initialValues={{
                        identifier: '',
                        password: ''
                    }}
                    validationSchema={loginSchema}
                    onSubmit={login}>

                    {({isSubmitting}) => (
                        <Form>
                            <Field
                                as={Input} 
                                label='Username or Email'
                                name='identifier'
                                placeholder='Enter your usename or email...' />

                            <Field 
                                as={Input}
                                label='Password'
                                name='password'
                                type='password'
                                placeholder='Enter your password...' />
                            
                            <Button type='submit' loading={isSubmitting}>
                                Login
                            </Button>

                            <p className={s.text}>
                                Click <Link to='/auth/register'>here</Link> to sign up!
                            </p>
                        </Form>
                    )}
                    
                </Formik>
            </div>
        </Card>
    )
}

export default Login;
