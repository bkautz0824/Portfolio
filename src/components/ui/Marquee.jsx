const items = [
  {
    image:
      "https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black",
    body: "Experienced React developer with three years of expertise. Acquired skills during BloomTech's bootcamp and applied them for two years in daily work. Proficient in creating dynamic and responsive user interfaces.",
    link: "https://reactjs.org/"
  },
  {
    image:
      "https://img.shields.io/badge/-Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white",
    body: "Enthusiastic Next.js user, leveraging its capabilities to enhance web development. Utilized the framework to streamline design processes, resulting in improved aesthetics and efficiency.",
    link: "https://nextjs.org/"
  },
  {
    image:
      "https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
    body: "Game-changing CSS3 skills enhancing design aesthetics and productivity. Efficiently applying design principles learned from this design kit to elevate the quality of my work.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    image:
      "https://img.shields.io/badge/-Express.js-000000?style=for-the-badge&logo=express&logoColor=white",
    body: "Skilled Express.js developer adept at creating efficient and scalable server-side applications. Applied knowledge to enhance the functionality and performance of web applications.",
    link: "https://expressjs.com/"
  },
  {
    image:
      "https://img.shields.io/badge/-Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
    body: "Tailwind CSS enthusiast, incorporating its utility-first approach to streamline styling processes. Achieved improved design aesthetics and efficiency in project development.",
    link: "https://tailwindcss.com/"
  },
  {
    image:
      "https://img.shields.io/badge/-Git-F05032?style=for-the-badge&logo=git&logoColor=white",
    body: "Proficient Git user employing version control for collaborative development. Applied Git principles to manage project workflows effectively and ensure codebase integrity.",
    link: "https://git-scm.com/"
  },
  {
    image:
      "https://img.shields.io/badge/-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
    body: "HTML5 expert utilizing its features to create well-structured and semantically meaningful web content. Leveraged HTML5 to enhance accessibility and user experience.",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
  },
  {
    image:
      "https://img.shields.io/badge/-MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white",
    body: "MySQL proficiency for designing and managing relational databases. Utilized MySQL to ensure data integrity and efficient retrieval in web applications.",
    link: "https://www.mysql.com/"
  },
  {
    image:
      "https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
    body: "JavaScript proficiency contributing to dynamic and interactive web applications. Applied JavaScript to enhance user interfaces and create seamless user experiences.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    image:
      "https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white",
    body: "Node.js expert leveraging its capabilities for server-side development. Applied Node.js to build scalable and efficient web applications with enhanced functionality.",
    link: "https://nodejs.org/"
  },
  {
    image:
      "https://img.shields.io/badge/-Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white",
    body: "Redux proficient developer implementing state management for complex web applications. Utilized Redux to enhance data flow and maintain a predictable state.",
    link: "https://redux.js.org/"
  },
  {
    image:
      "https://img.shields.io/badge/-PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white",
    body: "PostgreSQL expertise in designing and managing relational databases. Applied PostgreSQL to ensure secure and efficient data storage for web applications.",
    link: "https://www.postgresql.org/"
  },
  {
    image:
      "https://img.shields.io/badge/-PHP-777BB4?style=for-the-badge&logo=php&logoColor=white",
    body: "Proficient in PHP for server-side scripting, with a focus on building robust and scalable web applications. Experienced in creating dynamic and interactive features to enhance user experiences.",
    link: "https://www.php.net/"
  },
  {
    image:
      "https://img.shields.io/badge/-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white",
    body: "Skilled in MongoDB, a NoSQL database, for efficient data storage and retrieval in web applications. Utilized MongoDB to design and implement scalable and flexible data models for diverse projects.",
    link: "https://www.mongodb.com/"
  },
];

  
  export default function Marquee() {
    return (
      <div className="relative flex items-center mt-10 mb-4 w-ful">
        <div className="relative flex max-w-[100vw] overflow-hidden py-5">
          <div className="flex w-max animate-marquee [--duration:80s] hover:[animation-play-state:paused]">
            {[...items, ...items].map((item, index) => (
              <div key={index} className="h-full px-2.5">
                <div className="relative h-full w-[28rem] rounded-2xl border border-white/5 bg-white/5 px-8 py-6">
                  <div className="pb-4 font-light text-white/75">{item.body}</div>
  
                  <div className="flex items-center gap-4 mt-auto">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img src={item.image} className="rounded-full" alt={item.name} />
                  </a>
  
                    <div className="flex flex-col justify-end text-sm">
                      <div className="text-white">{item.name}</div>
  
                      {/* <div className="text-white/75">{item.title}</div> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  