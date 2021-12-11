import s from './Button.module.scss';

const Button = ({
    children,
    color = 'primary',
    block = false,
    ...rest
}) => {
    const classNames = `${s.btn} ${s[color]} ${block ? s.block : ''}`;

    return (
        <button className={classNames} {...rest}>
            {children}
        </button>
    )
}

export default Button;
