import React, { useState } from "react";
import CameraAlt from "@material-ui/icons/CameraAlt";
import { Input, InputFile, Image, ImagePostContainer, Preview, Error, Close } from "./ImagePost.styles";
import { Button } from "rsuite";
import axios from "axios";
import FormData from "form-data";
const server = "http://localhost:3001";

const ImagePost = () => {
  const [image, setImage] = useState([]);
  const [limit, setLimit] = useState(false);
  const [typeError, setTypeError] = useState(false);
  const [noImage, setNoImage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (image.length === 0) {
      return setNoImage(true);
    }
    console.log(image, e.target.textPost.value);
    const userId = localStorage.getItem("userId");
    let formData = new FormData();
    formData.append("userId", userId);
    formData.append("textPost", e.target.textPost.value);
    for (const file of image) {
      formData.append("image", file);
    }
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
    } else if (e.target.files[0].type !== "image/jpeg" && e.target.files[0].type !== "image/png") {
      setTypeError(true);
    } else {
      Array.from(e.target.files).forEach((file) => {
        setLimit(false);
        setTypeError(false);
        setNoImage(false);
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
      {noImage && <Error>You must upload at least one image</Error>}
      <Input type="text" name="textPost" placeholder="Add caption" />
      <Button type="submit" appearance="primary">
        Post
      </Button>
    </form>
  );
};

export default ImagePost;
