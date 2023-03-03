import React from 'react';
import img1 from './images/img5.jpeg';
import img2 from './images/img2.jpeg';
import img4 from './images/img4.jpeg';
import img3 from './images/img3.jpeg';
import './App.css';
export default function footer() {
    return (
        <div class="">
            <div class="container mr-4">
                <h1 class="text-dark">We create stories.</h1>
                <p class="text-dark">A killer narrative will turn your readers into raving fans.</p>
                <h3>__</h3>
            </div>

            <div class="container mt-5 mr-5">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card border-0">
                            <div class="card-body">
                                <img src={img1} class="img-fluid" alt="" />
                                <h6 class="card-title mt-3">OVERCOMING CREATIVE BLOCK</h6>
                                <p class="lead fs-6">Brian Gardner May 1,2017</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mt-3 ml-3">
                        <div class="card border-0">
                            <img src={img2} class="img-fluid" alt="" />
                            <div class="card-body">
                                <h6 class="card-title mt-3">WHY COMMUNICATION IS KEY</h6>
                                <p class="lead fs-6">Brian Gardner May 1,2017</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mt-5 mr-5 mb-5">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card border-0">
                            <div class="card-body">
                                <img src={img4} class="img-fluid" alt="" />
                                <h6 class="card-title mt-3">THE PATH OF LEAST RESISTANCE</h6>
                                <p class="lead fs-6">Brian Gardner May 1,2017</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mt-3 ml-3">
                        <div class="card border-0">
                            <img src={img3} class="img-fluid" alt="" />
                            <div class="card-body">
                                <h6 class="card-title mt-3">HOW TO REACH NEW HEIGHTS</h6>
                                <p class="lead fs-6">Brian Gardner May 1,2017</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg" style={{backgroundColor:"#1da1f2"}}>
                <div class="mx-auto mt-4 mb-4">
                    <h7 class="text-white text-center">Hit the ground running a minimalist look.</h7>
                    <button class="btn btn-white text-dark bg-white ml-3">LEARN MORE</button>
                </div>
            </nav>
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                <div class="mx-auto mt-3">
                    <h1 class="text-white text-center fs-3">M</h1>
                    <h7 class="text-white text-center ml-5">Handcrafted with🤍in Chicago.Powered by StudioPress</h7>
                    <p class="text-white text-center ml-5 mt-3 fs-6 md-3">FACEBOOK--TWITTER--INSTAGRAM</p>
                </div>
            </nav>
        </div>
    )
}