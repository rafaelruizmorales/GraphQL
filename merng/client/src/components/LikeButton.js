import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { gql, useMutation } from '@apollo/client';

import { Button, Label, Icon } from 'semantic-ui-react';

import MyPopup from '../util/MyPopup'

const LikeButton = ({ user, post: { id, likes } }) => {

    const [liked, setLiked] = useState(false);

    useEffect(() => {
        if (user && likes.find((like) => like.username === user.username)) {
            setLiked(true);
        } else {
            setLiked(false);
        }
    }, [user, likes]);

    const [likePost] = useMutation(LIKE_POST_MUTATION, {
        variables: { postId: id },
        onError(error) {
            console.error(error)
        },
    });

    const likeButton = user ? (
        liked ? (
            <Button color="red">
                <Icon name="heart" />
            </Button>
        ) : (
                <Button color="red" basic>
                    <Icon name="heart" />
                </Button>
            )
        ) : (
            <Button as={Link} to="/login" color="red" basic>
                <Icon name="heart" />
            </Button>
        );

    return (
        <Button as='div' labelPosition='right' onClick={likePost}>
            <MyPopup content={liked ? 'Unlike' : 'Like'}>{likeButton}</MyPopup>
            <Label basic color='red' pointing='left'>
                {likes.length}
            </Label>
        </Button>
    );
}

const LIKE_POST_MUTATION = gql`
    mutation likePost($postId: ID!) {
        likePost(postId: $postId) {
            id
            likes {
                id
                username
            }
        }
    }
`;

export default LikeButton;