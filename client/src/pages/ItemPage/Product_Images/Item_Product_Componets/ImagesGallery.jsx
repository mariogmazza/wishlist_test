import React, { Component } from "react";
import ImgGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import MediaQuery from "react-responsive";

class ImagesGallery extends Component {
  render() {
    const images = [
      {
        id: 1,
        original: "http://via.placeholder.com/1000x600",
        thumbnail: "http://via.placeholder.com/250x150"
      },
      {
        id: 2,
        original: "http://via.placeholder.com/1000x600",
        thumbnail: "http://via.placeholder.com/250x150"
      },
      {
        id: 3,
        original: "http://via.placeholder.com/1000x600",
        thumbnail: "http://via.placeholder.com/250x150"
      }
    ];

    return (
      <MediaQuery maxWidth={760}>
        {matches => {
          if (matches) {
            return (
              <div>
                <ImgGallery
                  items={images}
                  showPlayButton={false}
                  showBullets={true}
                  showThumbnails={false}
                />
              </div>
            );
          } else {
            return (
              <div>
                <ImgGallery
                  items={images}
                  showPlayButton={false}
                  showBullets={true}
                  thumbnailPosition={"left"}
                />
              </div>
            );
          }
        }}
      </MediaQuery>
    );
  }
}

export default ImagesGallery;
