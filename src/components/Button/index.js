import cc from 'classcat';
import s from './Button.module.scss';

const Button = ({
    children,
    color = 'primary',
    block = false,
    loading = false,
    disabled = false,
    icon = false,
    ...rest
}) => {
    const classNames = cc([
        s.btn, 
        s[color],
        {
            [s.block]: block,
            [s.icon]: icon
        }
    ])

    return (
        <button 
            className={classNames} 
            disabled={loading || disabled}
            {...rest}>
            {loading ? '...Loading' : children}
        </button>
    )
}

export default Button;
