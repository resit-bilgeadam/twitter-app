import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTwit, fetchComments } from "../../store/twit/actions";
import TwitCard from '../../components/TwitCard';
import TwitForm from '../../components/TwitForm';
import CommentCard from "../../components/CommentCard";

const TwitDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const [twit, setTwit] = useState(null);
    const [comments, setComments] = useState(null);
    const user = useSelector(state => state.auth.user);

    const getTwit = async () => {
        const twit = await dispatch(fetchTwit(id))

        setTwit(twit);
    }

    const getComments = async () => {
        const comments = await dispatch(fetchComments(id));

        setComments(comments);
    }

    useEffect(() => {
        getTwit();
        getComments();
    }, [id])

    return (
        <div>
            {twit && <TwitCard twit={twit} onLike={getTwit} />}

            {
                user && twit && 
                <TwitForm 
                    twitId={twit.id} 
                    onSubmit={() => {
                        getTwit();
                        getComments();
                    }} 
                    isComment />
            }

            {
                comments &&
                comments.map(comment => <CommentCard 
                                            key={comment.id}
                                            comment={comment}
                                            onLike={getComments} />)
            }
        </div>
    )
}

export default TwitDetail;
