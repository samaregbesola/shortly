import "./about.css";
import { about } from "../../helper/data";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="about__heading">Advanced Statistics</h2>
        <p className="about__content">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="about__stats">
          <div className="about__grid">
            {about.map((item) => {
              const { id, title, text, icon } = item;
              return (
                <article className="about__card" key={id}>
                  <div className="about__image">
                    <img src={icon} alt={title} className="" />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              );
            })}
          </div>
          <div className="about__line"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
