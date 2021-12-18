import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { registerAction } from "../../store/auth/actions";
import * as yup from 'yup';
import s from './Register.module.scss';

const registerSchema = yup.object().shape({
    username: yup.string().min(3).required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required()
})

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const register = async (values, {setSubmitting}) => {
        setSubmitting(true)

        await dispatch(registerAction(values));
        setSubmitting(false);
        navigate('/');
    }

    return (
        <Card type='rounded' shadow>
            <h1 className={s.title}>Register</h1>

            <div className={s.formWrapper}>
                <Formik
                    initialValues={{
                        username: '',
                        email: '',
                        password: ''
                    }}
                    validationSchema={registerSchema}
                    onSubmit={register}>
                    
                    {({isSubmitting}) => (
                        <Form>
                            <Field
                                as={Input}
                                label='Username'
                                name='username'
                                placeholder='Enter your usename...' />

                            <Field
                                as={Input}
                                label='Email'
                                name='email'
                                type='email'
                                placeholder='Enter your email...' />

                            <Field
                                as={Input}
                                label='Password'
                                name='password'
                                type='password'
                                placeholder='Enter your password...' />
                            
                            <Button type='submit' loading={isSubmitting}>
                                Register
                            </Button>

                            <p className={s.text}>
                                Already registered? Click <Link to='/auth/login'>here</Link> to login!
                            </p>
                        </Form>
                    )}

                </Formik>
            </div>
        </Card>
    )
}

export default Register;
