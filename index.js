//**server creation**//

require('dotenv').config()
const express = require('express');
const app = express()
const port = 3000

const githubData={
  "login": "ArchitTiwary007",
  "id": 203236244,
  "node_id": "U_kgDODB0jlA",
  "avatar_url": "https://avatars.githubusercontent.com/u/203236244?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ArchitTiwary007",
  "html_url": "https://github.com/ArchitTiwary007",
  "followers_url": "https://api.github.com/users/ArchitTiwary007/followers",
  "following_url": "https://api.github.com/users/ArchitTiwary007/following{/other_user}",
  "gists_url": "https://api.github.com/users/ArchitTiwary007/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ArchitTiwary007/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ArchitTiwary007/subscriptions",
  "organizations_url": "https://api.github.com/users/ArchitTiwary007/orgs",
  "repos_url": "https://api.github.com/users/ArchitTiwary007/repos",
  "events_url": "https://api.github.com/users/ArchitTiwary007/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ArchitTiwary007/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Archit Tiwary",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Coding enthusiast !! Just love learning new things!!  ",
  "twitter_username": null,
  "public_repos": 10,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-03-14T08:31:44Z",
  "updated_at": "2025-09-12T16:34:38Z"
}

//"/"=>most important!!

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('akkidotin')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login here</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Chai Aur Code</h2>')
})

app.get('/github', (req, res) => {
    res.send(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
