export default function Home() {
  return (
    <div className="welcome-page page">
      <div className="welcome-page-inner page-inner">
        <div className="welcome-page-greeting container">
          <h1>Welcome to Creative MSFTS</h1>
        </div>
        <div className="welcome-page-cta container">
          <p>We're a creative design studio - creating more than just interfaces</p>
        </div>
        <div className="welcome-page-first-img-split"></div>
        <div className="welcome-page-about">
          <div className="inner-about page-container container">
            <div className="line-break">
              <h2 className="line-break-text">About</h2>
              <div className="line-break-inner"></div>
            </div>
            <h2>About Us</h2>
            <p>Our team is made up of designers, developers, and creatives who are passionate about creating unique and engaging experiences. We believe that design is more than just making things look good - it's about creating something that resonates with people and makes a lasting impression.</p>

            <div className="inner-about-grid row">
              <div className="inner-about-grid-item col-lg-4">
                <h3>Collaborations</h3>
                <ul>
                  <li>Larry A Lesley</li>
                  <li>IRE Clothing</li>
                  <li>Saint Pierre</li>
                  <li>YBA Clothing</li>
                </ul>
              </div>
              <div className="inner-about-grid-item col-lg-4">
                <h3>Tools we use</h3>
                <ul>
                  <li>Adobe Creative Suite</li>
                  <li>Sketch</li>
                  <li>Webflow</li>
                  <li>React</li>
                  <li>Zoom</li>
                  <li>Slack</li>
                  <li>ChatGPT</li>
                </ul>
              </div>
              <div className="inner-about-grid-item col-lg-4">
                <h3>Strategy</h3>
                <p>We work with you to define your goals and create a plan to achieve them. We use data and research to inform our decisions and ensure that our work is effective and impactful.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="welcome-page-services">
          <div className="inner-services page-container container">
            <div className="line-break">
              <h2 className="line-break-text">Services</h2>
              <div className="line-break-inner"></div>
            </div>
            <h2>Our Services</h2>
            <p>We offer a range of services to help you bring your ideas to life. From branding and design to development and marketing, we have the skills and expertise to help you succeed.</p>
            <div className="inner-services-grid row">
              <div className="inner-services-grid-item">
                <div className="inner-services-grid-item-number">01</div>
                <div className="inner-services-grid-item-content">
                  <h2>Branding</h2>
                  <p>From logos to brand guidelines, we can help you create a brand that stands out and resonates with your audience.</p>
                  <ul>
                    <li>Logo Design</li>
                    <li>Brand Guidelines</li>
                    <li>Brand Strategy</li>
                  </ul>
                </div>
              </div>
              <div className="inner-services-grid-item">
                <div className="inner-services-grid-item-number">02</div>
                <div className="inner-services-grid-item-content">
                  <h2>Design</h2>
                  <p>Our designers can help you create beautiful and engaging designs that will make your brand stand out and resonate with your audience.</p>
                  <ul>
                    <li>Logo Design</li>
                    <li>Web Design</li>
                    <li>UI/UX Design</li>
                  </ul>
                </div>
              </div>
              <div className="inner-services-grid-item">
                <div className="inner-services-grid-item-number">03</div>
                <div className="inner-services-grid-item-content">
                  <h2>Development</h2>
                  <p>Our developers can help you bring your ideas to life with custom websites and applications that are tailored to your needs.</p>
                  <ul>
                    <li>Web Development</li>
                    <li>App Development</li>
                    <li>Custom Solutions</li>
                  </ul>
                </div>
              </div>
              <div className="inner-services-grid-item">
                <div className="inner-services-grid-item-number">04</div>
                <div className="inner-services-grid-item-content">
                  <h2>Maintenance</h2>
                  <p>Our team can help you keep your website up to date and running smoothly with regular maintenance and support.</p>
                  <ul>
                    <li>Website Updates</li>
                    <li>Security Patches</li>
                    <li>Performance Optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="welcome-page-work">
          <div className="inner-work page-container container">
            <div className="line-break">
              <h2 className="line-break-text">Work</h2>
              <div className="line-break-inner"></div>
            </div>
            <h2>Our Work</h2>
            <p>Take a look at some of the projects we've worked on and see how we've helped our clients achieve their goals.</p>
            <div className="inner-work-grid row">
              <div className="inner-work-grid-item col-lg-4">
                <div className="inner-work-grid-item-img">
                  <img src="/images/lattencreative.png" alt="" />
                </div>
                <h3>Latten Creative</h3>
                <p>Project Description</p>
              </div>
              <div className="inner-work-grid-item col-lg-4">
                <div className="inner-work-grid-item-img">
                  <img src="/images/pyrtcreative.png" alt="" />
                </div>
                <h3>Pyrt Creative</h3>
                <p>Project Description</p>
              </div>
              <div className="inner-work-grid-item col-lg-4">
                <div className="inner-work-grid-item-img">
                  <img src="/images/lattenitsolutions.png" alt="" />
                </div>
                <h3>Latten IT Solutions</h3>
                <p>Project Description</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
