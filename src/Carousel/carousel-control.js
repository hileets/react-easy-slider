import React from 'react';
import CarouselProduct from './carousel-product';
import './_carousel.scss';


class CarouselControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      controlWidth: '',
      controlOffset: 0,
      showControls: true,
      images: this.props.images,
      is: this.props.isRightDisabled
    };
  }

  componentWillReceiveProps = newProps => {

    const width = newProps.totalSlides * this.thumbWidth();
    this.setState({
      controlWidth: width
    });
  };

  getControlOffset = index => {
    let thumbWidth = this.thumbWidth();

    let offset = -(index * thumbWidth);

    let isSecondToFirst = index === -1;
    let isSecondToLast = index === this.props.totalSlides - 2;

    // alert(offset)
    if (isSecondToFirst || isSecondToLast) {
      return false;
    }

    return offset;
  };

  isActiveSlide = index => {
    return index === this.props.currentSlide;
  };

  className = index => {
    if (this.isActiveSlide(index)) return 'is-active';
  };

  slideNext = () => {
    this.slideChange(this.props.currentSlide + 1);
  };

  slidePrev = () => {
    this.slideChange(this.props.currentSlide - 1);
  };

  slideChange = index => {
    this.props.handleSlideChange(index);
    this.setState({
      controlOffset: this.props.orientation == 'vertical' ? this.getControlOffset(index - 1) : this.getControlOffset(index / 2)
      // controlOffset: this.getControlOffset(index / 2)

    });
  };

  thumbWidth = () => 66;

  render() {
    const { orientation } = this.props;
    const { images } = this.state;
    const firstClassName = this.props.isLeftDisabled ? 'is-first' : '';
    const lastClassName = this.props.isRightDisabled ? 'is-last' : '';

    const className = ['controls', firstClassName, lastClassName].join(' ');

    var style = {}
    if (orientation === 'vertical') {
      style = {
        // width: this.state.controlWidth,
        transform: `translateY(${this.state.controlOffset}px)`,
        WebkitTransition: 'transform .25s ease-in-out',
        padding: 0,
        display: 'flex',
        flexDirection: 'column'
      };
    } else {
      style = {
        // width: this.state.controlWidth,
        transform: `translateX(${this.state.controlOffset}px)`,
        WebkitTransition: 'transform .25s ease-in-out',
        padding: 0,
        display: 'flex',
        flexDirection: 'row',
        width: 'max-content'
      };
    }

    // const style = {
    //   // width: this.state.controlWidth,
    //   transform: `translateY(${this.state.controlOffset}px)`,
    //   WebkitTransition: 'transform .25s ease-in-out',
    //   padding: 0,
    //   display: 'flex'
    // };

    return (
      <div
        className="slide-control list-inline"
        style={{
          flexDirection: orientation == 'vertical' ? 'column' : 'row', margin: 'auto', alignItems: 'center', justifyContent: 'center'
          // alignItems:
          //   orientation && orientation == 'vertical' ? 'start' : 'center'
        }}
      >
        {orientation === 'vertical' ? (
          <button
            className="btn btn-direction"
            disabled={this.props.isLeftDisabled}
            onClick={this.slidePrev}
            style={{
              width: 'fit-content',
              height: 'fit-content',
              margin: 0,
              padding: 0
            }}
          >
            <img style={{ transform: 'rotate(90deg)' }} src="https://i.ibb.co/w01HwqX/back.png" />
          </button>
        ) : <button
          className="btn btn-direction"
          style={{ flexDirection: 'row' }}
          disabled={this.props.isLeftDisabled}
          onClick={this.slidePrev}
          style={{
            width: 'fit-content',
            height: 'fit-content',
            margin: 0,
            padding: 0
          }}
        >
            <img src="https://i.ibb.co/w01HwqX/back.png" />
          </button>}
        <div className="controls-wrapper">
          <ul className={className} style={style}>
            {images.map(
              (image, index) => (
                <CarouselProduct
                  image={image}
                  index={index}
                  className={this.className}
                  slideChange={this.slideChange}
                  {...this.props}
                />
              ),
              this
            )}
          </ul>
        </div>
        {
          orientation === 'vertical' ? (
            <button
              className="btn btn-direction"

              onClick={this.slideNext}
              style={{
                width: 'fit-content',
                height: 'fit-content',
                margin: 0,
                padding: 0
              }}
              disabled={!this.props.isRightDisabled}
            >
              <img style={{ transform: 'rotate(90deg)', marginTop: '7px' }} src="https://i.ibb.co/kJX0Q9x/next.png" />
            </button>
          ) : <button
            className="btn btn-direction"
            disabled={!this.props.isRightDisabled}
            onClick={this.slideNext}
            style={{
              width: 'fit-content',
              height: 'fit-content',
              margin: 0,
              padding: 0
            }}
          >
              <img src="https://i.ibb.co/kJX0Q9x/next.png" />

            </button>
        }
      </div >
    );
  }
}

export default CarouselControl;
