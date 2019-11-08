import React from "react";
// import { Player } from "video-react";
// import VideoPlayer from "../../Common/VideoPlayer";

export class CarouselProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.image
    };
  }

  // getVideoThumbnail = url => {
  //   let vimeoApiUrl = "https://vimeo.com/api/oembed.json?url=" + url;
  //   this.vimeoApiCall(vimeoApiUrl);
  // };

  // vimeoApiCall = vimeoApiUrl => {
  //   $.getJSON(vimeoApiUrl).then(
  //     data => {
  //       let image = this.state.image;
  //         image.videoUrl = data.thumbnail_url_with_play_button;
  //         this.setState({ image: image });
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // };

  componentDidMount() {
    const { image } = this.props;
    // if (image.url.match("vimeo")) {
    //   this.getVideoThumbnail(image.url);
    // }
  }

  render() {
    const { index } = this.props;
    const { image } = this.state;
    return (
      <a
        tabIndex="-1"
        href="javascript:void(0)"
        style={{ height: "100%", width: '100%', outline: 'none' }}
        onClick={this.props.slideChange.bind(null, index)}
      >
        <li key={`slide-' + ${index}`} className={this.props.className(index)}>
          {/* <span className="video-transparent-overy"> */}

          <img src={image.url} alt="" />
          {/* </span> */}
        </li>
      </a>
    );
  }
}

export default CarouselProduct;
