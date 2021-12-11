import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { registerAction } from "../../store/actionCreators";
import s from './Register.module.scss';


const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = async (e) => {
        e.preventDefault()

        const registerForm = {
            username,
            email,
            password
        }

        await dispatch(registerAction(registerForm));
        navigate('/');
    }

    return (
        <Card type='rounded' shadow>
            <h1 className={s.title}>Register</h1>

            <div className={s.formWrapper}>
                <form onSubmit={register}>
                    <Input
                        label='Username'
                        name='username'
                        placeholder='Enter your usename...'
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required />

                    <Input
                        label='Email'
                        name='email'
                        type='email'
                        placeholder='Enter your email...'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required />

                    <Input
                        label='Password'
                        name='password'
                        type='password'
                        placeholder='Enter your password...'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required />
                    
                    <Button type='submit'>
                        Register
                    </Button>

                    <p className={s.text}>
                        Already registered? Click <Link to='/auth/login'>here</Link> to login!
                    </p>
                </form>
            </div>
        </Card>
    )
}

export default Register;
