import React, { useState } from "react";
import styled from "styled-components";
import CameraAlt from "@material-ui/icons/CameraAlt";
import CloseRounded from "@material-ui/icons/CloseRounded";
import { Button } from "rsuite";
import axios from "axios";
import FormData from "form-data";
const server = "http://localhost:3001";

const ImagePostContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-radius: 5px;
`;
const Image = styled.label`
  width: 5rem;
  height: 5rem;
  border: 1px dashed #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const InputFile = styled.input`
  display: none;
`;
const Preview = styled.img`
  width: 5rem;
  height: 5rem;
  margin: 1rem;
  border: 1px solid #e0e0e0;
  cursor: pointer;
`;
const Error = styled.p`
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  width: 100%;
  height: 3rem;
  margin: 1rem 0;
  border-radius: 5px;
  border: 1px solid #4f80e1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:focus {
    outline: none;
  }
`;
const Close = styled(CloseRounded)`
  margin-top: -5rem;
  margin-left: -2rem;
  background-color: #0f0f0f;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
`;
const ImagePost = () => {
  const [image, setImage] = useState([]);
  const [limit, setLimit] = useState(false);
  const [typeError, setTypeError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(image, e.target.textPost.value);
    var formData = new FormData();
    formData.append("image", image);
    formData.append("postText", e.target.textPost.value);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    try {
      const res = await axios.post(`${server}/posts/imagePost`, formData, config);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    if (image.length >= 5) {
      setLimit(true);
    } else if (e.target.files[0].type !== "image/jpeg") {
      setTypeError(true);
    } else {
      Array.from(e.target.files).forEach((file) => {
        setLimit(false);
        setTypeError(false);
        setImage([...image, file]);
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ImagePostContainer>
        <Image>
          <CameraAlt />
          <InputFile
            type="file"
            name="imagePost"
            accept="image/*"
            onChange={handleChange}
            multiple
          />
        </Image>
        {image &&
          image.map((file) => {
            return (
              <>
                <Preview src={URL.createObjectURL(file)} key={file.name} />
                <Close
                  onClick={() =>
                    setLimit(false) ||
                    setTypeError(false) ||
                    setImage(image.filter((f) => f !== file))
                  }
                >
                  X
                </Close>
              </>
            );
          })}
      </ImagePostContainer>
      {limit && <Error>You can't upload more than 5 images</Error>}
      {typeError && <Error>You can only upload images</Error>}
      <Input type="text" name="textPost" placeholder="Add caption" />
      <Button type="submit" appearance="primary">
        Post
      </Button>
    </form>
  );
};

export default ImagePost;
