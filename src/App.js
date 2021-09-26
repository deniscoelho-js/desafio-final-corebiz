import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';

import img_seta from './image/seta-direita.png'

class App extends React.Component{

  state = {
    images: [
      {
        "id": "1",
        "src": [
          "https://cdn.pixabay.com/photo/2016/03/09/09/22/meeting-1245776_1280.jpg",
          "https://i.imgur.com/zCejSh7.jpeg",
          "https://i.imgur.com/f72IpsS.jpeg",
          "https://i.imgur.com/39zBGgY.jpeg"
        ],
        "description": [
          "accusamus beatae ad facilis cum similique qui...",
          "reprehenderit est deserunt velit ipsam",
          "officia porro iure quia iusto qui ipsa ut modi",
          "culpa odio esse rerum omnis laboriosam..."
        ]
      }
    ],
    index: 0
  }

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const tabImages = this.myRef.current.children
    for(let i =0; i<tabImages.length; i++){
      tabImages[i].className = tabImages[i].className.replace("active", "")
    }
    tabImages[index].className = "active";
  }

  render(){

    const {images, index} = this.state;
    

    return(

      
      <>
      <div className="app">

        <Header />        

        {
          images.map(item=>(
            <div className="details" key={item.id}>

              <div className="box">
                  <h2>{item.description[index]}</h2>
                  <a className="seta" href="https://www.corebiz.ag/pt/">veja mais  <img src={img_seta} alt=""  /> </a>
                  {/* <button>veja mais</button> */}
                  <div className="thumb" ref={this.myRef}>
                      {
                        item.src.map((img, index) =>(
                          <img src={img} alt="" key={index} 
                          onClick={()=>this.handleTab(index)}
                          />
                        ))
                      }
                  </div>
              </div> 
                <div className="big-image">
                  <img src={item.src[index]} alt="" />
                </div>              
            </div>
          ))
        }

      </div>
        <Footer/>

      </>
    )
  }
}

export default App;
