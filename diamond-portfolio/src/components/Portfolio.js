import React, { useState } from 'react';
import '../styles/Content.css';
import { Image } from 'antd';
import codeQuiz from '../images/code-quiz.png';
import eCommerce from '../images/e-commerce-back-end.png';
import employeeTracker from '../images/employee-tracker.png';
import localFinds from '../images/Project1-local-finds.png';
import floridaSprings from '../images/Project2-Florida-Springs.png';
import socialNetwork from '../images/social-network-api.png';
import teamGenerator from '../images/team-generator.png';
import weatherForecast from '../images/weather-forecast.png';
import workDayScheduler from '../images/work-day-scheduler.png';
import imagePlaceholder from '../images/image-placeholder.png';

function Portfolio() {

    return (
        <>
            <h1 className='title'>Portfolio</h1>
            <div className='imageContainer'>
                {/* <Image.PreviewGroup
                    preview={{
                        onChange: (current, prev) =>
                            console.log(`current index: ${current}, prev index: ${prev}`),
                    }}
                > */}
                <a href='https://github.com/ginitadavis/Code-Quiz' target='_blank' rel='noopener noreferrer'>
                    <Image className='portfolioImage' width={200} height={200} src={codeQuiz} />
                </a>

                <a href='https://github.com/ginitadavis/Word-Day-Scheduler' target='_blank' rel='noopener noreferrer'>
                    <Image className='portfolioImage' src={workDayScheduler} />
                </a>

                <a href='https://github.com/ginitadavis/Weather-Forecast' target='_blank' rel='noopener noreferrer'>
                    <Image className='portfolioImage' src={weatherForecast} />
                </a>

                <a href='https://github.com/ginitadavis/Team-Profile-Generator' target='_blank' rel='noopener noreferrer'>
                    <Image className='portfolioImage' src={teamGenerator} />
                </a>

                <a href='https://github.com/ginitadavis/Employee-Tracker' target='_blank' rel='noopener noreferrer'>
                    <Image className='portfolioImage' src={employeeTracker} />
                </a>

                <a href='https://github.com/Jpshirey5/Local_Finds' target='_blank' rel='noopener noreferrer'>
                    <Image className='portfolioImage' src={localFinds} />
                </a>

                <a href='https://github.com/ginitadavis/E_commerce_Back_End' target='_blank' rel='noopener noreferrer'>
                    <Image className='portfolioImage' src={eCommerce} />
                </a>

                <a href='https://github.com/ginitadavis/Social-Network-API' target='_blank' rel='noopener noreferrer'>
                    <Image className='portfolioImage' src={socialNetwork} />
                </a>

                <a href='https://github.com/hmccarthy1/Trip-Planner' target='_blank' rel='noopener noreferrer'>
                    <Image className='portfolioImage' src={floridaSprings} />
                </a>

                <a href='https://github.com/ginitadavis/Tech-Blog' target='_blank' rel='noopener noreferrer'>
                    <Image className='portfolioImage' src={imagePlaceholder} />
                </a>
                {/* <Image className='portfolioImage' src={codeQuiz} /> */}








                {/* </Image.PreviewGroup> */}
            </div>
        </>
    );
}

export default Portfolio;
