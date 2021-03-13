import React from 'react';
import './App.css';
import Colors from './components/Colors' //File for color options for the product
import Sizes from './components/Sizes'; //File for sizes of the products
import ProductDetails from './components/ProductDetails'; //File for products' details
import DetailsThumb from './components/DetailsThumb'; //File for thumbnails for the products

class App extends React.Component{

  //Dummy product info to reflect on the ui
  state = {
    products: [
      {
        "_id": "1",
        "title": ["Tiger Medium Red",
        "Tiger Black",
        "Tiger Grey",
        "Tiger White",
        "Tiger Teal"
      ],
        "src": [
            "https://i.ibb.co/JpH9JS7/module-01-red.jpg",
            "https://i.ibb.co/Xy5MWt6/module-02-black.jpg",
            "https://i.ibb.co/47XcDLD/module-03-grey.jpg",
            "https://i.ibb.co/tzgH3Nh/module-04-white.jpg",
            "https://i.ibb.co/Jp4vwZZ/New-Project-21.jpg"
          ],
        "description": "DESCRIPTION",
        "content": ["Opt for a bold look with this T-shirt. With its iconic Tiger print on the chest, it is sure to turn heads. Pair it with jogging trousers and sneakers for a casual sportswear look."],
        "content2": ["Short sleeved t-shirt", "Round neck", "Tiger embroidered on the chest"],
        "price": [250, 200, 235, 260, 220],
        "colors":["#ca2630","#262626","#8b8f90","#ffffff","#014c4a"],
        "sizes":["S","M","L","XL"],
        "count": 1
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  //Code to switch between the selected colors/products
  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }

  //Code that renders the ui
  render(){
    const {products, index} = this.state;
    return(
      <div className="app">
        <div className="logo">
        <img src="https://i.ibb.co/Lrxyc96/logo.jpg"/>
        </div>
        <nav>
          <ul><li>WOMEN</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li>MEN</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li>KIDS</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li>FTW</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li>ACCESSORIES</li></ul>
        </nav>
        {
          products.map(item =>(
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]}  alt=""/>
              </div>
              <div className="box">
                <div className="row">
                  <h2>{item.title[index]}</h2>
                </div>
                <p>AED {item.price[index]}</p>

                <p className="sub-title">Available Sizes: <Sizes sizes={item.sizes}/></p>

                <p className="sub-title">Colors:</p>
                <Colors colors={item.colors} tab={this.handleTab} myRef={this.myRef} />

                <button className="cart">Add to cart</button>

                <p className="description">{item.description}</p>
                <p className="content">{item.content}</p>
                <p className="content"><ProductDetails productdetails={item.content2}/></p>

                <p className="divider"></p>
                <p className="description">SEE MORE PRODUCTS:</p>
                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />

              </div>
            </div>
          ))
        }
      </div>
    );
  };
}

export default App;
