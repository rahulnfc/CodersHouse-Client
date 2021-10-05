import React from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { AddPostContainer, PhotoAndInput, AddPostButtons, Post } from './AddPost.styles'
import axios from 'axios'
const server = 'http://localhost:3001'

const AddPost = () => {
    const validate = Yup.object({
        textPost: Yup.string()
            .min(5, 'Post must be at least 5 characters long')
            .max(255, 'Post must be less than 255 characters long')
            .required('Post is required'),
    })
    return (
        <Formik
            initialValues={{ textPost: '' }}
            validationSchema={validate}
            onSubmit={(values => {
                console.log(values)
                const userId = localStorage.getItem('userId')
                const post = {
                    userId: userId,
                    textPost: values.textPost
                }
                console.log(post)
                axios.post(`${server}/posts/textPost`, post).then(res => {
                    console.log(res.data)
                }).catch(err => {
                    console.log(err)
                })
            })}
        >
            {formik => (
                <AddPostContainer>
                    <PhotoAndInput>
                        <img src="/assets/images/megha.jpeg" alt="Megha" />
                        <Form>
                            <input
                                type="text"
                                id="textPost"
                                name="textPost"
                                placeholder="What's on your mind?"
                                onChange={formik.handleChange}
                                value={formik.values.textPost}
                            />
                            <ErrorMessage name="textPost" component="div" style={{ color: 'red' }} />
                            <button type="submit">Post</button>
                        </Form>
                        {console.log(formik.values)}
                    </PhotoAndInput>
                    <AddPostButtons>
                        <Post>
                            <img src="/assets/images/gallery.png" alt="Gallery" />
                            <p>Gallery</p>
                        </Post>
                        <Post>
                            <img src="/assets/images/video-camera.png" alt="VideoCamera" />
                            <p>Video</p>
                        </Post>
                        <Post>
                            <img src="/assets/images/calendar.png" alt="Calendar" />
                            <p>Event</p>
                        </Post>
                        <Post>
                            <img src="/assets/images/article.png" alt="Article" />
                            <p>Article</p>
                        </Post>
                    </AddPostButtons>
                </AddPostContainer>
            )}
        </Formik >
    )
}

export default AddPost


