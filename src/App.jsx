import { faCalendarDays, faCoffee, faLink } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Header from "./components/Header/Header";
import InfoStrip from "./components/InfoStrip/InfoStrip";
import Nav from "./components/Nav/Nav";
import { useState } from "react";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import Footer from "./components/Footer/Footer";
import Section from "./components/Section/Section";
import Timeline from "./components/Timeline/Timeline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Project from "./components/Project/Project";
import Design from "./components/Design/Design";

function App() {
  const [infoStripData, setInfoStripData] = useState([
    "Angular",
    "React",
    "TypeScript",
    "JavaScript",
    "NodeJS",
    "Spring Boot",
    "Java",
    "Node-RED",
    "Selenium",
    "Puppeteer",
    "Flyway",
    "SAP UI 5",
    "Jira",
    "Scrum",
    "Web Design",
    "MYSQL",
    "Oracle",
    "Databases",
    "jQuery",
    "Git",
    "OOP",
    "Frontend",
    "Full-Stack",
    "Figma",
  ]);

  const [timeLineItems, setTimeLineItems] = useState([
    {
      title: "Software Development @ NTT DATA",
      location: "Lisbon, Portugal (Remote)",
      description: `
       Collaborated with a team of developers to develop solutions to automate repetitive and time-consuming processes internally and for clients using Node-RED, in order to drastically reduce the time consumption, costs and increase productivity
      |Contributed to attain a silver seal of accessibility focusing in optimizing application accessibility using Angular and Spring Boot.
      |Developed and maintained new features using SAP UI5.
      |Used testing and automation tools like Puppeteer and Selenium to automate tests and processes`,
      dateFrom: "July 2022",
      dateTo: "Present",
    },
    {
      title: "Freelancer @ TSBTransfert",
      location: "Belgium (Remote)",
      description: `
       Designed and developed a user-friendly platform with intuitive navigation, modern visuals & responsive to all devices
      |Designed a modern look logo
      |Designed a relational database`,
      dateFrom: "2023",
      dateTo: "2023",
    },
    {
      title: "Software Development @ Mobileum",
      location: "Lisbon, Portugal (Remote)",
      description: `
       Point of contact between client and the team for the newly launched platform.
      |Planned deployment strategies to achieve minimal impact.
      |Ensured the best performance of the system monitoring responses time and performing massive load tests simulating a • production environment
      `,
      dateFrom: "January 2022",
      dateTo: "July 2022",
    },
    {
      title: "Freelancer @ TSBTransfert",
      location: "Belgium (Remote)",
      description: `
       Designed and developed a user-friendly interface with intuitive navigation, modern visuals & responsive to all devices using Figma.
      |Developed a website for a client that increased their online presence using Angular.
      |Explored Google Ads improving the search engine rankings and visibility resulted in 150k+ impressions and 5k+ clicks
      |Developed PT-EN language switch feature
      |Developed PT-EN language switch feature
      `,
      dateFrom: "2022",
      dateTo: "2022",
    },
    {
      title: "Full-Stack Developer @ Contactus",
      location: "Lisbon, Portugal (On-site)",
      description: `
       Collaborated with teammates in the development of features, working on both the backend and the frontend.
      |Developed and maintained new features using Angular and Spring Boot.
      `,
      dateFrom: "August 2021",
      dateTo: "December 2021",
    },
  ]);

  return (
    <>
      <Nav />
      <Header />
      <InfoStrip data={infoStripData} />
      <span id="about" ></span>
      <Section title="Who Am I" >
        <div class="first-part" >
          <p >
            I entered the world of programming in 2018. I'd never had contact
            with development in my life, in fact I didn't even want to pursue
            programming.
          </p>
          <p>
            I didn't know what my life was going to be like after ninth grade. I
            was always told to do something related to what I liked doing the
            most. I like cooking, so I thought I'd do a cooking course, which
            didn't happen because I didn't take to it. cooking course, which
            didn't happen because I didn't take the idea very seriously. very
            seriously. Later on, the idea of doing an arts course crossed my
            mind because arts course because of my love of drawing, which I
            didn't take very seriously either. I didn't take it very seriously
            either. Finally, I felt that a course related to computer assembly
            and disassembly was my area, I thought that because I'd always been
            a boy who liked computers. I took it seriously until the day I
            enrolled.
          </p>
          <div class="fadeout" id="fadeOut"></div>
        </div>
        <span
          class="continue__btn"
          id="continue__btn"
          onClick={() => {
            document.getElementById("secondPart").style = "height: auto";
            document.getElementById("fadeOut").style = "display: none";
            document.getElementById("continue__btn").style = "display: none";
          }}
        >
          continue reading...
        </span>
        <div id="secondPart">
          <p>
            I live in Cacém de címa (Lisbon, Portugal), so the nearest secondary
            school was the nearest secondary school was Gama Barros, so I went
            to to enroll in that school. My luck was: the office was closed and
            I hadn't slept the night before, I was wide awake.
          </p>
          <p>
            I was very tired that day, I just wanted to go home and go to sleep.
            sleep and the school office didn't open until an hour later, so I
            decided to go I decided to go and register at the Ferreira Dias
            secondary school, which was was further away from my house.
          </p>
          <p>
            When it came time to book the course I wanted, my stepfather asked
            me if I really wanted it and really wanted that and if I wouldn't
            prefer to take a programming course. programming course, I thought
            about it, I thought about it, and in order to get it over with so I
            could go home to sleep, I booked the programming course and that was
            that. and that was that.
          </p>
          <p>
            The school year started, new school, new life. I was starting my
            high school and it was all new to me.
          </p>
          <p>
            In the first technical classes of the course, I had no idea what the
            programming, what I was going to do or what outings I could have.
            class just for the sake of it. Until the days went by and I realized
            and more and more interested in the course and I would get super
            excited when I went to a programming class.
          </p>
          <p>
            We started by teaching algorithms, where we learned to think like a
            programmer. programmer. I learned something that I've used for
            everything in life, the how to solve a problem. The solution to a
            problem is to divide it into several problems and prioritize their
            importance. and solve them one by one until everything is solved.
          </p>
          <p>
            After algorithmics, we had our first impact with a real language,
            C#. After that, we started working also working with Java, both
            languages we used to make programs and exercises just for the
            console.
          </p>
          <p>
            I've always been a fast learner, when I like something I study the
            subject every day so that I'm always evolving, in the first year of
            the course I started to stand out as one of the best in the class in
            the class for always handing in everything on time and for being one
            of the most consulted most consulted to help my classmates. In the
            first year of the I even developed a console game (snake) using the
            language, and was invited to take part in an exhibition of projects
            with the students from the 2nd year of the course, but I didn't go
            because I was a bit embarrassed and hadn't finished the game yet.
          </p>
          <p>
            From the second year onwards, my life began to change completely,
            for better or for worse. That's when I met a wonderful person, a
            person I'll never forget and will always keep in touch with. who
            taught me the basics of programming and taught me to think like a
            man to think like a man and leave adolescent thinking behind. who
            taught me to be rigorous, humble, sincere, self-taught and, above
            all, ambitious. ambitious. This person is Professor Alexandre
            Ferraz. Programmer Professor and Director of the Management and
            Management and Computer Systems Programming course at the Ferreira
            Dias secondary school in Cacém.
          </p>
          <p>
            In the second year of the course, I stood out completely and went to
            the front lines of the course. the front lines of the course, I was
            the one who was always innovating, doing more I was the one who was
            always innovating, doing more than was asked of me, delving into all
            the programming topics and help all my colleagues on the course.
            During this course I was invited to inter-school debates by the
            school management, I helped Prof. Ferraz prepare lessons, prepared
            my own lessons for my fellow students, brought colleagues, I brought
            new things to the course that would benefit everyone and helped
            benefit everyone and I directly helped students from the 1st, 2nd
            and my class. class.
          </p>
        </div>
      </Section>
      <Section title="Experience">
        <Timeline items={timeLineItems} />
      </Section>
      <span id="projects"></span>
      <Section title="Projects" orientation="inlineSroll" >
        <Project
          name="SUNNY LAND LIFE"
          description="A 2D platform game developed in Unity Engine for desktop only."
          highlightImg="assets/img/SLL.png"
          credits="Assets credits: @Ansimuz"
          download="./assets/downloads/jogo.rar"
          descktopAvailable
        />
        <Project
          name="POKEMON QUIZZ"
          description="Who's That Pokémon?"
          highlightImg="assets/img/pq.png"
          url="https://dasilvadeveloper.github.io/pokemon-quizz/"
          webAvailable
        />
        <Project
          name="ADEDONHA GAME"
          description="Just send the game link to your friends and play locally!"
          highlightImg="assets/img/ag.png"
          url="https://dasilvadeveloper.github.io/adedonha-game/"
          webAvailable
        />
        <Project
          name="REAL TIME CLOCK JS"
          description="Simple real time clock built in JS"
          highlightImg="assets/img/rtc.png"
          url="https://dasilvadeveloper.github.io/clock/"
          webAvailable
        />
        <Project
          name="TIC TAC TOE"
          description="Play tic tac toe with a friend!"
          highlightImg="assets/img/ttt.png"
          url="https://dasilvadeveloper.github.io/tictactoe/"
          webAvailable
        />

      </Section>

      <Section title="Freelancing" orientation="inlineSroll">
        <Project
          name="Coral Boats Yachts Charter"
          description="Cascais boat tours and fishing. Enjoy unique experiences around the Cascais Sea."
          highlightImg="assets/img/CBYC.png"
          webAvailable
        />
        <Project
          name="TSBTransfert Platform"
          description="A complete platform built to transfer money (only numbers) globally. This platform has management of agencies, agents, currencies rates, roles and much more!"
          highlightImg="assets/img/ttp.jpeg"
          webAvailable
        />
      </Section>

      <Section title="Designs" orientation="inline"> 
          <div class="Designs gallery-first-part" >
            <Design highlightImg="assets/img/luminaryit.png" />
            <Design highlightImg="assets/img/cbf.jpeg" />
            <Design highlightImg="assets/img/bpf.jpeg" />
            <Design highlightImg="assets/img/jam.png" />
            <Design highlightImg="assets/img/maityv2.png" /> 
            <Design highlightImg="assets/img/lawyer.png" />
            <Design highlightImg="assets/img/IG1.png" /> 
            <Design highlightImg="assets/img/IG3.png" /> 
            <Design highlightImg="assets/img/IG2.png" /> 
            <Design highlightImg="assets/img/YT.png" /> 
            <Design highlightImg="assets/img/maity.png" />

          </div>
          

      </Section>
      <Footer />
    </>
  );
}

export default App;
