# Node-Express-Friend-Finder
[Node-Express-Friend-Finder](https://immense-plateau-53936.herokuapp.com/)

**Object**

This full-stack app determine compatibility with other ... cats. Maybe that's why it's not completely finished. I had to have a special tutuorial session to understand that there's extra code required to access static files, e.g. ```app.use(express.static(path.join(__dirname + '/app', 'public')));```

That line of code lets this image path return the adorable kitty face on my home and survey pages:
```img src="assets/kitty_face.png"```

This was a confusing project. I look forward to coming back to it and finishing so the modal reveals the Purrrfect Match.

***Technology used***

This app uses JavaScript, Node.js, Express, and three NPM packages: express, body-parser and path

***Code excerpts***

Middleware in action:

```app.get('/survey', function (req, res) {
res.sendFile(path.join(__dirname, '../public/survey.html'));
});
```
![screen cap of working app](https://github.com/green64/Node-Express-Friend-Finder/blob/master/app/public/assets/screen_cap_working.png)

This app was working ... something I tweaked while trying to get the modal portion finished broke it. I'm going to turn it in, walk away, and finish it another day.

***Update***
Whoo hoo! A few projects later I fixed some broken code and my app's working now. On to the next challenge ...


