export class Gift {
  constructor (data) {
    this.id = data.id || data._id
    this.tag = data.tag
    this.url = data.url
    this.opened = data.opened
    this.creatorId = data.creatorId
    this.profilesOpened = data.profilesOpened
  }
}

// const giftData = {
//   "_id": "65d300ff1105f5ffe194922a",
//   "tag": "hello ",
//   "url": "https://images.unsplash.com/photo-1647221598272-9aa015392c81?q=60&w=400&h=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "opened": false,
//   "creatorId": "65cf89a6731f2d86392a1dde",
//   "profileIdsOpened": [
//     "65cbfb73b554c64939b75c31"
//   ],
//   "createdAt": "2024-02-19T07:19:27.067Z",
//   "updatedAt": "2024-02-19T20:42:20.646Z",
//   "__v": 0,
//   "profilesOpened": [
//     {
//       "_id": "65cbfb73b554c64939b75c31",
//       "name": "jchav5601",
//       "picture": "https://s.gravatar.com/avatar/19b36d581d9400f60c9b64b8e13cb927?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fjc.png",
//       "id": "65cbfb73b554c64939b75c31"
//     }
//   ],
//   "id": "65d300ff1105f5ffe194922a"
// }