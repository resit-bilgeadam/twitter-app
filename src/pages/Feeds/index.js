import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import TwitForm from '../../components/TwitForm';
import TwitCard from '../../components/TwitCard';
import { fetchTwits } from '../../store/twit/actions';

const Feeds = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const twits = useSelector(state => state.twit.twits);

    useEffect(() => {
        dispatch(fetchTwits())
    }, [])

    return (
        <div>
            <h1>Feeds Page</h1>
            { user && <TwitForm /> }
            { twits && twits.map(twit => <TwitCard key={twit.id} twit={twit} />) }
        </div>
    )
}

export default Feeds;
