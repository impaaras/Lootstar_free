const movie_data = [
   
    {
        id: 1,
        imgUrl: "https://www.bollywoodhungama.com/wp-content/uploads/2019/08/War-1-5.jpg",
        title:"War",
        rating:"9.5",
        discription:"War is a 2019 Indian Hindi-language action thriller film directed by Siddharth Anand and produced by Aditya Chopra under his banner Yash Raj Films. Starring Hrithik Roshan, Tiger Shroff and Vaani Kapoor, the film follows an Indian soldier assigned to eliminate his former mentor who has gone rogue.",
    },
    {
        id: 2,
        imgUrl:"https://timesofindia.indiatimes.com/thumb/msid-73771697,width-1200,height-900,resizemode-4/.jpg",
        title:"Sufna",
        rating:"7.5",
        discription:"Sufna is the story of a man who falls in love with a daily wager from another village. The orphaned girl is awaiting her father's return and in this wait, paves a new way for the man she loves. How the story finally brings these two at a point of no return, is what this film is about.",
        url:"https://www.youtube.com/watch?v=5Z0XEsuJPX8"
    },
    {
        id: 3,
        imgUrl: "https://assets.gadgets360cdn.com/pricee/assets/product/201811/Sonus-Titu-and-Titus-Sweety-900_1542698933.jpg",
        title:"Sonu Ke Titu ki Sweety",
        rating:"10.9",
        discription:"Luv Ranjan — of Pyaar Ka Punchnama fame — is back with his team of actors, Nushrat Bharucha, Kartik Aaryan and Sunny Singh, and a new film, Sonu Ki Titu Ki Sweety. It is the story of a girlfriend and a friend fighting over the 'possession' of a man.",
        url:"https://www.youtube.com/watch?v=M2q64UowX9g"
    },
    {
        id: 4,
        imgUrl: "https://i.pinimg.com/736x/20/4c/9f/204c9fa48aab1181a0bfbc35c6c276ac.jpg",
        title:"Flash",
        rating:"5.6",
        discription:"The fictional character Flash, a superhero appearing in comic books published by DC Comics, ... Heatvisionblog.com. 2010-06-09. Archived from the original on 2012-07-31. Retrieved 2010-09-13.",
        url:"https://www.youtube.com/watch?v=OQbahzVWSqA"
    },
    {
        id: 5,
        imgUrl:"https://i.pinimg.com/originals/b2/09/0d/b2090d1ae0c016943371b6c01dddcf08.jpg",
        title:"Avengers",
        rating:"6.9",
        discription:"In the film, Nick Fury and the spy agency S.H.I.E.L.D. recruit Tony Stark, Steve Rogers, Bruce Banner, and Thor to form a team capable of stopping Thor's brother Loki from subjugating Earth. The film's development began when Marvel Studios received a loan from Merrill Lynch in April 2005.",
        url:"https://www.youtube.com/watch?v=6ZfuNTqbHE8"
    },
    {
        id: 6,
        imgUrl: "https://i.pinimg.com/originals/e6/a2/5a/e6a25a2855e741f7461fe1698db3153a.jpg",
        title:"Spider-Man",
        rating:"6.3",
        discription:'The film centers on outcast teen genius Peter Parker, who develops spider-like superhuman abilities after being bitten by a genetically-altered spider. Development on a live-action Spider-Man film began in the mid 1980s.',
        url:"https://www.youtube.com/watch?v=Nt9L1jCKGnE"
    },
    {
        id: 7,
        imgUrl: "https://m.media-amazon.com/images/M/MV5BYzAxNmE1MWItMmVhYi00NWU5LTkzMDgtN2Q0ZjliMDFhZDgwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
        title:"Shada",
        rating:"8.9",
        discription:"Shadaa ( transl. Bachelor) is a 2019 Indian Punjabi-language romantic comedy film written and ... Tools. What links here · Related changes · Upload file · Special pages · Permanent link · Page information · Cite this page · Wikidata item ...",
        url:"https://www.youtube.com/watch?v=ti94DXKnmkE"
    },
    {
        id: 8,
        imgUrl:"https://dailygazette.com/wp-content/uploads/2015/10/1002_the_walk.jpg",
        title:"Man on Wire",
        rating:"4.9",
        discription:"The film chronicles Philippe Petit's 1974 high-wire walk between the Twin Towers of New York's World Trade Center. ... The title of the film is taken from the police report that led to the arrest (and later release) of Petit, whose performance had lasted for almost one hour.",
        url:"https://www.youtube.com/watch?v=eKSeSX-dzso&t=2s"
    },
    {
        id: 9,
        imgUrl: "https://2.bp.blogspot.com/-nPdy7OWMiYQ/XQIbE3PXmHI/AAAAAAAAKL4/wFGBVaEClwovJfoBTht9jdG9LZkux8s9gCLcBGAs/s00/Sacred-Games-Posters-Wallpapers-01.jpg",
        title:"Sacred Games",
        rating:"7.9",
        discription:"Sacred Games is an Indian crime thriller web television series based on Vikram Chandra's 2006 novel of the same name. Sartaj Singh (Saif Ali Khan) is a troubled police officer in Mumbai who receives a phone call from gangster Ganesh Gaitonde (Nawazuddin Siddiqui), who tells him to save the city within 25 days",
        url:"https://www.youtube.com/watch?v=w-Xe8gLBc5I"
    },
    {
        id: 10,
        imgUrl: "https://i.pinimg.com/736x/2c/25/99/2c259912165061125328973e36f0b754.jpg",
        title:"Hanna",
        rating:"8.9",
        discription:"Hanna is a 2011 action thriller film directed by Joe Wright. The film stars Saoirse Ronan as the title character, a girl raised in the wilderness of northern Finland by her father, an ex-CIA operative (Eric Bana), who trains her as an assassin.",
        url:"https://www.youtube.com/watch?v=7kj1CfKTjzg"
    },
    {
        id:11,
        imgUrl:"https://media.santabanta.com/newsite/cinemascope/feed/four-more-shots3.jpg",
        title:"Four More Shots please!",
        rating:"7.5",
        discription:"The series follows the story of four unapologetically flawed women (two in their 30s and two in their early 20s) as they live, love, make mistakes and discover what really makes them tick through friendship and shots of tequila in millennial Mumbai; The series is Amazon Prime Video's first all-women-protagonists Indian ...",
        url:"https://www.youtube.com/watch?v=D7NCW8gMtVs"
    },
    {
        id: 12,
        imgUrl: "https://m.media-amazon.com/images/M/MV5BNWFmZmM1MTAtYjEwMS00MDQ1LThlNWYtMzE0MzJkMTJmY2JiXkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_.jpg",
        title:"Student of the year 2",
        rating:"6.3",
        discription:"Student Of The Year 2 is a sequel to the 2012 film, Student of the Year. The movie stars Tiger Shroff, Tara Sutaria, Ananya Pandey and Samir Soni in the lead roles. Student Of The Year 2",
        url:"https://www.youtube.com/watch?v=QZsthdsh6yk"
    },
    {
        id: 13,
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Bhoot_Film_Poster.jpg/220px-Bhoot_Film_Poster.jpg",
        title:"Bhoot",
        rating:"9.5",
        discription:"It is based on a true incident that took place in Mumbai, about the MV Wisdom incident in 2011, and tells the story of an officer who has to move an abandoned but haunted ship lying static on Juhu Beach. The film features Vicky Kaushal in lead role and is the first film of a planned horror film franchise.",
        url:"https://www.youtube.com/watch?v=ELcRnZ3kP08"
    },
    {
        id: 14,
        imgUrl:"https://i.pinimg.com/originals/88/43/1a/88431a9ed1430dd5359e13002b24c824.jpg",
        title:"You",
        rating:"7.5",
        discription:"Premise. The first season follows the story of Joe Goldberg, a bookstore manager in New York, who upon meeting Guinevere Beck, an aspiring writer, becomes infatuated with her. He feeds his toxic obsession using social media and other technology to track her presence and remove obstacles to their romance",
        url:"https://www.youtube.com/watch?v=ga1m0wjzscU"
    },
    {
        id: 15,
        imgUrl: "https://i.pinimg.com/564x/30/99/58/309958735ef25e73c3b2b90b2d3f8ec1.jpg",
        title:"Baghi 3",
        rating:"6.3",
        discription:"It is a remake of the 2012 Tamil-language film Vettai, the film follows Ronnie, a young man who protects his timid brother Vikram from bullies. He convinces Vikram to join the police force and works with him to take down criminals without exposing himself.",
        url:"https://www.youtube.com/watch?v=jQzDujMzfoU"
    },
    
    
];

export default movie_data;