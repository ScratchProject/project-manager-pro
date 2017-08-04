# Taskify

## About
Our vision was to develop a wep app that would allow for teams to work on projects together. The idea is that each new **Project** (a.k.a Feature) can be created along with the amount of time that the project should be completed in. Then, each Project can be clicked on which will render a new page listing all of the **Tasks** (a.k.a FeatureItem) which can be added or removed and have a radio button for completion. Upon completion, the green circular bar on the Feature needs to be updated accordingly. By comparing the green bar (progress) against the red bar (time), teams will be able to keep track of their progress/schedule.


### Back-End ###
The Database is built on **PostreSQL** with a **Sequelize ORM**. If you are unsure how to use the database, it is quite easy to set up. We will get to that briefly. First, we have already built a fully functioning server/database with 8 main routes that cover CRUD for both the **Features** as well as the **FeatureItems**. If you want to do authorization or sockets, you will have to cover those yourself.

- Routes can be found in `./server/routes/index.js`

### Front-End ###
Our front end is built using **React!**. The naming here can get a little confusing, but we started with it and it just eventually stuck. So if you look in `./client` you will find all of our code. Stylesheets obviously holds all of our styles. It is all current ordered on a single css page. There isn't too much and they are generally grouped into sections... Again, sorry if the naming is confusing. Goodluck! We will help by breaking down how the files are linked together.

**React Components**
I guess this is pretty self explanatory. You just have to follow which components are being rendered, starting with `./client/App.jsx`
- `./client/feature/...` basically holds all of the information regarding the Project. **Title, Red (time) circle, Green (progress) circle, Update Info Button, Remove Feature Button** 
- `./client/checkPoint/...` is kind of named wrong. It's supposed to be all of the list items. We havent worked with this page yet really... For now, the only important file inside of this is CheckpointCtrl, I believe. It should be the one that is rendering the input fields.
- ***Notes*** - Each feature is being given its own state and we are setting the setInterval on each feature itself. It may seem a bit strange to have multiple states outside of our main state. But documentation says that this is the best way to maintain *pseudo-states*.

**Goodluck fellow cohortmates! May our project live on!**

App
  Login
  Project
    CheckpointCtr
      FeatureInfo (name/dur)
    FeaturesCtr
      Feature
        Remove
        Timer
          circularProgressBar 
        Progress
         circularProgressBar 
        Info Btn
          Modal To Add Tasks