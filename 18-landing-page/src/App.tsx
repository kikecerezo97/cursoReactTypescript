import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {NavBar} from "./componentes/nav-bar/NavBar";
import chat from '../src/assets/img/store-chat-specialist-icon.jpeg'
import message from '../src/assets/img/message.jpeg'
import mac from '../src/assets/img/store-card-13-mac-nav-202203.png'
import iphone from '../src/assets/img/store-card-13-iphone-nav-202109.png'
import ipad from '../src/assets/img/store-card-13-ipad-nav-202108.png'
import watch from '../src/assets/img/store-card-13-watch-nav-202203_GEO_MX.png'
import airpods from '../src/assets/img/store-card-13-airpods-nav-202110.png'
import airtags from '../src/assets/img/store-card-13-airtags-nav-202108.png'


import {ProductCard} from "./componentes/product-card/ProductCard";
import {BubbleHeader} from "./componentes/bubble-header/BubbleHeader";

function App() {
  useEffect(() => {
      document.title ='Apple Store Online - Apple (MX)';
  })

  return (
    <>
      <NavBar/>
        <div className="container-fluid" id="app">
            <div className="container text-center" id="banner">
                Aprovecha los meses sin intereses. Compra tus productos Apple
                favoritos y elige uno de nuestros socios de pagos a meses para
                escoger el periodo de<br/> pago que prefieras. &nbsp;
                <a className="text-primary"
                   href="https://www.apple.com/mx/shop/browse/finance/installment">
                    Más información <i className="bi bi-chevron-right"></i>
                </a>

            </div>
            <div className="row" id="header-seccion">
                <div className="col-md-7">
                    <span className="header">Tienda</span>
                    <span className="sub-header">.La mejor forma de<br/> comprar tus
                        productos<br/> favoritos.</span>

                </div>
                <div className="col-md-5">

                    <BubbleHeader titulo={"¿Necesitas Ayuda?"}
                                  subtitulo={"Habla con un especialista"}
                                  url={"https://contactretail.apple.com/Solutions"}
                                  imagen={chat}
                                  flechaDerecha={false}/>

                    <BubbleHeader titulo={"Visita un Apple Store"}
                                  subtitulo={"Encuentra uno cerca de ti"}
                                  url={"https://www.apple.com/mx/retail/"}
                                  imagen={message}
                                 flechaDerecha={true}/>

                </div>
            </div>
            <div id="card-products">
                <div className="row">
                    <ProductCard
                        titulo={"Mac"}
                        imagen={mac}
                        url={"https://www.apple.com/mx/shop/buy-mac"}/>

                    <ProductCard
                        titulo={"iphone"}
                        imagen={iphone}
                        url={"https://www.apple.com/mx/shop/buy-iphone"}/>

                    <ProductCard
                        titulo={"IPad"}
                        imagen={ipad}
                        url={"https://www.apple.com/mx/shop/buy-ipad"}/>

                    <ProductCard
                        titulo={"Apple Watch"}
                        imagen={watch}
                        url={"https://www.apple.com/mx/shop/buy-watch"}/>

                    <ProductCard
                        titulo={"Airpods"}
                        imagen={airpods}
                        url={"https://www.apple.com/mx/airpods/"}/>

                    <ProductCard
                        titulo={"AirTag"}
                        imagen={airtags}
                        url={"https://www.apple.com/mx/airtag/"}/>

                </div>

            </div>


        </div>
    </>
  );
}

export default App;
