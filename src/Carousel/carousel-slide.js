import React from 'react';
// import { Player } from 'video-react';
// import VideoPlayer from '../../Common/VideoPlayer';

class CarouselSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popupImage: false,
      imageUrl: ''
    };
  }

  render() {
    const { image, index, currentSlide } = this.props;
    const activeClassName = index === currentSlide ? 'is-active' : null;
    const liStyles = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    };
    return (
      <React.Fragment>
        <span className="video-transparent-overlay">
          <li className={activeClassName} style={{ ...liStyles }}>
            <img
              src={image.url}
              alt=""
              style={{ height: 'auto', maxHeight: '100%' }}
              onClick={() => this.props.openImage(image.url, image.type)}
            />

          </li>
        </span>
      </React.Fragment>
    );
  }
}

export default CarouselSlide;
