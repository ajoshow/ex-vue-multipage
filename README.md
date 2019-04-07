# ex-vue-multipage
A starter project skeleton for multi-pages(entries) website. The project consists of frontend and backend modules. 

This project try to achieve following:   
- server side web (jsp) page rendering (choice of your like) 
- server side web routing 
- each web page contains its own bundle js
- web backend (spring boot 2.x) baked by gradle
- web frontend (vue 2.x) baked by npm & webpack
- frontend generates multiple entries for each backend page.

#### Initiate project 
```
vue-frontend> npm install
```
Backend shall be imported as Gralde project. 

#### Start front-end dev Server.
```
vue-frontend> npm run serve
```

#### Build, output bundle.js for each pages.
```
vue-frontend> npm run build
vue-frontend> npm run build:prod
```

#### Copy all .js files from frontend output directory to backend static directory for js. 
```
vue-frontend> npm run copy
```

#### Watch all .js source, run build & copy on any changes.
```
vue-frontend> npm run src:watch
```
#### Alias for run build & serve.
```
vue-frontend> npm run live
```

#### Build and copy in production mode.
```
vue-frontend> npm run deploy
```

---
### Configure page entries 
vue-frontend/webpack/path.config.js
```javascript
const config = {
  entry: {
    'home/bundle' : path.resolve(__dirname, '../src/page/index.js'),
    'page1/bundle' : path.resolve(__dirname, '../src/page/page1.js')
    // {pageDir}/{jsName} : {jsSource}
  }
};
```
The bundle outputs to build/ folder. Please refers <b>dev.config.js</b> and <b>prod.config.js</b>.  

---
#### Backend js directory
The backend default javascript location is at: <b>vue-backend/src/main/resources/static/js/</b>

---
### Quick Guide
For frontend developer:  
1. To add/edit/remove pages, go to webpack/path.config.js  
2. /src contains three sub-directories:
   - common: shared javascript files. 
   - component: .vue components. 
   - page: bundle javascript for each page.
3. /public contains static files used by dev server, for test and quick inspection purpose only.
   - "npm run serve" to start dev serve 
4. After done src implementations, we can use "npm run build" and manually move all build/js/ to {backend_resources}/static/js/
   - or "npm run copy" let script do the copy for you.
   - or start another terminal and "npm run src:watch", let script do build & copy automatically whenever js source is changed.
5. Use "npm run deploy" to output minify and uglify bundle js to the backend side.

For backend developer:
1. Only need to make sure JSP (or html...etc) is correctly include its own bundle js
2. Hot deployment or rebuild project may need to live refresh any changes from the frontend side. 
   - otherwise, restart server is required.     