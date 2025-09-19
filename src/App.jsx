import './App.css'

function Navbar() {
  return (
    <header className="nav">
      <div className="nav-left">
        <div className="brand">
          <img className="memoji" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo3YE1DaJysQEhKRXrE7kG7-TXUSjiRFFqBb1SUm5p9TjVP03CApJ56G-FOU-nLdCUzGE&usqp=CAU" alt="avatar" />
          <span>Yukesh Venkadesh</span>
        </div>
      </div>
      <div className="nav-right">
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav-actions">
        <button className="theme-toggle" aria-label="Toggle theme" onClick={() => {
          const next = document.documentElement.getAttribute('data-theme') === 'light' ? '' : 'light'
          if (next) document.documentElement.setAttribute('data-theme', next)
          else document.documentElement.removeAttribute('data-theme')
          localStorage.setItem('theme', next || 'dark')
        }}>
          🌓 Theme
        </button>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return <footer className="footer">© {new Date().getFullYear()} Yukesh Venkadesh</footer>
}

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        
        <section className="hero" id="home">
          <div className="hero-grid">
      <div>
        <div className="eyebrow">Software Systems Graduate • Developer</div>
            <h1>Designing simple and reliable applications</h1>
        <p>
            I enjoy solving problems step by step and learning new tools. 
            Interested in Java, MERN stack, Flutter, and exploring AI with prompt engineering.
        </p>

              <div className="cta-row">
                <a className="btn" href="#projects">View Projects</a>
                <a className="btn" href="/public/YUKESH_VENKADESH_RESUME (1).pdf" target="_blank" rel="noreferrer">Download Resume</a>
              </div>
            </div>
            <div className="avatar-wrap">
              <img className="avatar" src="/download.jpeg" alt="Profile placeholder" />
            </div>
          </div>
        </section>

        

        <section className="section" id="about">
          <h2>About</h2>
          <div className="section-card">
            <p>
            I’m Yukesh Venkadesh — a Software Systems graduate who enjoys designing simple solutions for real problems. I focus on writing clean code, practical architecture, and building applications that are fast and user-friendly.
            </p>
            <p style={{ marginTop: 10 }}>
            I have experience working with the MERN stack and Java. I develop mobile apps, explore machine and deep learning projects, and experiment with prompt engineering for AI solutions. I like breaking complex tasks into smaller steps, learning new tools, and applying my skills to real-world projects.
            </p>
            <p style={{ marginTop: 10 }}>
            Apart from coding, I practice DSA and work on improving UI for better user experiences.
            </p>
          </div>
        </section>

        <section className="section" id="skills">
  <h2>Technical Skills</h2>
  <div className="skill-matrix">
    {[
      ['java', 'Java'],
      ['js', 'JavaScript'],
      ['react', 'React'],
      ['nodejs', 'Node.js'],
      ['express', 'Express'],
      ['mysql', 'MySQL'],
      ['mongodb', 'MongoDB'],
      ['docker', 'Docker'],
      ['jenkins', 'Jenkins'],
      ['github', 'GitHub'],
      ['firebase', 'Firebase'],
      ['c', 'C'],
      ['cplusplus', 'C++'],
      ['python', 'Python'],
      ['cs', 'C# & .NET'],
      ['html', 'HTML & CSS'],
      ['bootstrap', 'Bootstrap'],
      ['flutter', 'Flutter'],
      ['dart', 'Dart']
    ].map(([icon, label]) => (
      <div className="skill-item" key={label}>
        <img src={`https://skillicons.dev/icons?i=${icon}`} alt={label} />
        <span>{label}</span>
      </div>
    ))}
  </div>
</section>


        <section className="section" id="experience">
          <h2>Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="time">2025</div>
              <div className="timeline-card">
                <h3>Full‑Stack Developer Intern — Divine Infotech</h3>
                <p>Built an e‑commerce website(Divine Delights using MERN) with product management, secure login, and order processing.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="certs">
          <h2>Certifications</h2>
          <ul className="bullets">
            <li><a className="link ext" href="https://education.oracle.com/products/oci" target="_blank" rel="noreferrer">Oracle AI Vector Search Certified Professional — Oracle</a></li>
            <li><a className="link ext" href="https://education.oracle.com/apex" target="_blank" rel="noreferrer">Oracle APEX Cloud Developer Certified Professional — Oracle</a></li>
          </ul>
        </section>

        <section className="section" id="projects">
  <h2>Projects</h2>
  <ul className="cards">
    <li className="card">
      <h3>Textile Application · Flutter, Firebase <span className="year">2024–2025</span></h3>
      <p>Textile shop management app with inventory, billing, and customer tracking; real‑time updates using Firebase.</p>
      <a className="link ext" href="https://github.com/Yukeshvenkadesh/Amsam_Tex_App" target="_blank" rel="noreferrer">Project Link</a>
    </li>
    <li className="card">
      <h3>Docker file for a web application · Node.js, Docker, MongoDB <span className="year">2024–2025</span></h3>
      <p>Containerized a simple Node.js web app with MongoDB backend for scalable deployment.</p>
      <a className="link ext" href="https://github.com/Yukeshvenkadesh/Devops_2" target="_blank" rel="noreferrer">Project Link</a>
    </li>
    <li className="card">
      <h3>Cafe Order Management System · Java, MySQL, JDBC <span className="year">2024</span></h3>
      <p>Admin can manage orders, update stock, and perform CRUD operations; streamlined cafe operations.</p>
      <a className="link ext" href="https://github.com/Yukeshvenkadesh/Java_jdbc_cafeordersyss" target="_blank" rel="noreferrer">Project Link</a>
    </li>
    <li className="card">
      <h3>Room Booking for a Hotel · C# <span className="year">2024</span></h3>
      <p>Developed a room reservation system for hotels, allowing users to book and manage reservations using C#.</p>
      <a className="link ext" href="https://github.com/Yukeshvenkadesh/c-_1/tree/main" target="_blank" rel="noreferrer">Project Link</a>
    </li>
    <li className="card">
      <h3>Virtual Therapist · MERN, Deep Learning <span className="year">2025</span></h3>
      <p>Implemented a web platform to detect mental health conditions such as anxiety, depression, ADHD, and BPD using user input. Employed a hybrid DistilBERT + BiLSTM and XGBoost model for text analysis; designed for both individuals and mental health professionals.</p>
      <a className="link ext" href="#" target="_blank" rel="noreferrer">Project Link</a>
    </li>
    <li className="card">
      <h3>Stock Market Prediction · LSTM <span className="year">2025</span></h3>
      <p>Developed a stock market prediction model using Long Short-Term Memory (LSTM) neural networks to analyze and forecast stock price trends from historical data.</p>
      <a className="link ext" href="https://github.com/Yukeshvenkadesh/Stockmarket_prediction" target="_blank" rel="noreferrer">Project Link</a>
    </li>
  </ul>
</section>


        <section className="section" id="education">
          <h2>Education</h2>
          <ul className="bullets">
            <li>MSc Software Systems — Kongu Engineering College (CGPA 7.7/10) · 2022–2027</li>
            <li>Higher Secondary Certificate — Geethaanjali All India Senior Secondary School · 2021–2022</li>
            <li>SSLC — Geethaanjali All India Senior Secondary School · 2019–2020</li>
          </ul>
        </section>

        <section className="section" id="contact">
          <h2>Contact</h2>
          <p>Email: <a className="link" href="mailto:yukeshvenkadesh@gmail.com">yukeshvenkadesh@gmail.com</a></p>
          <div className="tags" style={{ marginTop: 8 }}>
            <a className="tag" href="https://www.linkedin.com/in/yukesh-venkadesh-73303930a/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="tag" href="https://github.com/Yukeshvenkadesh" target="_blank" rel="noreferrer">GitHub</a>
            <a className="tag" href="https://leetcode.com/u/uMaXMnENaa/" target="_blank" rel="noreferrer">LeetCode</a>
          </div>
        </section>
      </main>
      <Footer />
      </div>
  )
}
