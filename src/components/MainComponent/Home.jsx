import React, { useRef, useState } from "react";
import Waves from "./Waves";
import nameTag from "../img/NT15.png";
import { TextField, Button } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import ReactRoundedImage from "react-rounded-image";
import { width } from "@mui/system";

const Home = () => {
  const filePicker = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  const [urlImage, setUrlImage] = useState("");
  const addImage = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setUrlImage(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };
  return (
    <div className="Container_home">
      <div className="home">
        <div className="image">
          <img src={nameTag} alt="" width={250} height={300} />
          {imageToPost ? (
            <div className="rounded_Image">
              <ReactRoundedImage
                image={imageToPost}
                roundedColor="#f8f9fa"
                imageWidth="120"
                imageHeight="120"
                roundedSize="13"
                borderRadius="70"
              />
            </div>
          ) : (
            <div
              className="custom__Upload"
              onClick={() => filePicker.current.click()}
            >
              <Button
                variant="outlined"
                color="primary"
                endIcon={<AddAPhotoIcon />}
              >
                Upload
              </Button>
              <input type="file" onChange={addImage} hidden ref={filePicker} />
            </div>
          )}
        </div>
      </div>
      <div className="waves">
        <Waves />
      </div>
      {/* inputan */}
      <div className="text_Field">
        <TextField id="outlined-basic" label="Your Name" variant="standard" />
      </div>
    </div>
  );
};
[];

export default Home;
