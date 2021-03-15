import React, { useContext } from 'react'

import { Card, Image } from 'semantic-ui-react'

import { AuthContext } from '../context/auth';

import LikeButton from './LikeButton'
import DeleteButton from './DeleteButton'

import moment from 'moment'

const PostCard = ({
    post: { id, body, username, comments, likes, createdAt }
}) => {

    const { user } = useContext(AuthContext);

    return (
        <Card fluid>
            <Card.Content>
                <Image
                    floated='right'
                    size='mini'
                    src='https://react.semantic-ui.com/images/avatar/small/ade.jpg'
                />
                <Card.Header>{username}</Card.Header>
                <Card.Meta>{moment(createdAt).fromNow(true)}</Card.Meta>
                <Card.Description>
                    {body}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <LikeButton user={user} post={{ id, likes }} />
                {user && user.username === username && <DeleteButton post={{id}} />}
            </Card.Content>
            
        </Card>
    )
}

export default PostCard;
