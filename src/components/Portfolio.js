import React from 'react';
import '../styles/Content.css';
import { Image } from 'antd';
import codeQuiz from '../images/code-quiz.png';
import eCommerce from '../images/e-commerce-back-end.png';
import employeeTracker from '../images/employee-tracker.png';
import localFinds from '../images/Project1-local-finds.png';
import floridaSprings from '../images/Project2-Florida-Springs.jpg';
import socialNetwork from '../images/social-network-api.png';
import teamGenerator from '../images/team-generator.png';
import weatherForecast from '../images/weather-forecast.png';
import workDayScheduler from '../images/work-day-scheduler.png';
import curiousChronicles from '../images/curious-chronicles.png'
import imagePlaceholder from '../images/image-placeholder.png';
import { RocketOutlined, GithubOutlined, } from '@ant-design/icons';
import { Card } from 'antd';

function Portfolio() {

    return (
        <>
            <h1 className='title'>Portfolio</h1>



            <div className='imageContainer' style={{ display: 'flex', alignItems: 'center' }}>

                {/* Code quiz card */}

                <Card style={{ width: 300, margin: 10 }}>
                    <div className="cardTitle" style={{ alignItems: 'right' }}>Code Quiz</div>
                    <div>
                        <Image className='portfolioImage' width={200} height={200} src={codeQuiz} />
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <a href="https://ginitadavis.github.io/Code-Quiz/" target='_blank'> <RocketOutlined style={{ marginRight: 8 }} /> Deployment </a>
                            <a href="https://github.com/ginitadavis/Code-Quiz" target='_blank'> <GithubOutlined style={{ marginRight: 8, marginLeft: 8 }} /> GitHub </a>
                        </div>
                    </div>
                </Card>

                {/* Work Day Scheduler */}
                <Card style={{ width: 300, margin: 10 }}>
                    <div className="cardTitle" style={{ alignItems: 'right' }}>Work Day Scheduler</div>
                    <div>
                        <Image className='portfolioImage' width={200} height={200} src={workDayScheduler} />
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <a href="https://ginitadavis.github.io/Word-Day-Scheduler/" target='_blank'> <RocketOutlined style={{ marginRight: 8 }} /> Deployment </a>
                            <a href="https://github.com/ginitadavis/Word-Day-Scheduler" target='_blank'> <GithubOutlined style={{ marginRight: 8, marginLeft: 8 }} /> GitHub </a>
                        </div>
                    </div>
                </Card>

                {/* Weather Forecast */}
                <Card style={{ width: 300, margin: 10 }}>
                    <div className="cardTitle" style={{ alignItems: 'right' }}>Weather Forecast</div>
                    <div>
                        <Image className='portfolioImage' width={200} height={200} src={weatherForecast} />
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <a href="https://ginitadavis.github.io/Weather-Forecast/" target='_blank'> <RocketOutlined style={{ marginRight: 8 }} /> Deployment </a>
                            <a href="https://github.com/ginitadavis/Weather-Forecast" target='_blank'> <GithubOutlined style={{ marginRight: 8, marginLeft: 8 }} /> GitHub </a>
                        </div>
                    </div>
                </Card>

                {/* Local Finds */}
                <Card style={{ width: 300, margin: 10 }}>
                    <div className="cardTitle" style={{ alignItems: 'right' }}>Local Finds</div>
                    <div>
                        <Image className='portfolioImage' width={200} height={200} src={localFinds} />
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <a href="https://jpshirey5.github.io/Local_Finds/" target='_blank'> <RocketOutlined style={{ marginRight: 8 }} /> Deployment </a>
                            <a href="https://github.com/Jpshirey5/Local_Finds" target='_blank'> <GithubOutlined style={{ marginRight: 8, marginLeft: 8 }} /> GitHub </a>
                        </div>
                    </div>
                </Card>

                {/* Employee Tracker */}
                <Card style={{ width: 300, margin: 10 }}>
                    <div className="cardTitle" style={{ alignItems: 'right' }}>Employee Tracker</div>
                    <div>
                        <Image className='portfolioImage' width={200} height={200} src={employeeTracker} />
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <a href="https://drive.google.com/file/d/1aTD0u971Nic2wWYyTswJWGzdkmmq4hN4/view" target='_blank'> <RocketOutlined style={{ marginRight: 8 }} /> Deployment </a>
                            <a href="https://github.com/ginitadavis/Employee-Tracker" target='_blank'> <GithubOutlined style={{ marginRight: 8, marginLeft: 8 }} /> GitHub </a>
                        </div>
                    </div>
                </Card>

                {/* Florida Springs */}
                <Card style={{ width: 300, margin: 10 }}>
                    <div className="cardTitle" style={{ alignItems: 'right' }}>Florida Springs</div>
                    <div>
                        <Image className='portfolioImage' width={200} height={200} src={floridaSprings} />
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <a href="https://floridasprings.herokuapp.com/" target='_blank'> <RocketOutlined style={{ marginRight: 8 }} /> Deployment </a>
                            <a href="https://github.com/hmccarthy1/Trip-Planner" target='_blank'> <GithubOutlined style={{ marginRight: 8, marginLeft: 8 }} /> GitHub </a>
                        </div>
                    </div>
                </Card>

                {/* Curious Chronicles */}
                <Card style={{ width: 300, margin: 10 }}>
                    <div className="cardTitle" style={{ alignItems: 'right' }}>Curious Chronicles</div>
                    <div>
                        <Image className='portfolioImage' width={200} height={200} src={curiousChronicles} />
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <a href="https://project3-test.herokuapp.com/" target='_blank'> <RocketOutlined style={{ marginRight: 8 }} /> Deployment </a>
                            <a href="https://github.com/Qaizen/curious-chronicles" target='_blank'> <GithubOutlined style={{ marginRight: 8, marginLeft: 8 }} /> GitHub </a>
                        </div>
                    </div>
                </Card>
                {/* added comment */}
                {/* https://project3-test.herokuapp.com/ */}

                {/* Team Generator */}
                {/* <a href='https://github.com/ginitadavis/Team-Profile-Generator' target='_blank' rel='noopener noreferrer'>
                    <Image className='portfolioImage' src={teamGenerator} />
                </a> */}

                {/* E-Commerce */}
                {/* <a href='https://github.com/ginitadavis/E_commerce_Back_End' target='_blank' rel='noopener noreferrer'>
                    <Image className='portfolioImage' src={eCommerce} />
                </a> */}

                {/* Social Network */}
                {/* <a href='https://github.com/ginitadavis/Social-Network-API' target='_blank' rel='noopener noreferrer'>
                    <Image className='portfolioImage' src={socialNetwork} />
                </a> */}

                {/* Tech Blog in progress */}
                {/* <a href='https://github.com/ginitadavis/Tech-Blog' target='_blank' rel='noopener noreferrer'>
                    <Image className='portfolioImage' src={imagePlaceholder} />
                </a> */}

            </div>
        </>
    );
}

export default Portfolio;
