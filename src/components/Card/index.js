import s from './Card.module.scss';

const Card = ({
    children,
    shadow = false,
    type = 'default' // 'rounded' 'default'
}) => {
    const classNames = `${s.card} ${shadow ? s.shadow : ''} ${s[type]}`;

    return (
        <div className={classNames}>
            {children}
        </div>
    )
}

export default Card;
