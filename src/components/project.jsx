
const Project = () => {
    return (
        <section  id="project">
        <div  className="container">
            <h2>Projets</h2>
        <div  className="myProject-content">
        <div className="left-section">
          <button className="active">all projects</button>
          <button>HTML & CSS</button>
          <button>JavaScript</button>
          <button>React & MUI</button>
          <button>Node & Express</button>
        </div>
  
        <div className="right-section">
          {["aa", "bb", "cc", 1, 7].map((item) => {
            return (
              <article key={item} className="  card">
                <img src="/img/1.png" alt="" />
  
                <div className="box">
                  <h3 className="title">Landing Page 2 </h3>
                  <p className="sub-title">
                    Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                    tempore dolor in, accusantium laudantium accusamus.
                  </p>
  
                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <div className="icon-link"></div>
                      <div className="icon-github"></div>
                    </div>
  
                    <a className="link flex" href="">
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        </div>
        </div>
        </section>
    );
  };
  
  export default Project;
  