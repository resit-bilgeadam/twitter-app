import s from './Input.module.scss';

const Input = ({
    label,
    id,
    name,
    type = 'text',
    ...rest
}) => {

    return (
        <div className={s.formGroup}>
            <label htmlFor={id || name}>{label}</label>
            <input 
                id={id || name}
                name={name}
                type={type}
                {...rest} />
        </div>
    )
}

export default Input;
