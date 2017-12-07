# My fall'17 mobile training with Ionic & Angular #
### Ionic link: https://dashboard.ionicjs.com/app/ccdcf8f7 ###
### npm link: https://www.npmjs.com/package/my-fall-training ###
### apk path: ./apk/MFT.apk ###

## Dec, 3 | Snapshot #2 (Release) ##
Now app has menu and 4 pages(news, favorites, settings, about).
All app data is storing in Ionic Storage(keys: news, favorites, icons). First time it loads from .json files in /assets folder.
Dozens of functions and two services is working now.
First service helps to format date from ISO format and has two functions, that can return formatted date string or time object. 
Second service helps to transfer data between pages & components asynchronously.
Now user has the ability to:
- switch language in settings.
- open and close article's detail view.
- add new article.
- edit articles that he(she) added.
- delete articles that he(she) added.
- add some article in favorites and delete this from favotires.
- search articles in news & favorites.

Most of the actions are accompanied by the appearance of alerts that inform user or allow user to make a choice.
Also, the application works well when you rotate the screen or start it in a browser.
So, today it's high-grade hybrid application and my great experience in this field of activity.

## Nov, 24 | Snapshot #1 (First Steps) ##
Now app has menu and 3 pages(home, list, settings). 
It's linked with github.com and ionicframework.com. 
Today this app can be launched in three ways:
- browser (by using command "ionic serve" it will be open on localhost:8200)
- mobile phone (by using Ionic View app with public code: "ccdcf8f7")
- mobile phone & emulator (by using apk files,that also working correctly with android version 6.3+), 
  PC & browser (by using apk files and expansions/programs)

## Nov, 20 | Started ##
