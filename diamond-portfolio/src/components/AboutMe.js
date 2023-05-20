import React from 'react';
import '../styles/Content.css';
import myPhoto from '../images/about_me.JPG'

function AboutMe() {
    return (
        <>
            <h1 className='title'>About Me</h1>
            <div className='photoAndDescription'>
                <img className='profilePhoto' src={myPhoto} alt='My Photo' />
                <div className='descriptionAboutMe'>
                    <p> I have always been interested in programming languages and began learning simple algorithms at the age of 15.
                        <br />
                        <br />
                        In my home country of Paraguay, I took algorithm classes during high school. Later, I went to college and obtained a Bachelor's degree in Computer Science. However, upon moving to the United States, I experienced imposter syndrome, which led me to veer away from my passion for computer programming. Instead, I embarked on a career in Logistics/Imports Compliance, where I spent 9 years.
                        <br />
                        <br />
                        During this time, I never lost sight of my true passion for programming, and in the winter of 2022, I finally took a leap of faith and enrolled in the UCF Full-stack Bootcamp.
                        <br />
                        <br />
                        The experience has been transformative, as I have acquired numerous new skills in a remarkably short period. I am filled with excitement as I embark on this new journey as a full-stack web developer.
                    </p>
                </div>
            </div>

        </>
    );
}

export default AboutMe;