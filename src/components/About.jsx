import CEHm from "../assets/CEHP.png";
import LinkFunc from "../Extra_components/LinkFunc";

const About = () => {
  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <div
        className="card border-info mb-3"
        style={{ maxWidth: "60rem", maxHeight: "30rem" }}>
        <div className="card-header">About spiderQuiz</div>
        <div className="card-body">
          <h5 className="card-title">Info</h5>
          <p className="card-text">
            This is a simple quiz application created using React. The
            application consists of multiple quizzes on different topics. The
            user can select a quiz from the dropdown menu and take the quiz. The
            user can answer the questions and check the score at the end of the
            quiz. The user can also restart the quiz if needed.
          </p>
        </div>
      </div>
      <div className="card border-info mb-3" style={{ maxWidth: "60rem" }}>
        <div className="card-header">About Developer</div>
        <div className="card-body">
          <h5 className="card-title">Nurendra Bhandarigal</h5>
          <p className="card-text">
            Graduate with a Bachelor of Technology in Computer Science and
            Engineering from Lovely Professional University. Passionate about
            cybersecurity and web development, I continuously strive to enhance
            my skills and contribute to impactful projects.
          </p>

          <p>
            As a CEH v12 Master and active CTF player on platforms like
            TryHackMe, I have developed expertise in penetration testing,
            ethical hacking, malware analysis, and web security. My hands-on
            experience spans tools such as Radare2, Process Hacker, Nessus, Burp
            Suite, OWASP ZAP, Nmap, Metasploit, and Wireshark, alongside
            operating systems like Kali Linux, Parrot Security, and BlackArch
            Linux, enabling me to conduct vulnerability assessments, exploit
            development, and network analysis effectively.
          </p>

          <p>
            In addition to cybersecurity, I have experience in front-end
            development, using HTML, CSS, JavaScript and ReactJS to create
            responsive and user-friendly web interfaces.
          </p>

          <p>
            I am driven by a passion for solving problems, embracing challenges,
            and contributing to projects that combine creativity and technical
            expertise.
          </p>

          <div>
            <div className="card mb-3" style={{ maxWidth: "900px" }}>
              <div className="row g-1">
                <div
                  className="col-md-4"
                  style={{
                    maxWidth: "30rem",
                    marginBottom: "1rem",
                    alignContent: "center",
                  }}>
                  <img
                    src={CEHm}
                    className="img-fluid align-content-lg-center"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">CEH GLOBAL COMPETITION</h5>
                    <p className="card-text">
                      Operation ATT&CK Unveil: Decoding Cyber Tactics This badge
                      recognizes the holder&apos;s successful completion of a
                      rigorous web infrastructure security challenge, showcasing
                      advanced proficiency in key cybersecurity domains. Badge
                      earners have demonstrated expertise in areas such as web
                      and Sudoer loophole exploitation, network scanning, PHP
                      file upload vulnerabilities, remote code execution, and
                      PHP reverse shell techniques. Additionally, they have
                      exhibited skills in SSH id-RSA key passphrase cracking,
                      credential attacks, SSH cracking methods, and Sudo shell
                      escaping, reflecting a comprehensive understanding of
                      critical security practices.
                    </p>
                    <LinkFunc />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
