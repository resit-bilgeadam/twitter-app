import {useSelector} from 'react-redux';

const Feeds = () => {
    const user = useSelector(state => state.auth.user);

    return (
        <div>
            <h1>Feeds Page</h1>
            {
                user ? <p>{user.username}</p> : null
            }
        </div>
    )
}

export default Feeds;
