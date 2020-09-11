let db = {
  users: [
    {
      userId: '32p09412pofjhadfl;akjsdhf',
      email: 'validemail@gmail.com',
      handle: 'user',
      createdAt: '2020-09-08T17:18:14.584Z',
      imageUrl: 'imaaage/asdfsdfsd/asdfasd',
      bio: 'Hello, my name is user, nice to meet you',
      website: 'http://user.com',
      location: 'London, Uk',
    },
  ],
  screams: [
    {
      userHandle: 'user',
      body: 'This is the scream body',
      createdAt: '2020-09-08T17:18:14.584Z',
      likeCount: 5,
      commentCount: 2,
    },
  ],
  comments: [
    {
      userHandle: 'user',
      screamId: 'dfksjdflasdjk3r09i3r2',
      body: 'nice post!',
      createdAt: '2020-09-08T17:18:14.584Z',
    },
  ],
  notification: [
    {
      recipient: 'user',
      sender: 'john',
      read: 'true | false',
      screamId: 'dfaljkads9u34298hr2oin23o3in',
      type: 'like | comment',
      createdAt: '2020-09-08T17:18:14.584Z',
    },
  ],
};

const userDetails = {
  // Redux data
  credentials: {
    userId: 'N43KJ5H43KJHREW4J5H3JWMERHB',
    email: 'user@email.com',
    handle: 'user',
    createdAt: '2019-03-15T10:59:52.798Z',
    imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh',
    bio: 'Hello, my name is user, nice to meet you',
    website: 'https://user.com',
    location: 'Lonodn, UK',
  },
  likes: [
    {
      userHandle: 'user',
      screamId: 'hh7O5oWfWucVzGbHH2pa',
    },
    {
      userHandle: 'user',
      screamId: '3IOnFoQexRcofs5OhBXO',
    },
  ],
};
