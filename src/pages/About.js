import React from 'react';
import BigHome from '../components/BigHome';
import Body from '../components/Body';
import resume from '../assets/Ellis_Alcantara2023.pdf';

function About(props) {

    return(
        <div>
            <BigHome title={props.title} />
            <Body>
            <p>Hi, my name is Ellis Alcantara Martinez! I'm a first-gen college student at the University of Alabama - Birmingham studying 
                computer science and mathematics with a concentration in applied mathematics and scientific computation. </p>
            
            <p>I'm deeply passionate about diversity and inclusion in tech and can proudly say that I was picked as a finalist for 
            <a href="https://www.code2040.org/fellows-program " target="_blank" rel="noopener noreferrer"> CODE2040 Fellows</a> program.
            If you're an URM in tech, I highly recommend taking a look at CODE2040 and at ColorStack. Also feel free to reach out to me!
            </p>

            <p>While I do love mathematics, specifically optimization theory, I found software engineering super fun and I inspire to become 
                a software engineering post-graduation. If you haven't checked out my projects on my homepage, you can checkout 
                my <a href="https://github.com/EIIis " target="_blank" rel="noopener noreferrer"> Github here</a>, which will show you all my projects.
                You can also download my <a href={resume} download> resume here</a>.</p> 

            <p>During my summer 2021 break, I interned at a pre-launch SAAS startup called HiveRnD. The product we were developing was aplatform to connect 
                physicians, who had unsolved problems, to students and scientists willing to solve them. I worked as a front-end engineer intern, where I worked with
                the following tech-stack: JavaScript, TypeScript, Node.js, and Next.js. While I really enjoyed the feeling of working on a real product, I'm
                looking for a company with {'>'}15 people (so feel free to hmu startups!) to work with for the summer of 2022! </p>

            <p>While academics and work-related things take up a majority of my time I do love to do thing outside of that. I like to play videogames,
                like Call of Duty, CS:GO, and Old School Runescape. I also enjoy keeping up with my favorite sport teams, such as the Atlanta Falcons,
                Atlanta Hawks, and Athletico Madrid!</p>
                
            <p>If you want to talk, feel free to hit me up on <a href="https://www.linkedin.com/in/ellis-alcantara/" target="_blank" rel="noopener noreferrer">LinkedIn</a>,
                I'm always looking to connect with people!</p>

            </Body>
        </div>
    );
}
export default About;