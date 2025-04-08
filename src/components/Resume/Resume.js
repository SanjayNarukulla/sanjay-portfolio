import React, { useContext } from "react";
import "./Resume.css";
import { ThemeContext } from "../../context/ThemeContext";

const Resume = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="resume"
      className={`resume ${theme === "dark" ? "dark-theme" : ""}`}
    >
      <div>
        {/* Section Title */}
        <div className="section-title">
          <h2>Resume</h2>
        </div>

        {/* Two-Column Layout */}
        <div className="row">
          {/* Education Column */}
          <div className="column">
            <h3 className="resume-title">Education</h3>

            <div className="resume-item">
              <h4>Bachelor of Technology, Computer Science</h4>
              <h5>2020 - 2024</h5>
              <p>
                <em>Sri Chaitanya Technical Campus</em>
              </p>
              <p>
                I gained expertise in programming languages, algorithms, data
                structures, software development methodologies, and
                problem-solving skills, which I leverage to create innovative
                solutions in the digital realm.
              </p>
            </div>

            <div className="resume-item">
              <h4>Nxtwave Disruptive Technologies</h4>
              <h5>2022 - Ongoing</h5>
              <p>
                <em>NxtWave CCBP 4.0 Academy</em>
              </p>
              <p>
                Industry Ready Certification in Full-stack Development, covering
                essential front-end and back-end technologies like HTML, CSS,
                JavaScript, React.js, Node.js, and deployment strategies.
              </p>
            </div>
          </div>

          {/* Professional Experience Column */}
          <div className="column">
            <h3 className="resume-title">Professional Experience</h3>

            <div className="resume-item">
              <h4>Teaching Assistant</h4>
              <h5>2024 - 2024</h5>
              <p>
                <em>NxtWave, Hyderabad, Telangana</em>
              </p>
              <ul>
                <li>
                  Effectively addressed student inquiries and concerns regarding
                  course content, assignments, and technical issues.
                </li>
                <li>
                  Offered clear and concise explanations to students, helping
                  them understand complex concepts.
                </li>
                <li>
                  Stayed updated on course materials, instructional methods, and
                  technological tools to assist students.
                </li>
                <li>
                  <a
                    href="https://portal.ccbp.in/teaching-assistant-profile?uid=sanjay-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="port-link"
                  >
                    TA Portfolio
                  </a>
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Bench Sales Recruiter</h4>
              <h5>2022 - 2023</h5>
              <p>
                <em>PassionIT, Dallas, Texas</em>
              </p>
              <ul>
                <li>
                  Managed consultant databases efficiently, keeping records
                  updated and organized.
                </li>
                <li>
                  Demonstrated strong communication abilities to effectively
                  convey information between clients and candidates.
                </li>
                <li>
                  Employed analytical and problem-solving skills to address
                  challenges in recruitment.
                </li>
                <li>
                  Met or exceeded recruitment targets, contributing to the
                  success of the organization.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="download-btn">
          <a
            href="https://drive.google.com/file/d/1RxFlM3dcgMGiPjg6VHmwPQ3itkIAm5rF/view"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
