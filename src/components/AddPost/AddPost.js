import React, { useState } from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { AddPostContainer, PhotoAndInput, AddPostButtons, Post } from './AddPost.styles'
import axios from 'axios'
const server = 'http://localhost:3001'

const AddPost = () => {
    const validate = Yup.object({
        textPost: Yup.string()
            .required('Please enter anything on your mind')
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
                    postText: values.textPost
                }
                values.textPost = ''
                axios.post(`${server}/posts/textPost`, post).then(res => {
                    console.log(res.data.post)
                    document.getElementById('textPost').value = ''
                }).catch(err => {
                    console.log(err)
                })
            })}
        >
            {formik => (
                <AddPostContainer>
                    <PhotoAndInput as={Form}>
                        <img src="/assets/images/megha.jpeg" alt="Megha" />
                        <input
                            type="text"
                            id="textPost"
                            name="textPost"
                            placeholder="What's on your mind?"
                            onChange={formik.handleChange}
                            value={formik.values.textPost}
                        />
                        <button type="submit">Post</button>
                        {console.log(formik.values)}
                    </PhotoAndInput>
                    <ErrorMessage name="textPost" component="div" style={{ color: 'red', alignSelf: 'center' }} />
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


