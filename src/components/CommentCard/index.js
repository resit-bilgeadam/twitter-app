import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import Card from '../Card';
import ActionBtn from '../ActionBtn';
import { postCommentLike, deleteCommentLike } from '../../store/twit/actions';
import s from './CommentCard.module.scss';

const CommentCard = ({comment, onLike}) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const likeByMe = user && comment.comment_likes.find(like => like.user === user.id);

    const likeComment = async (e) => {
        e.preventDefault();
        
        if (likeByMe) {
            await dispatch(deleteCommentLike(likeByMe.id))
        } else {
            await dispatch(postCommentLike(comment.id));
        }

        if (onLike) onLike();
    }

    return (
        <div className={s.commentCard}>
            <Card>
                <header className={s.cardHeader}>
                    <h6>{comment.user.username} - {comment.user.email}</h6>
                </header>

                <div className={s.cardBody}>
                    {comment.text}
                </div>

                <footer className={s.cardActions}>
                    <ActionBtn 
                        onClick={likeComment}
                        icon={likeByMe ? <AiFillHeart/> : <AiOutlineHeart />}>
                        {comment.comment_likes ? comment.comment_likes.length : 0}
                    </ActionBtn>
                </footer>
            </Card>
        </div>
    )
}

export default CommentCard;
