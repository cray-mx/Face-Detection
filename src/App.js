import './App.css';
import Logo from './components/logo.js'
import ImageLinkForm from './components/imageLinkForm';
import Particles from 'react-particles-js'
import { Component } from 'react';
import Clarifai from 'clarifai';
import FaceRecognition from './components/faceRecognition';

const app = new Clarifai.App({
  apiKey: 'ec7bfde907114b6fb90c78e37639ef1c'
})

const particlesProperties = {

  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 850
      }
    },
    color: {
      value: '#5126dc'
    }
  }
}


class App extends Component {

  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      boxes: []
    }
}

  calculateFace = (Response) => {

      const clarifaiFace = [];
      const outputs = Response.outputs[0].data.regions;
      outputs.forEach((output) => {
          clarifaiFace.push(output.region_info.bounding_box);
      })
      const image = document.getElementById('imageId');
      const width = Number(image.width);
      const height = Number(image.height);
      return clarifaiFace.map(face => {

        return{
          leftCol: face.left_col * width,
          topRow: face.top_row * height,
          rightCol: width - (face.right_col * width),
          bottomRow: height - (face.bottom_row * height)
        }
  })
}

  displayBox = (box_array) => {
      this.setState({boxes: box_array})
  }


  onInputChange = (event) => {
     this.setState({
       input: event.target.value
     })
  }

  onDetectClick = () => {

    this.setState({
      imageUrl: this.state.input
    })

    app.models
    .predict(Clarifai.FACE_DETECT_MODEL,          
      this.state.input)
      .then(response => this.displayBox(this.calculateFace(response)))
      .catch(err => console.log(err));
  }

  render(){
    return (
      <div className="App">
        <Particles 
        className="particles" 
        params={particlesProperties} />
        <Logo />
        <ImageLinkForm 
        change={this.onInputChange} 
        click={this.onDetectClick}/>
        <FaceRecognition imageUrl={this.state.input} boxes={this.state.boxes}/>
      </div>
    );
  }
}

export default App;
