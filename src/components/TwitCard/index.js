import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import {FaRegCommentDots} from 'react-icons/fa';
import Card from '../Card';
import ActionBtn from '../ActionBtn';
import { deleteLike, postLike } from '../../store/twit/actions';
import s from './TwitCard.module.scss';

const TwitCard = ({twit, onLike}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.auth.user);
    const likeByMe = user && twit.likes.find(like => like.user === user.id);

    const likeTwit = async (e) => {
        e.preventDefault();

        if (likeByMe) {
            await dispatch(deleteLike(likeByMe.id))
        } else {
            await dispatch(postLike(twit.id))
        }

        if (onLike) onLike();
    }

    const commentTwit = (e) => {
        e.preventDefault();

        navigate(`/twits/${twit.id}`);
    }

    return (
        <Link to={`/twits/${twit.id}`} className={s.twitCard}>
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

                    <ActionBtn 
                        onClick={commentTwit}
                        icon={<FaRegCommentDots />}>
                        {twit.comments ? twit.comments.length : 0}
                    </ActionBtn>
                </footer>
            </Card>
        </Link>
    )
}

export default TwitCard;
