import React from 'react';
import '../styles/Content.css';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

function Content({ selection }) {
    let page;
    console.log('This is inside of Content')
    console.log(selection)
    switch (selection) {
        case 'aboutMe':
            page = <AboutMe />;
            break;
        case 'portfolio':
            page = <Portfolio />;
            break;
        case 'contact':
            page = <Contact />;
            break;
        case 'resume':
            page = <Resume />;
            break;
        default:
            page = null;
    }

    return <>{page}</>;
}

export default Content;