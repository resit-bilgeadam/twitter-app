import cc from 'classcat';
import s from './Card.module.scss';

const Card = ({
    children,
    shadow = false,
    type = 'default' // 'rounded' 'default'
}) => {
    const classNames = cc([
        s.card,
        s[type],
        {
            [s.shadow]: shadow
        }
    ]);

    return (
        <div className={classNames}>
            {children}
        </div>
    )
}

export default Card;
