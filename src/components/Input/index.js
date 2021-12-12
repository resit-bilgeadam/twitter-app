import { ErrorMessage, useField } from 'formik';
import ErrorText from '../ErrorText';
import s from './Input.module.scss';

const Input = ({
    label,
    id,
    name,
    type = 'text',
    ...rest
}) => {
    const [field, meta] = useField(name);
    const hasError = meta.touched && meta.error;
    console.log(meta);

    return (
        <div className={s.formGroup}>
            <label htmlFor={id || name}>{label}</label>
            <input 
                id={id || name}
                className={hasError ? s.danger : ''}
                name={name}
                type={type}
                {...rest} />

            {name && <ErrorMessage name={name} component={ErrorText} />}
        </div>
    )
}

export default Input;
