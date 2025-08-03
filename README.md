# art-supply-tracker

The Art Supply Tracker is a personal project I’ve been working on since 2024, inspired by my desire to organize, track, and easily search for my own art supplies while out shopping.

**Version 1**: [art-supply-tracker](https://github.com/roryhackney/art-supply-tracker)  
After gaining confidence developing software and programming in my CS courses, I began exploring ways to create an application to manage my art supply collection. After creating an initial mobile first [UX design](https://www.figma.com/design/0LxqJbBWnw07SKJpn5pTVx/Art-Supply-Tracker--Mobile-) in Figma, I began exploring React and Firebase to develop a mobile first website using this repo during my summer break.

![image](https://github.com/user-attachments/assets/9d7b3e59-3353-4961-8f7b-1153babeff92)

  
**Version 2**: [creative-project](https://github.com/roryhackney/creative-project)  
After learning more about Node, Express, and SQL in the fall of my senior year, I redesigned the application, improving the UX and implementing additional features including a SQL database tracking users, art supply categories, properties, and inventory, enabling authentication and routing using Node and Express. I also learned to use APIs, integrating a feature to display clickable color options fetched from an API based on the user's color family selection. Although the application worked, it was difficult to maintain and expand features because I was writing SQL, HTML, and JavaScript/Node code manually rather than using a framework or other tools.

![image](https://github.com/user-attachments/assets/3f7f95d3-1ab8-4ad9-956a-043fae39d368)
  

**Verson 3**: [creative-project-react](https://github.com/roryhackney/creative-project-react)  
After learning more about React, software design, and cloud computing, I created an improved version during my senior web development course, implementing additional features including both stronger authentication and a JSON database backed by Firebase / Google Cloud, unit tests using JUnit, and dynamic forms utilizing React components that generate fields based on user choices (for example, after selecting a category of art supply like paintbrush or yarn, different fields are generated, like color, weight, or material). As part of the process, I was able to learn a lot about software design, developing more organized and maintainable applications using React components, the challenges and rewards of cloud services, and the tradeoffs between SQL and more flexible NoSQL / JSON databases.

![image](https://github.com/user-attachments/assets/653a03e7-ef88-4768-a1b3-e5558fdc8e57)

---

Mobile first redesign and implementation of artsupplytracker using React and JavaScript.

I worked on this project with the concept of a mobile-first web application that tracks your art supplies.
You would be able to fill your collection on your laptop, then pull it up while shopping at the art store for reference.

I designed the project's layout using Figma, focusing on mobile design layouts first as that would be the primary platform.
You can view the original design at [figma.com/design/0LxqJbBWnw07SKJpn5pTVx/Art-Supply-Tracker--Mobile-](https://www.figma.com/design/0LxqJbBWnw07SKJpn5pTVx/Art-Supply-Tracker--Mobile-).

![image](https://github.com/user-attachments/assets/d359fdb9-3b77-40d5-b73f-c284d8303d79)  

I implemented authentication using Firebase, including an automatic email sign in link if you forget your password,
validation for when someone tries to create an account with an email that already exists, and so on.

![image](https://github.com/user-attachments/assets/3729b5f2-78bf-4503-8d56-56423b818411)  

After taking an advanced web development course during my Computer Science BS, I learned a lot more about Firebase, React, Node, and Express, and reimplemented this project in a more polished way, adding additional features and a database. 

The first version used a SQL database, Node, and Express, which you can find at [creative-project](https://github.com/roryhackney/creative-project).
The second version used a JSON database, React, and Firebase, which you can find at [creative-project-react](https://github.com/roryhackney/creative-project-react).
