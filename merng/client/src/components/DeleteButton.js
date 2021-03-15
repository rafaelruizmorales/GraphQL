import React, { useState } from 'react';
import { Button, Confirm, Icon } from 'semantic-ui-react';

import { gql, useMutation } from '@apollo/client';

import MyPopup from '../util/MyPopup';

const DeleteButton = ({ post: { id } }) => {
    const [confirmOpen, setConfirmOpen] = useState(false);


    const [deletePost] = useMutation(DELETE_POST_MUTATION, {
        variables: { postId: id },
        update(proxy) {
            setConfirmOpen(false);

            const data = proxy.readQuery({ query: FETCH_POSTS_QUERY });

            proxy.writeQuery({
                query: FETCH_POSTS_QUERY,
                data: { getPosts: data.getPosts.filter((p) => p.id !== id) }
            });

        },
        onError(error) {
            console.error(error)
        },
    });

    function deletePostMutation() {
        deletePost();
    }

    return (
        <>
            <MyPopup content={'Delete post'}>
                <Button
                    as="div"
                    color="black"
                    floated="right"
                    onClick={() => setConfirmOpen(true)}
                >
                    <Icon name="trash" style={{ margin: 0 }} />
                </Button>
            </MyPopup>
            <Confirm
                open={confirmOpen}
                onCancel={() => setConfirmOpen(false)}
                onConfirm={deletePostMutation}
            />
        </>
    );
}

const DELETE_POST_MUTATION = gql`
    mutation deletePost($postId: ID!) {
        deletePost(postId: $postId)
    }
`;

const FETCH_POSTS_QUERY = gql`
    query {
        getPosts {
            id
            body
            createdAt
            username
            likes {
                username
            }
            comments {
                id
                username
                createdAt
                body
            }
        }
    }
`;

export default DeleteButton;