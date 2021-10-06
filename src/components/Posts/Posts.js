import React, { useEffect, useState } from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import { PostContainer, PostCard, PostHeader, PostBody, PostReactions, ReactionButton, ProfilePhoto, ProfileInfo, MoreIcon } from './Post.styles';
import axios from 'axios';
import moment from 'moment';
const server = 'http://localhost:3001'

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [like, setLike] = useState(false);
    const userId = localStorage.getItem('userId');

    let handleLike = (id) => {
    const data = {
        userId: userId,
        postId: id
    }
        like ? 
        axios.post(`${server}/posts/unlike/`, data).then(res => {
            const postLike = res.data.unlike;
            console.log(postLike);
            setLike(false);
            console.log(like);
        })
        :
        axios.post(`${server}/posts/like/`, data).then(res => {
            const postLike = res.data.like;
            console.log(postLike);
            setLike(true);
            console.log(like);
        })            
    }

    useEffect(() => {
        // get allposts
        axios.get(`${server}/posts/allposts`).then(res => {
            console.log('all posts', res.data.posts)
            setPosts(res.data.posts)
        })
    }, []);
    return (
        <PostContainer>
            {posts.map(post => {
                return (
                    <PostCard>
                        <PostHeader>
                            <ProfilePhoto>
                                <img src="/assets/images/megha.jpeg" alt="profile_photo" />
                            </ProfilePhoto>
                            <ProfileInfo>
                                <p>{post.userDetails.username}</p>
                                <span>{moment(post.updatedAt).fromNow()}</span>
                            </ProfileInfo>
                            <MoreIcon />
                        </PostHeader>
                        <PostBody>
                            <p>{post.postText}</p>
                        </PostBody>
                        <PostReactions>
                            <ReactionButton onClick={()=>{handleLike(post._id)}}>
                                <ThumbUpIcon />
                                {post.likes.length > 0
                                    ?
                                    <span>{post.likes.length} Like</span>
                                    :
                                    <span>Like</span>
                                }
                            </ReactionButton>
                            <ReactionButton>
                                <CommentIcon />
                                <span>Comment</span>
                            </ReactionButton>
                        </PostReactions>
                    </PostCard>
                )
            })}
        </PostContainer>
    );
}

export default Posts;