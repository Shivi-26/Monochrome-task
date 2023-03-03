import React from 'react';
import img1 from './images/M.jfif'
import img2 from './images/search.jpeg'
import Footer from './footer';
import './App.css';
export default function App() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <img src={img1} width="30" height="22" class="d-inline-block img-fluid align-top ml-5" alt="" />
                <ul class="d-flex ml-auto">
                    <li class="nav-item list-inline mr-4">
                        <a class="nav-link" href="/">Sample</a>
                    </li>
                    <li class="nav-item list-inline mr-4">
                        <a class="nav-link" href="/Features">Features</a>
                    </li>
                    <li class="nav-item list-inline mr-4">
                        <a class="nav-link" href="/Layouts">Layouts</a>
                    </li>
                    <li class="nav-item list-inline mr-4">
                        <a class="nav-link" href="/Our Shop">Our Shop</a>
                    </li>
                    <li class="nav-item list-inline mr-4">
                        <a class="nav-link" href="Buy Themes">Buy Theme</a>
                    </li>
                    <li class="nav-item list-inline mr-4">
                        <img src={img2} width="28" height="25" class="d-inline-block img-fluid align-top mr-3" alt="" />
                    </li>
                </ul>
            </nav>
            <div class="jumbotron img-jmbo">
                <div class="container">
                    <h1 class="mt-5 text-white ml-3">We crush <br /> minimal <br /> design.</h1>
                    <p className="text-white ml-3">MONOCHROME is a creative agency based in Chicago. We <br /> developed the Genesis and build mobile-optimized <br /> themes for WordPress.</p>
                </div>
            </div>

            <div class="container mt-5">
                <h1 class="mt-5 ml-4">We build experience.</h1>
                <p class="ml-4">A minimalist approach is the only way to design a website.</p>
                <h3 class="ml-4">__</h3>
            </div>

            <div class="container mt-5">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card border-0">
                            <div class="card-body">
                                <h4 class="card-title ml-3">DESIGN</h4>
                                <p class="lead ml-3">With an emphasis on <br />typography,white space, and <br /> mobile-optimized design, your website will look absolutely <br /> breathtalking.</p>
                                <button class="btn btn-dark text-white mt-3 ml-3">LEARN MORE</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card border-0">
                            <div class="card-body">
                                <h4 class="card-title ml-3">CONTENT</h4>
                                <p class="lead ml-3">Our team will teach you the art <br />of writing audience-focused <br />content that will help you <br />achieve the success you truly <br />deserve.</p>
                                <button class="btn btn-dark text-white mt-3 ml-3">LEARN MORE</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card border-0">
                            <div class="card-body">
                                <h4 class="card-title">STRATEGY</h4>
                                <p class="lead">We help creative entrepreneurs<br />build their digital business by<br />focusing on three key elements<br />of a successful online platform.</p>
                                <button class="btn btn-dark text-white mt-3">LEARN MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="jumbotron img-jmbo mt-5">
                <div class="container">
                    <h1 class="mt-3 text-white ml-5">We design brands.</h1>
                    <p className="text-white ml-5">A simple look is all you need to crush your competition.</p>
                    <h3 class="mt-3 text-white ml-5">__</h3>
                    <div class="mt-5 d-flex ml-5">
                        <i class="text-white">lesavenirs</i>
                        <i class="text-white ml-5">avec'simple</i>
                        <p class="text-white ml-5">WHITESPACE</p>
                        <p class="text-white ml-5">m*n*mal*sm</p>
                        <h7 class="text-white ml-5" style={{fontFamily:"Libre Baskerville"}}>barcelona33</h7>
                        <p class="text-white ml-5">smoothVANILLA</p>
                    </div>
                </div>
            </div>

             <div class="row mt-5">
                <Footer/>
             </div>
        </div >
    )
}
