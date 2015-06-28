# Node - Ampersand & React - Base Project
## Requirements
```
Node: brew install node
Heroku Toolbelt: https://toolbelt.heroku.com
```

## Developer Setup
```
npm install
npm run build
npm run start-dev
open 'http://localhost:PORT/'
```

## Heroku Deployment
### Create the app (first time deploying)
```
open terminal
cd /path/to/project
heroku create nameofproject
```

### Deploy the app
```
npm run build
git add .
git commit -m "Name Of Commit"
git push heroku master
heroku open
```