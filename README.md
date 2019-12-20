
# React Easy Slider

**__react-easy-slider__** is a light weight and simple react component for an image slider. 


## Why is **__react-easy-slider__** the best choice for your project?
This package stands out from other slider components in react because: 
1. It is very lightweight and easy to implement.
3. It is customizable. Using props, You can set the orientation with minimum code changes.

## Install     
npm
```bash
npm install @hileets/react-easy-slider
```
yarn
```bash
yarn add @hileets/react-easy-slider
```



## Usage

---

First of all, import the package into your class file
```javascript
import Carousel from “@hileets/react-easy-slider”;
```

To add the slider to you page just add the following line where you want the slider.
```javascript
 <Carousel images={images}> </Carousel>
```
The component requires you to pass an array of images.
```javascript
images = [
   { url: “https://via.placeholder.com/600/92c952” },
   { url: “https://via.placeholder.com/600/771796” }
  ];
  ```



#### Customization
__By default the Slider's orientation is Horizontal__ but you can change it to Vertical by setting the `orientation` to  `vertical` in the Props
```javascript
 <Carousel images={images} orientation={“vertical”}>  </Carousel>
 ```



## Contribution
Issues and pull requests are welcome at https://github.com/hileets/react-easy-slider

 















