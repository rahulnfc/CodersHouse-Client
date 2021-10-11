import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  AddPostContainer,
  PhotoAndInput,
  AddPostButtons,
  Post,
} from "./AddPost.styles";
import axios from "axios";
import ModalComp from "../../components/Modal/Modal";
const server = "http://localhost:3001";

const AddPost = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const validate = Yup.object().shape({
    textPost: Yup.string().required("Please enter anything on your mind"),
  });
  return (
    <Formik
      initialValues={{ textPost: "" }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
        const userId = localStorage.getItem("userId");
        const post = {
          userId: userId,
          postText: values.textPost,
        };
        values.textPost = "";
        axios
          .post(`${server}/posts/textPost`, post)
          .then((res) => {
            console.log(res.data.post);
            document.getElementById("textPost").value = "";
          })
          .catch((err) => {
            console.log(err);
          });
      }}
    >
      {(formik) => (
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
          </PhotoAndInput>
          <ErrorMessage
            name="textPost"
            component="div"
            style={{ color: "red", alignSelf: "center" }}
          />
          <AddPostButtons>
            <Post onClick={handleOpen} key="imagePost">
              <img src="/assets/images/gallery.png" alt="Gallery" />
              <p>Gallery</p>
            </Post>
            <Post onClick={handleOpen} key="videoPost">
              <img src="/assets/images/video-camera.png" alt="VideoCamera" />
              <p>Video</p>
            </Post>
            <Post onClick={handleOpen} key="eventPost">
              <img src="/assets/images/calendar.png" alt="Calendar" />
              <p>Event</p>
            </Post>
            <Post onClick={handleOpen} key="articlePost">
              <img src="/assets/images/article.png" alt="Article" />
              <p>Article</p>
            </Post>
          </AddPostButtons>
          <ModalComp
            title="Post Images"
            open={open}
            handleClose={handleClose}
          ></ModalComp>
        </AddPostContainer>
      )}
    </Formik>
  );
};

export default AddPost;
