export const meetups = [
  {
    name: 'LeetNight: Code, Collaborate, Conquer!',
    description: `LeetNight is a free, welcoming meetup designed for coders eager to enhance their problem-solving skills. Whether you’re gearing up for technical interviews or just enjoy tackling algorithm challenges, this event offers a collaborative environment to learn and grow. It’s also a fantastic way to connect with fellow developers, share insights, and build skills together. Ready to level up? See you at Leetcode Night!`,
    to: `https://www.leetnight.com/`,
    image: '/meetups/leetcode.png',

  },
  {
    name: 'Javascript, Ruby and Python Meetup',
    description: `A combination of the YEGRB, Exchange.js, and Edmonton.py communities! A polyglot meetup that focuses on cool JavaScript, Ruby, and Python topics. Both students and working professionals are welcome!`,
    to: `https://exchangejs.com`,
    image: '/meetups/Python-js-ruby.png',
    socials: {
      slack: '#meetup-ruby, #meetup-javascript, #meetup-edmontonpy',
    },
  },
  {
    name: 'Edmonton .NET User Group',
    image: 'meetups/dotNet_logo.png',
    to: 'https://www.meetup.com/Edmonton-NET-User-Group/',
    description: 'The Edmonton .NET User Group is a non-profit organization which empowers the IT Professionals and Developers using the Microsoft .NET Framework.',
    socials: {
      slack: '#meetup-dotnet-edmug',
    },
  },
  {
    name: 'Edmonton R User Group',
    image: '/r.svg',
    to: 'https://www.meetup.com/edmonton-r-user-group-yegrug',
    description: 'The Edmonton R User Group (YEGRUG) is an R-enthusiast group hosting events on data wrangling to visualization and web development with R. Learn R, hone your skills, network, all skill levels are welcome.',
    socials: {
      slack: '#meetup-r',
    },
  },
  {
    name: 'Edmonton Women In Tech',
    image: '/meetups/yegwit.png',
    to: 'https://yegwit.com/',
    description: 'YEGWIT aims to build a strong and safe group for women, diverse genders, and allies in tech with the goal of fostering engagement and opportunity, providing mentorship, and creating community. We are establishing a group that allows individuals to share ideas, concerns, thoughts and actions, to create an equitable environment within the industry.',
  },
  {
    name: 'Weekly Dev Chat',
    image: '/weeklydevchat.svg',
    to: 'https://weeklydevchat.com/',
    description: 'Weekly Dev Chat is a place to ask questions, hear different viewpoints, and get to know your fellow developers. Every week there is an initial topic posted to get the discussion started. Sometimes we discuss the initial topic the entire chat, other times the topic changes several times through the natural flow of the conversation. Everyone and anyone is welcome to join as long as you are kind, supportive, and respectful of others.',
  },
  {
    name: 'Edmonton Data Science Community',
    image: '/meetups/DataScience',
    to: 'https://www.meetup.com/edmonton-data-science-community/',
    socials: {
      slack: '#data-science',
    },
    description: 'The Edmonton Data Community aims to build a safe space for folks in the data space to connect, share knowledge and grow together. Whether you want to talk about Python for Data Analytics or how to transform business requirements into data science products, this will be the place for you.',
  },
  {
    name: 'YEGSec',
    image: '/meetups/YEGSec.png',
    to: 'https://www.yegsec.ca',
    description: 'We meet on a monthly-ish basis to discuss security, drink beer, and socialize. If you\'re into that sort of thing then you should probably join us. If you hate waiting, and who  can blame you, you\'re more than welcome to join us in Slack. Tweet @yegsec for an invite!',
  },
  {
    name: 'Bsides Edmonton',
    image: 'events/bsides.png',
    to: 'https://www.bsidesedmonton.org/',
    description: 'BSides Edmonton is an annual Cyber Security Conference in the City of Edmonton.Security BSides is a community-driven Cyber Security Conference by cybersecurity community members. The goal is to expand the spectrum of conversation beyond the traditional confines of space and time. It creates opportunities for individuals to both present and participate in an intimate atmosphere that encourages collaboration.',
  },
  {
    name: 'Demo Camp',
    image: '/events/DemoCamp.png',
    to: 'https://www.eventbrite.ca/o/democamp-edmonton-56126644423',
    description: 'Started back in 2008, DemoCamp is an event that brings together developers, creatives, entrepreneurs and investors to share what they\'ve been working on and to find others in the community interested in similar topics. The rules for DemoCamp are simple: ten minutes to demo real, working products, followed by a few minutes for questions, and no slides allowed. Democamp is a community-run event by a team of volunteers.',
  },
  {
    name: 'HackEd',
    image: '/events/hackEd.png',
    to: 'https://hacked.compeclub.com/',
    description: 'One of Alberta\'s Largest Student Run Hackathons. HackED is the premiere annual 24-hour hackathon from the Computer Engineering Club of the University of Alberta.',
  },
  {
    name: 'Edmonton WordPress Meetup',
    image: '/meetups/wordpress.png',
    to: 'https://www.linkedin.com/groups/14490539/',
    description: 'The Edmonton WordPress Meetup is open to anyone and everyone locally who is interested in WordPress, the leading web publishing and open-source software platform. ',
  },
  {
    name: 'Google Developer Groups',
    image: '/events/gdgLogo.png',
    to: 'https://gdg.community.dev/gdg-cloud-edmonton',
    description: 'Google Developer Groups has an Edmonton chapter! Their vision is to foster an engaging and inclusive developer\'s community. A place where you can meet your fellow developers, career mentors, and boost your technical skills. Whether you are an advanced developer, or you just start to pivot your way in the tech industry, we welcome you to the community. They mostly focus on Google Technologies, such as Google Cloud Computing, Firebase, Flutter, Android, Machine Learning, and Earth Engine.',
  },
  {
    name: 'Rainforest Alberta',
    image: '/events/rac.png',
    to: 'https://www.rainforestab.ca/edmonton.html',
    description: 'Rainforest Alberta is an informal organization working towards improving Alberta\'s innovation ecosystem. They want Albertans to invent, prosper and move their ideas forward. Community members can join by signin a provided by them Social Contract. Their engagement with the Edmonton entrepreneurial community is through 3 different types of events: Weekly, Monthly & Annual Summits.',
  },
  {
    name: 'Edmonton Linux Users Group',
    image: '/events/elug.png',
    to: 'https://elug.ca',
    description: 'The Edmonton Linux User Group (ELUG) is a group of enthusiasts interested in sharing knowledge of Linux and GNU/Linux-based operating systems, experiences (and beer?), and enjoy the freedom and adventure of using free and open source software. Everybody is welcome. They virtually meet every 4th Thursday of the month.',
  },
  {
    name: 'Open Hardware Meetup',
    image: '/events/ohm.png',
    to: 'https://www.meetup.com/edmontonunlimited/events/pcwlzsyfchbpb/',
    description: 'The Open Hardware Meetup is a place where all kinds of people can share an interest in the intersection of hardware, software, connectivity, and user experience. Everyone is welcome. Some of their work examples from past includes: learn to solder, basics of arduino, automated basketball robots from high school team, magnetic computer displays for the virtually impaired. They meet every 2nd Thursday of every month.',
  },
  {
    name: 'Beta City YEG',
    to: 'https://betacity.ca',
    description: 'Beta City YEG is Edmonton’s citizen driven meetup with a mandate to connect citizens with opportunities to learn about, provide feedback for, and participate in projects that improve their community through connection and technology. They meet every 4th Wednesday of the month.',
  },
  {
    name: 'NeurAlbertaTech',
    image: '/events/nat.svg',
    to: 'https://neuralberta.tech/',
    description: 'NeurAlbertaTech is a nonprofit organization dedicated to fostering a cohesive and diverse neurotechnology ecosystem. Through a range of accessible educational resources, events, and digital platforms, we foster collaboration, skills development, and inclusivity within the neurotech community while supporting groundbreaking projects at every stage.',
  },
]
