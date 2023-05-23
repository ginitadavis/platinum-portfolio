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
                        In my home country of Paraguay I took algorithm classes during high school and later went to college and obtained a bachelor's degree in computer science. However, upon moving to the United States, I had to rebuild my career, which led me away from my passion for computer programming. Instead, I embarked on a career in logistics and imports compliance, where I spent 9 years.
                        <br />
                        <br />
                        During this time I never lost sight of my true passion for programming, and in the winter of 2022, I finally had the perfect opportunity to pursue a reentry into programming by enrolling in the UCF Full-stack Bootcamp.
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