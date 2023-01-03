import yo from "./yo.jpg";

const About = () => {
    return (
        <div className="about-container">
            <div>
                <img src={yo} alt="Yo" />
            </div>
            <div>
                <h1>Jorge Castro Vargas</h1>
                <p>
                    Hi, I’m a Full-Stack Developer and Systems Engineer, bla bla bla Hi, I’m a Full-Stack Developer and Systems Engineer, bla bla bla
                    Hi, I’m a Full-Stack Developer and Systems Engineer, bla bla bla Hi, I’m a Full-Stack Developer and Systems Engineer, bla bla bla
                </p>
            </div>
        </div>
    );
};

export default About;