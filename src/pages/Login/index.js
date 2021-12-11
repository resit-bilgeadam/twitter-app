import {useState} from 'react';
import {Link} from 'react-router-dom';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import s from './Login.module.scss';

const Login = () => {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Card type='rounded' shadow>
            <h1 className={s.title}>Login</h1>

            <div className={s.formWrapper}>
                <form>
                    <Input
                        label='Username or Email'
                        name='identifier'
                        placeholder='Enter your usename or email...'
                        value={identifier}
                        onChange={e => setIdentifier(e.target.value)}
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
                        Login
                    </Button>

                    <p className={s.text}>
                        Click <Link to='/auth/register'>here</Link> to sign up!
                    </p>
                </form>
            </div>
        </Card>
    )
}

export default Login;
