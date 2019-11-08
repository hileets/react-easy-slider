import React from 'react';
// import Dialog from 'material-ui/Dialog';
// import FlatButton from 'material-ui/FlatButton';
import CarouselSlide from './carousel-slide';
import CarouselControl from './carousel-control';
// import VideoPlayer from '../../Common/VideoPlayer';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    // this.slideChange = this.slideChange.bind(this);
    // this.openImage = this.openImage.bind(this);

    this.state = {
      currentSlide: 0,
      isLeftDisabled: true,
      isRightDisabled: this.props.images.length > 1 ? 'true' : 'false'
    };
  }

  slideChange = (newCurrentSlide) => {
    let isLeftDisabled = newCurrentSlide === 0;
    let isRightDisabled = newCurrentSlide === this.props.images.length - 1;
    this.setState({
      isLeftDisabled: isLeftDisabled,
      isRightDisabled: !isRightDisabled,
      currentSlide: newCurrentSlide
    });
  };

  openImage = () => {
    this.setState({ popupImage: true });
  };

  render() {
    const { images, title, orientation } = this.props;

    return (
      <div
        className="carousel"
        style={{ height: "inherit", display: 'flex', flexDirection: orientation == "vertical" ? "row" : 'column-reverse' }}
      >
        <CarouselControl
          handleSlideChange={this.slideChange}
          images={images}
          totalSlides={images.length}
          currentSlide={this.state.currentSlide}
          isLeftDisabled={this.state.isLeftDisabled}
          isRightDisabled={this.state.isRightDisabled}
          orientation={orientation}
        />
        <ul className="slides list-unstyled">
          {images.map(
            (image, index) => (
              <CarouselSlide
                key={`slide- + ${index}`}
                image={image.url}
                // mediaType={image.type}
                image={image}
                index={index}
                openImage={this.openImage}
                selectedImage={images[this.state.currentSlide].url}
                currentSlide={this.state.currentSlide}
              />
            ),
            this
          )}
        </ul>
        {/* <Dialog
          actions={actionsImg}
          modal={false}
          open={this.state.popupImage}
          contentStyle={customContentStyleImgWidget}
          onRequestClose={() => self.setState({ popupImage: false })}
        >
          <div style={{ display: 'flex', height: '450px' }}>
            <figure
              className="workflow-widgets-image-container"
              style={{ flexGrow: 1, height: '100%', width: '100%' }}
            >
              {images.length &&
              images[this.state.currentSlide].type.match('video') ? (
                images[this.state.currentSlide].flag.match('url') ? (
                  <VideoPlayer url={images[this.state.currentSlide].url} isMarketplace={true} />
                ) : (
                  <video
                    controls
                    src={
                      images.length ? images[this.state.currentSlide].url : ''
                    }
                    className="workflow-widgets-image"
                    style={{
                      maxWidth: '95%',
                      maxHeight: '100%',
                      'background-repeat': 'unset'
                    }}
                  />
                )
              ) : (
                <img
                  src={images.length ? images[this.state.currentSlide].url : ''}
                  className="workflow-widgets-image"
                  style={{
                    maxWidth: '95%',
                    maxHeight: '100%'
                  }}
                  alt=""
                />
              )}
            </figure>
            <div style={{ flexBasis: '25%', maxWidth: '300px' }}>
              <p style={{ fontSize: '19px', textTransform: 'capitalize' }}>
                <strong>{title}</strong>
              </p>
              <CarouselControl
                handleSlideChange={this.slideChange}
                images={images}
                totalSlides={images.length}
                currentSlide={this.state.currentSlide}
                orientation="vertical"
                isLeftDisabled={this.state.isLeftDisabled}
                isRightDisabled={this.state.isRightDisabled}
              />
            </div>
          </div>
        </Dialog> */}
      </div>
    );
  }
}

export default Carousel;
