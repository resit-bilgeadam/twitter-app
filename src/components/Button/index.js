import s from './Button.module.scss';

const Button = ({
    children,
    color = 'primary',
    block = false,
    loading = false,
    disabled = false,
    ...rest
}) => {
    const classNames = `${s.btn} ${s[color]} ${block ? s.block : ''}`;

    return (
        <button className={classNames} disabled={loading || disabled} {...rest}>
            {loading ? '...Loading' : children}
        </button>
    )
}

export default Button;
