import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId()
];

export const users = [
  {
    _id: userIds[0],
    firstName: "test",
    lastName: "me",
    email: "aaaaaaa@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "https://res.cloudinary.com/dkuamfhwm/image/upload/v1700690601/bobokingdom/rye7wgajroyukvvfqxgd.jpg",
    friends: [],
    location: "San Fran, CA",
    occupation: "Software Engineer",
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Steve",
    lastName: "Ralph",
    email: "thataaa@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "https://res.cloudinary.com/dkuamfhwm/image/upload/v1700690598/bobokingdom/t0qgoimpbdbw0umg1wl9.jpg",
    friends: [],
    location: "New York, CA",
    occupation: "Degenerate",
    viewedProfile: 12351,
    impressions: 55555,
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Some",
    lastName: "Guy",
    email: "someguy@gmail.com",
    password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
    picturePath: "https://res.cloudinary.com/dkuamfhwm/image/upload/v1700690598/bobokingdom/ibwkjdgp9mrwgzp1b8ux.jpg",
    friends: [],
    location: "Canada, CA",
    occupation: "Data Scientist Hacker",
    viewedProfile: 45468,
    impressions: 19986,
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: "Whatcha",
    lastName: "Doing",
    email: "whatchadoing@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "https://res.cloudinary.com/dkuamfhwm/image/upload/v1700690599/bobokingdom/xisabvyydnrfvuiap4jd.jpg",
    friends: [],
    location: "Korea, CA",
    occupation: "Educator",
    viewedProfile: 41024,
    impressions: 55316,
    createdAt: 1219214568,
    updatedAt: 1219214568,
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: "Jane",
    lastName: "Doe",
    email: "janedoe@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "https://res.cloudinary.com/dkuamfhwm/image/upload/v1700690598/bobokingdom/ney8sx91tqkmtwuqgysi.jpg",
    friends: [],
    location: "Utah, CA",
    occupation: "Hacker",
    viewedProfile: 40212,
    impressions: 7758,
    createdAt: 1493463661,
    updatedAt: 1493463661,
    __v: 0,
  },
  {
    _id: userIds[5],
    firstName: "Harvey",
    lastName: "Dunn",
    email: "harveydunn@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "https://res.cloudinary.com/dkuamfhwm/image/upload/v1700690599/bobokingdom/vdvgz6mehihzmp59tvct.jpg",
    friends: [],
    location: "Los Angeles, CA",
    occupation: "Journalist",
    viewedProfile: 976,
    impressions: 4658,
    createdAt: 1381326073,
    updatedAt: 1381326073,
    __v: 0,
  },
  {
    _id: userIds[6],
    firstName: "Carly",
    lastName: "Vowel",
    email: "carlyvowel@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "https://res.cloudinary.com/dkuamfhwm/image/upload/v1700690599/bobokingdom/bvq7aibpigbmamcnsymy.jpg",
    friends: [],
    location: "Chicago, IL",
    occupation: "Nurse",
    viewedProfile: 1510,
    impressions: 77579,
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[7],
    firstName: "Jessica",
    lastName: "Dunn",
    email: "jessicadunn@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "https://res.cloudinary.com/dkuamfhwm/image/upload/v1700690600/bobokingdom/eq3k9cqq2ghttixswblq.jpg",
    friends: [],
    location: "Washington, DC",
    occupation: "A Student",
    viewedProfile: 19420,
    impressions: 82970,
    createdAt: 1369908044,
    updatedAt: 1359322268,
    __v: 0,
  },
  {
    _id: userIds[8],
    firstName: "Long",
    lastName: "Chen",
    email: "longchen@gmail.com",
    password: "zb2225612",
    picturePath: "https://res.cloudinary.com/dkuamfhwm/image/upload/v1700942761/bobokingdom/wplpstfigq4qnkvmc0gu.jpg",
    friends: [],
    location: "Palo Alto, CA",
    occupation: "Sales Agent",
    viewedProfile: 88888,
    impressions: 1234565,
    createdAt: 1714704329,
    updatedAt: 1359322269,
    __v: 0,
  }
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Steve",
    lastName: "Ralph",
    location: "New York, CA",
    description: "Some really long random description",
    picturePath: "https://res.cloudinary.com/dkuamfhwm/image/upload/v1700690618/bobokingdom/jmqxexststo7t1eu3jpf.jpg",
    userPicturePath: "https://res.cloudinary.com/dkuamfhwm/image/upload/v1700690598/bobokingdom/t0qgoimpbdbw0umg1wl9.jpg",
    likes: new Map([
      [userIds[0], { liked: true, firstName: users[0].firstName, lastName: users[0].lastName }],
      [userIds[2], { liked: true, firstName: users[2].firstName, lastName: users[2].lastName }],
      [userIds[3], { liked: true, firstName: users[3].firstName, lastName: users[3].lastName }],
      [userIds[4], { liked: true, firstName: users[4].firstName, lastName: users[4].lastName }],
    ]),
    comments: [
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        userId: userIds[2],
        firstName: users[2].firstName,
        lastName: users[2].lastName,
        userPicturePath: users[2].picturePath,
        commentLikes: new Map([
          [userIds[1], { liked: true, firstName: users[2].firstName, lastName: users[2].lastName}],
          [userIds[3], { liked: true, firstName: users[3].firstName, lastName: users[3].lastName}]

        ])
      },
      {
        text: "Couldn't agree more!",
        userId: userIds[3],
        firstName: users[3].firstName,
        lastName: users[3].lastName,
        userPicturePath: users[3].picturePath,
        commentLikes: new Map([
          [userIds[1], { liked: true, firstName: users[1].firstName, lastName: users[1].lastName}],
          [userIds[3], { liked: true, firstName: users[3].firstName, lastName: users[3].lastName}]

        ])
      }
    ],

  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    firstName: "Whatcha",
    lastName: "Doing",
    location: "Korea, CA",
    description:
      "Another really long random description. This one is longer than the previous one.",
    picturePath: "https://res.cloudinary.com/dkuamfhwm/image/upload/v1700690618/bobokingdom/w65idnajvm06begyxyja.jpg",
    userPicturePath: "https://res.cloudinary.com/dkuamfhwm/image/upload/v1700690599/bobokingdom/xisabvyydnrfvuiap4jd.jpg",
    likes: new Map([
      [userIds[7], { liked: true, firstName: users[7].firstName, lastName: users[7].lastName }],
      [userIds[4], { liked: true, firstName: users[4].firstName, lastName: users[4].lastName }],
      [userIds[1], { liked: true, firstName: users[1].firstName, lastName: users[1].lastName }],
      [userIds[2], { liked: true, firstName: users[2].firstName, lastName: users[2].lastName }],
    ]),
    comments: [
      {
        text: "This is so insightful!",
        userId: userIds[0],
        firstName: users[0].firstName,
        lastName: users[0].lastName,
        userPicturePath: users[0].picturePath,
        commentLikes: new Map([
          [userIds[1], { liked: true, firstName: users[1].firstName, lastName: users[1].lastName}],
          [userIds[3], { liked: true, firstName: users[3].firstName, lastName: users[3].lastName}]

        ])
      },
      {
        text: "Amazing content, keep it up!",
        userId: userIds[4],
        firstName: users[4].firstName,
        lastName: users[4].lastName,
        userPicturePath: users[4].picturePath,
        commentLikes: new Map([
          [userIds[1], { liked: true, firstName: users[1].firstName, lastName: users[1].lastName}],
          [userIds[3], { liked: true, firstName: users[3].firstName, lastName: users[3].lastName}]

        ])
      }
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[4],
    firstName: "Jane",
    lastName: "Doe",
    location: "Utah, CA",
    description:
      "This is the last really long random description. This one is longer than the previous one.",
    picturePath: "https://res.cloudinary.com/dkuamfhwm/image/upload/v1700690618/bobokingdom/e7ibbkbavyqwmsydafk9.jpg",
    userPicturePath: "https://res.cloudinary.com/dkuamfhwm/image/upload/v1700690598/bobokingdom/ney8sx91tqkmtwuqgysi.jpg",
    likes: new Map([
      [userIds[1], { liked: true, firstName: users[1].firstName, lastName: users[1].lastName }],
      [userIds[6], { liked: true, firstName: users[6].firstName, lastName: users[6].lastName }],
      [userIds[3], { liked: true, firstName: users[3].firstName, lastName: users[3].lastName }],
      [userIds[5], { liked: true, firstName: users[5].firstName, lastName: users[5].lastName }],
    ]),
    comments: [
      {
        text: "Really thoughtful post, Jane.",
        userId: userIds[1],
        firstName: users[1].firstName,
        lastName: users[1].lastName,
        userPicturePath: users[1].picturePath,
        commentLikes: new Map([
          [userIds[1], { liked: true, firstName: users[1].firstName, lastName: users[1].lastName}],
          [userIds[3], { liked: true, firstName: users[3].firstName, lastName: users[3].lastName}]

        ])
      },
      {
        text: "I love your perspective on this!",
        userId: userIds[5],
        firstName: users[5].firstName,
        lastName: users[5].lastName,
        userPicturePath: users[5].picturePath,
        commentLikes: new Map([
          [userIds[1], { liked: true, firstName: users[1].firstName, lastName: users[1].lastName}],
          [userIds[3], { liked: true, firstName: users[3].firstName, lastName: users[3].lastName}]

        ])
      },
      {
        text: "Couldn't have said it better myself!",
        userId: userIds[7],
        firstName: users[7].firstName,
        lastName: users[7].lastName,
        userPicturePath: users[7].picturePath,
        commentLikes: new Map([
          [userIds[1], { liked: true, firstName: users[1].firstName, lastName: users[1].lastName}],
          [userIds[3], { liked: true, firstName: users[3].firstName, lastName: users[3].lastName}]

        ])
      }
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[5],
    firstName: "Harvey",
    lastName: "Dunn",
    location: "Los Angeles, CA",
    description:
      "This is the last really long random description. This one is longer than the previous one. Man I'm bored. I'm going to keep typing until I run out of things to say.",
    picturePath: "https://res.cloudinary.com/dkuamfhwm/image/upload/v1700690619/bobokingdom/sqojzkaqere7ckxsenib.jpg",
    userPicturePath: "https://res.cloudinary.com/dkuamfhwm/image/upload/v1700690599/bobokingdom/vdvgz6mehihzmp59tvct.jpg",
    likes: new Map([
      [userIds[1], { liked: true, firstName: users[1].firstName, lastName: users[1].lastName }],
      [userIds[6], { liked: true, firstName: users[6].firstName, lastName: users[6].lastName }],
      [userIds[3], { liked: true, firstName: users[3].firstName, lastName: users[3].lastName }],
    ]),
    comments: [
      {
        text: "This is quite an interesting take, Harvey.",
        userId: userIds[6],
        firstName: users[6].firstName,
        lastName: users[6].lastName,
        userPicturePath: users[6].picturePath,
        commentLikes: new Map([
          [userIds[1], { liked: true, firstName: users[1].firstName, lastName: users[1].lastName}],
          [userIds[3], { liked: true, firstName: users[3].firstName, lastName: users[3].lastName}]

        ])
      },
      {
        text: "Harvey always coming through with the great content!",
        userId: userIds[2],
        firstName: users[2].firstName,
        lastName: users[2].lastName,
        userPicturePath: users[2].picturePath,
        commentLikes: new Map([
          [userIds[1], { liked: true, firstName: users[1].firstName, lastName: users[1].lastName}],
          [userIds[3], { liked: true, firstName: users[3].firstName, lastName: users[3].lastName}]

        ])
      },
      {
        text: "I'm here for this!",
        userId: userIds[0],
        firstName: users[0].firstName,
        lastName: users[0].lastName,
        userPicturePath: users[0].picturePath,
        commentLikes: new Map([
          [userIds[1], { liked: true, firstName: users[1].firstName, lastName: users[1].lastName}],
          [userIds[3], { liked: true, firstName: users[3].firstName, lastName: users[3].lastName}]

        ])
      }
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[6],
    firstName: "Carly",
    lastName: "Vowel",
    location: "Chicago, IL",
    description:
      "Just a short description. I'm tired of typing. I'm going to play video games now.",
    picturePath: "https://res.cloudinary.com/dkuamfhwm/image/upload/v1700690620/bobokingdom/pu1vs49z3lmsvlfm6phz.jpg",
    userPicturePath: "https://res.cloudinary.com/dkuamfhwm/image/upload/v1700690599/bobokingdom/bvq7aibpigbmamcnsymy.jpg",
    likes: new Map([
      [userIds[1], { liked: true, firstName: users[1].firstName, lastName: users[1].lastName }],
      [userIds[3], { liked: true, firstName: users[3].firstName, lastName: users[3].lastName }],
      [userIds[5], { liked: true, firstName: users[5].firstName, lastName: users[5].lastName }],
      [userIds[7], { liked: true, firstName: users[7].firstName, lastName: users[7].lastName }],
    ]),
    comments: [
      {
        text: "Your posts are always so relatable, Carly!",
        userId: userIds[1],
        firstName: users[1].firstName,
        lastName: users[1].lastName,
        userPicturePath: users[1].picturePath,
        commentLikes: new Map([
          [userIds[1], { liked: true, firstName: users[1].firstName, lastName: users[1].lastName}],
          [userIds[3], { liked: true, firstName: users[3].firstName, lastName: users[3].lastName}]

        ])
      },
      {
        text: "Great job, keep it up!",
        userId: userIds[3],
        firstName: users[3].firstName,
        lastName: users[3].lastName,
        userPicturePath: users[3].picturePath,
        commentLikes: new Map([
          [userIds[1], { liked: true, firstName: users[1].firstName, lastName: users[1].lastName}],
          [userIds[3], { liked: true, firstName: users[3].firstName, lastName: users[3].lastName}]
        ])
      }
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[7],
    firstName: "Jessica",
    lastName: "Dunn",
    location: "Washington, DC",
    description:
      "For the last time, I'm going to play video games now. I'm tired of typing. I'm going to play video games now.",
    picturePath: "https://res.cloudinary.com/dkuamfhwm/image/upload/v1700690619/bobokingdom/tyoplf62zk5vetzqupxk.jpg",
    userPicturePath: "https://res.cloudinary.com/dkuamfhwm/image/upload/v1700690600/bobokingdom/eq3k9cqq2ghttixswblq.jpg",
    likes: new Map([
      [userIds[1], { liked: true, firstName: users[1].firstName, lastName: users[1].lastName }],
      [userIds[2], { liked: true, firstName: users[2].firstName, lastName: users[2].lastName }],
    ]),

    comments: [
      {
        text: "Jessica, this is awesome!",
        userId: userIds[4],
        firstName: users[4].firstName,
        lastName: users[4].lastName,
        userPicturePath: users[4].picturePath,
        commentLikes: new Map([
          [userIds[1], { liked: true, firstName: users[1].firstName, lastName: users[1].lastName}],
          [userIds[3], { liked: true, firstName: users[3].firstName, lastName: users[3].lastName}]
        ])
      },
      {
        text: "So glad you shared this.",
        userId: userIds[5],
        firstName: users[5].firstName,
        lastName: users[5].lastName,
        userPicturePath: users[5].picturePath,
        commentLikes: new Map([
          [userIds[1], { liked: true, firstName: users[1].firstName, lastName: users[1].lastName}],
          [userIds[3], { liked: true, firstName: users[3].firstName, lastName: users[3].lastName}]
        ])
      }
    ],
  },
];
export const messages = [
  {
    _id: new mongoose.Types.ObjectId(),
    senderId: userIds[0],
    senderName: 'James Bond',
    picturePath: "https://res.cloudinary.com/dkuamfhwm/image/upload/v1700690601/bobokingdom/rye7wgajroyukvvfqxgd.jpg",
    receiverId: '65792c4cf7afeadd70541379',
    content: "Hey, how are you doing?",
    timestamp: new Date(),
    isRead: false
  },
  {
    _id: new mongoose.Types.ObjectId(),
    senderId: userIds[1],
    senderName: 'Steve Ralph',
    picturePath: "https://res.cloudinary.com/dkuamfhwm/image/upload/v1700690598/bobokingdom/t0qgoimpbdbw0umg1wl9.jpg",
    receiverId: '65792c4cf7afeadd70541379',
    content: "I'm good, thanks! What about you?",
    timestamp: new Date(),
    isRead: false
  },
  {
    _id: new mongoose.Types.ObjectId(),
    senderId: userIds[2],
    senderName: 'Rob Samadrala',
    picturePath: "https://res.cloudinary.com/dkuamfhwm/image/upload/v1700690598/bobokingdom/ibwkjdgp9mrwgzp1b8ux.jpg",
    receiverId: '65792c4cf7afeadd70541379',
    content: "Did you see the game last night?",
    timestamp: new Date(),
    isRead: false
  },
  {
    _id: new mongoose.Types.ObjectId(),
    senderId: userIds[3],
    senderName: 'Bindu Alexander',
    picturePath: "https://res.cloudinary.com/dkuamfhwm/image/upload/v1700690599/bobokingdom/xisabvyydnrfvuiap4jd.jpg",
    receiverId: '65792c4cf7afeadd70541379',
    content: "Yes, it was amazing!",
    timestamp: new Date(),
    isRead: true
  },
  // ... more messages
];
