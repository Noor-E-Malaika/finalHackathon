import React, { useState } from 'react';
import './Courses.css';

const courseDetails = {
  "Web Development": "Web development involves the creation and maintenance of websites and web applications. It encompasses several aspects including web design, web content development, client-side/server-side scripting, and network security configuration. Using various programming languages and technologies like HTML, CSS, JavaScript, and frameworks such as React and Angular, web developers build dynamic and responsive websites that enhance user experiences. With the rise of mobile devices and the increasing importance of online presence, web development has become a crucial skill in the modern digital landscape.",
  "Graphics Designing": "Graphics designing is the art of creating visual content to communicate messages effectively. It involves the use of typography, imagery, color, and layout techniques to craft visually appealing and functional designs for various media, including print, digital, and social platforms. Graphic designers use software tools like Adobe Photoshop, Illustrator, and InDesign to create logos, brochures, advertisements, and more. By combining creativity with technical skills, graphic designers play a key role in building brand identities and enhancing user engagement through visually compelling storytelling.",
  "App Development": "App development is the process of creating software applications for mobile devices, tablets, and computers. This involves designing, coding, testing, and deploying apps that run on operating systems like iOS, Android, and Windows. Developers use languages such as Swift, Java, Kotlin, and tools like React Native and Flutter to build apps that are functional, user-friendly, and visually appealing. App development encompasses a range of applications, from simple utilities to complex games and enterprise solutions, making it a vital skill in today's technology-driven world.",
  "Flutter": "Flutter is an open-source UI framework developed by Google for building natively compiled applications across mobile, web, and desktop from a single codebase. Utilizing the Dart programming language, Flutter enables developers to create visually stunning and high-performance applications with a rich set of pre-designed widgets and a reactive framework. Its hot reload feature allows for real-time updates during development, accelerating the design and testing process. By offering a consistent and smooth user experience on multiple platforms, Flutter has become a popular choice for modern app development.",
  "Data Science and Analytics": "A data analyst is a professional who collects, processes, and performs statistical analyses on large datasets to uncover insights and support decision-making. They use tools like Excel, SQL, and data visualization software to interpret trends, patterns, and anomalies in data. By transforming raw data into actionable information, data analysts help organizations make informed business decisions, improve operations, and identify opportunities for growth. Their role is crucial in turning data into a strategic asset, driving evidence-based strategies across various industries.",
  "Python Programming": "A Python developer specializes in using the Python programming language to build software applications, scripts, and tools. Python's versatility makes it ideal for a wide range of tasks, including web development, data analysis, machine learning, and automation. Python developers leverage libraries and frameworks like Django, Flask, and Pandas to create efficient and scalable solutions. Their work often involves writing clean, maintainable code and collaborating with other developers and stakeholders to deliver high-quality software. Python developers play a key role in various industries, from tech startups to large enterprises, thanks to Python's broad applicability and ease of use.",
  "CyberSecurity Essential": "Cybersecurity focuses on protecting systems, networks, and data from digital attacks, unauthorized access, and damage. It involves implementing strategies and technologies to safeguard sensitive information and ensure the integrity, confidentiality, and availability of data. Cybersecurity professionals use various tools and practices, including encryption, firewalls, and intrusion detection systems, to defend against threats such as hacking, malware, and phishing. Their work is crucial in an increasingly digital world, where cyber threats can have significant impacts on individuals, businesses, and governments.",
  "Digital Animation": "Digital animation involves creating moving images using computer-generated graphics and technology. It encompasses various techniques, including 2D animation, 3D modeling, and motion graphics, to bring visual stories to life. Digital animators use software like Adobe After Effects, Blender, and Maya to design and animate characters, scenes, and effects. This field is widely used in entertainment, advertising, gaming, and education, providing dynamic and engaging content that captures audiences' attention and enhances storytelling.",
  "Java Programming": "Java is a widely-used, high-level programming language designed for portability and efficiency. Created by Sun Microsystems in the mid-1990s, Java follows the principle of write once, run anywhere, meaning code written in Java can run on any device equipped with a Java Virtual Machine (JVM). Its strong object-oriented principles, rich API, and robust security features make it ideal for developing cross-platform applications, including web and mobile apps. Java's versatility and stability have made it a cornerstone in enterprise environments, Android development, and large-scale systems.",
  "Machine Learning and Artificial Intelligence": "Machine Learning (ML) and Artificial Intelligence (AI) are transformative technologies that enable computers to learn from data and make intelligent decisions. ML focuses on developing algorithms and statistical models that allow systems to improve their performance on tasks over time without being explicitly programmed. AI encompasses a broader scope, including the creation of systems that can simulate human intelligence and perform tasks such as natural language processing, image recognition, and problem-solving. Together, ML and AI drive innovations in various fields, including healthcare, finance, and autonomous vehicles, by providing data-driven insights and automating complex processes.",
  "Game Development with Unity": "Game development with Unity involves using the Unity engine, a powerful and versatile platform for creating interactive 2D and 3D games. Unity offers a user-friendly interface, a wide range of built-in tools, and support for multiple platforms, including PC, consoles, and mobile devices. Developers use C# scripting to design gameplay mechanics, create immersive environments, and implement complex interactions. Unity's asset store, real-time rendering capabilities, and robust community support make it a popular choice for both indie developers and large studios, enabling the creation of engaging and visually stunning games.",
  "Cloud Computing with AWS": "Cloud computing with AWS (Amazon Web Services) involves using Amazon's suite of cloud-based services to build, deploy, and manage applications and infrastructure. AWS provides a wide range of scalable solutions, including computing power (EC2), storage (S3), databases (RDS), and machine learning tools, all accessible via the internet. It allows businesses to reduce costs, enhance flexibility, and scale resources according to demand without the need for physical hardware. With features like high availability, security, and global reach, AWS enables developers and organizations to efficiently manage their IT operations and innovate rapidly."
};

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCardClick = (course) => {
    setSelectedCourse(course);
  };

  const handleCloseDetail = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="courses">
      <div className="row">
        {Object.keys(courseDetails).map((course, index) => (
          <div
            key={index}
            className={`card ${index % 3 === 0 ? 'blue' : index % 3 === 1 ? 'orange' : 'green'}`}
            onClick={() => handleCardClick(course)}
          >
            <h3>{course}</h3>
          </div>
        ))}
      </div>

      {selectedCourse && (
        <div className="course-detail">
          <div className="course-detail-content">
            <h2>{selectedCourse}</h2>
            <p>{courseDetails[selectedCourse]}</p>
            <button onClick={handleCloseDetail}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;


