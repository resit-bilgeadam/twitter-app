import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import Card from '../Card';
import ActionBtn from '../ActionBtn';
import { deleteLike, postLike } from '../../store/twit/actions';
import s from './TwitCard.module.scss';

const TwitCard = ({twit}) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const likeByMe = user && twit.likes.find(like => like.user === user.id)

    const likeTwit = () => {
        if (likeByMe) {
            dispatch(deleteLike(likeByMe.id))
        } else {
            dispatch(postLike(twit.id))
        }
    }

    return (
        <div className={s.twitCard}>
            <Card>
                <header className={s.cardHeader}>
                    <h6>{twit.user.username} - {twit.user.email}</h6>
                </header>

                <div className={s.cardBody}>
                    {twit.text}
                </div>

                <footer className={s.cardActions}>
                    <ActionBtn 
                        onClick={likeTwit}
                        icon={likeByMe ? <AiFillHeart/> : <AiOutlineHeart />}>
                        {twit.likes ? twit.likes.length : 0}
                    </ActionBtn>
                </footer>
            </Card>
        </div>
    )
}

export default TwitCard;
