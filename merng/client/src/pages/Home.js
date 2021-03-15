import React, { useContext, useState, useEffect } from 'react'
import { gql, useQuery } from '@apollo/client';

import { AuthContext } from '../context/auth';

import { Grid, Transition } from 'semantic-ui-react'

import PostCard from '../components/PostCard'
import PostForm from '../components/PostForm';

const Home = () => {

    const [posts, setPosts] = useState([]);

    const { user } = useContext(AuthContext);

    const { loading, error, data } = useQuery(FETCH_POSTS_QUERY);
    
    useEffect(() => {
        if (data) {
            setPosts(data.getPosts);
        }
    }, [data]);

    if(error) {
        return <h2>{error.message}</h2>;
    }

    return (
        <Grid columns={3} divided>
            <Grid.Row>
                <h1>Recent Posts</h1>
            </Grid.Row>

            <Grid.Row>
                {user && (
                    <Grid.Column>
                        <PostForm />
                    </Grid.Column>
                )}
                {loading ? (
                    <h1>Loading posts..</h1>
                ) :
                    (
                        <Transition.Group>
                            {posts && posts.map((post) =>
                                <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                                    <PostCard post={post} />
                                </Grid.Column>
                            )}
                        </Transition.Group>
                    )}

            </Grid.Row>
        </Grid>
    );
}

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

export default Home;