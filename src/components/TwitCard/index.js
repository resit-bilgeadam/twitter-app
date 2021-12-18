import Card from '../Card';
import s from './TwitCard.module.scss';

const TwitCard = ({twit}) => {
    return (
        <div className={s.twitCard}>
            <Card>
                <header className={s.cardHeader}>
                    <h6>{twit.user.username} - {twit.user.email}</h6>
                </header>

                <div className={s.cardBody}>
                    {twit.text}
                </div>
            </Card>
        </div>
    )
}

export default TwitCard;
