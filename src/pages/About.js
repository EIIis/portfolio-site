import React from 'react';
import BigHome from '../components/BigHome';
import Body from '../components/Body';

function About(props) {

    return(
        <div>
            <BigHome title={props.title} />
            <Body>
            <p>Hi, my name is Ellis Alcantara! I'm a current student at the University of Alabama - Birmingham studying computer science and mathematics with a concentration in applied mathematics and scientific computation. </p>
            <p>While I do love mathematics, specifically in optimization theory, I found software engineering super fun and I inspire to become a software engineering post-graduation. If you haven't checked out my projects on my homepage, you can checkout my <a href="https://github.com/EIIis"> Github here</a> which will show you all my projects. You can also check out my <a href="https://drive.google.com/file/d/1-1VtKJVsWgl909bM3tefrxuUrnwdll9x/view?usp=sharing"> resume here!</a> </p>
            <p>I'm currently interning at HiveRnD which is a startup, from UAB since 2020. HiveRnD is developing a platform to connect physicians with unsolved problems to students and scientists willing to solve them. I'm currently working on the front-end of the site. </p>
            <p>While academics and work-related things take up a majority of my time I do love to do thing outside of that. I like to play videogames, like Call of Duty, CS:GO, and Old School Runescape. I also enjoy keeping up with my favorite sport teams, such as the Atlanta Falcons, Atlanta Hawks, and Athletico Madrid!</p>
            <p>If you want to talk, hit me up on <a href="https://www.linkedin.com/in/ellis-alcantara/">LinkedIn</a>, I'm always looking to connect with people!</p>
            </Body>
        </div>
    );
}
export default About;