import React, { Fragment } from "react";
import {useState} from 'react';
import GSexpense from "./GSexpense";
import GSshop from "./GSshop";
import GSchat from "./GSchat";
import GSmeals from "./GSmeals";
import GSquiz from "./GSquiz";
import GSback from "./GSback";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";

function GetStarted() {
    const [openQuiz, setOpenQuiz]= useState(false);
    const [openExpense, setOpenExpense]= useState(false);
    const [openMeals, setOpenMeals]= useState(false);
    const [openShop, setOpenShop]= useState(false);
    const [openChat, setOpenChat]= useState(false);
    const [openBack, setOpenBack]= useState(false);

    function ChatClose(){
        setOpenChat(false);
        setOpenBack(false);
    }
    function ShopClose(){
        setOpenShop(false);
        setOpenBack(false);
    }
    function MealClose(){
        setOpenMeals(false);
        setOpenBack(false);
    }
    function ExpenseClose(){
        setOpenExpense(false);
        setOpenBack(false);
    }
    function QuizClose(){
        setOpenQuiz(false);
        setOpenBack(false);
    }

    return (
        <Fragment className="getFull">
        <Helmet>
            <title>Getting Started</title>
        </Helmet>
        <GSback open={openBack} onClose={()=> setOpenBack(false)}/>
            <header>
                <img src="assets/images/pexels-uzunov-rostislav-10458835.jpg" class="banner" />
                    <div class="logo">GETTING STARTED</div>
            </header>
            <div>

                <section class="timeline-section">
                    <div class="timeline-items">
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <a href="https://docs.flutter.dev/get-started/learn-more" target="_blank" rel="noopener noreferrer">
                                <button class="timeline-content" data-aos="fade-up">
                                    <h3>Important Flutter Docs Section</h3>
                                </button>
                            </a>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <a href="https://youtu.be/fmPmrJGbb6w" target="_blank" rel="noopener noreferrer">
                                <button class="timeline-content" data-aos="fade-up">
                                    <h3>Free Course on Youtube</h3>
                                </button>
                            </a>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <button class="timeline-content" data-aos="fade-up" onClick={() => {setOpenQuiz(true);setOpenBack(true)}}>
                                <h3>Project 1: Simple Quiz App</h3>
                            </button>
                            <GSquiz open={openQuiz} onClose={QuizClose}/>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <button class="timeline-content" data-aos="fade-up" onClick={() => {setOpenExpense(true);setOpenBack(true)}}>
                                <h3>Project 2: Expense Tracker App</h3>
                            </button>
                            <GSexpense open={openExpense} onClose={ExpenseClose}/>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <button class="timeline-content" data-aos="fade-up" onClick={() => {setOpenMeals(true);setOpenBack(true)}}>
                                <h3>Project 3: Meals App</h3>
                            </button>
                            <GSmeals open={openMeals} onClose={MealClose} />
                        </div>

                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <button class="timeline-content" data-aos="fade-up" onClick={() => {setOpenShop(true); setOpenBack(true)}}>
                                <h3>Project 4: Shop App</h3>
                            </button>
                            <GSshop open={openShop} onClose={ShopClose}/>
                        </div>

                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <button class="timeline-content" data-aos="fade-up" onClick={() => {setOpenChat(true); setOpenBack(true)}}>
                                <h3>Final: Chat App</h3>
                            </button>
                            <GSchat open={openChat} onClose={ChatClose}/>
                        </div>
                    </div>
                <Link to="/roadmap" >
                    <button className="foot-button">
                        <h3>Back To Roadmap</h3>
                    </button>
                </Link>
                </section>
                <p class="foot">website by <a href="https://github.com/shreeyachatzz" target="_blank" rel="noopener noreferrer">shreeya chatterji</a></p>
            </div>
            <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
            <script src="style.js"></script>
        </Fragment>
    )
}

export default GetStarted;