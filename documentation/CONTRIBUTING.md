# IVDB Contributing Guidelines
### instructions for new developers to the Internet Videogame
#### Please scan and comprehend prior to getting started on your fork


# Index:
1. [Ngrx](#Ngrx)
2. [Styling](#Styling)
3. [Documentation](#Documentation)
4. [Site Architecture](#Site-Architecture)
5. [Connective Tissue](#Connective-tissue)
5. [Notes](#Notes)


# About
this is a medium-large sized angular application which uses Firestore as a back-end as a service.


# Ngrx 
and the following ngrx libraries are used in order to facilitate data flow and storage:
- @ngrx/store
- @ngrx/entity
- @ngrx/effects

for this reason, It is expected that smart / container components should connect to the store
by dispatching actions, and handle side effects (talking to external api) with effects.

version 2.0 used angular and rxjs, so you may find lingering components which get data with service and observable subscription.
These are fair game for refactoring, and it is good idea to check, but more than likely the case that they are not
tightly coupled to other parts of the site.

# Styling
version 3.0 uses sass (indented syntax)

In general, I have been disregarding all but essential styling since adding ngrx.
My reasoning is that my priority is getting data flow and event handling working solidly
and having tests in place, then turning my attention towards non-functional requirements.

This is for personal reasons, but I also think its not a bad idea as a general practice for new contributors
(feel free to open discussions with me, if you disagree)

Personally, I find myself getting stuck in obsessive cycles trying to get styles perfect,
disregarding more priorty requirements which will ultimately make a bigger difference in the site.

I also plan to employ bootstrap and angular material once moving on to architecting the production application layout.
So keep this in mind, as styles which you do choose to apply currently may change, or worse conflict with these late stage enhancements.

# Documentation
See the documents in the top level directory, called "documentation" for all of these

The requirement sheet is a decent reference (made after initial discussions with client)
but fairly limited in scope (we have advanced the initial ideas of the site quite a bit)

We have defined draft/incomplete class diagrams for the complete site.
To view/edit the file, use the site "draw.io" and upload the file you wish to modify.
Please be sure to tag me (and leading contributors) in a commit where you modify the UML (or make an issue or pull request about it)

Interaction (sequence) diagrams would be a welcome addition to the existing documentation.

Note that I havent been using the bug log as of version 3. If you intend on employing it, please erase the existing
contents (from version 2) or clearly designate the distinction (if you wish to preserve the old bugs, for whatever reason)

# Site-architecture
This is roughly based around the feature modules which the app.module employs/ routes to
```
-modules
  -user.module // non auth related user features: profile, preferences, etc
  -admin.module 
  -content.module
  -contrib.module
  -forum.module
  -game.module
  // core and shared are not routable components, you can learn more about them in "connective tissue" section (put a link here)
  -core.module 
  -shared.module
 -store
   -actions
   -reducers
   -effects
   -selectors
 -models
   -user
     -user.model.ts
     -profile
     -admin
     -mod
     -etc
   -content
     -watchlist
     -group
     -game
     -review
     -rating
     -stream
     -forum
     -thread
     -etc
-app.module
-
```
feature modules and their sub route/ components are elaborated below
## Games: 
you can browse games and learn more about game-info (how IVDB categorizes games)
```
./     			// base component - welcome page for game.component

./all       // games.browse - view a select amount of games, supports filtering and pagination, with view of gameCover, title, price, quick link to buy/rate/review

./:uid      // games.view - when you click on a game from browse, shows more info like description, game-info, pictures of game play and a comment section

./info      // games.info - widget with tabs, to learn about game-info by type, as well as our defintions for different game info categories
//lets avoid making routes more complicated than this
```
## Forum:
Access to IVDB forum, at highest level view- ie showing all forum families and a list of the current/active threads in them. in addition shows moderator / admin list, rules, top posters and links to games being discussed currently in a thread
```
./					// base component- welcome page for forum.component
./forum/:id
./forum/:forum_id/thread/:thread_id
```
 I need to review and possibly revise uml and models for forum. this is a 'nice-to-have' feature, dont prioritize its design and development till all other stuff is taken care of.

## Content:
Official content of IVDB includes news, streams (streaming-broadcasts and info), watchlists, official reviews and groups. Its posted on the homepage, typically tied to a game or other category related to gaming, and can be commented on and favorited by users
```
./
./all
./all/family=[:family]
./:uid
```

## Contrib (contributing):
Supports user contribution to the site, a portal through which users will rate, review, and otherwise interact with site, and have dashboards for organizing and managing their past contributions. 

In the beta version of this site, contributution data will be fed to machine learning functions which build a hidden profile on the user in question and allow us to make reccomendations about games and content they will like or wont like, prioritizing and customizing their feed.

- total avenues for user contribution to IVDB:
- rate a game
- review a game
- comment on a game, or piece of content
- comment on another users profile or review
- favorite a piece of content
- react to a piece of content: like, dislike, laugh (emoji support like modern social media platform)
- share a piece of content
- create a thread
- post in a thread
- reply to a comment
- suggest a feature or game - users should be able to provide feedback and feature requests, both through the forum (help and support threads), or suggestion form component
```
//contrib can be rerouted from user module, in case the user is examining their profile and wants to view past contributions:

user/contrib -> ./:username/own

./					                 //information and guidelines on contributing to IVDB / and a jumpuing off point where user can choose a option of how they want to contribte

./rate                       //browse all recent ratings added to site

./rate/game=[:uid]					 //see reviews submitted to a paticular game, submit your own

./rate/user=[:uid]					 //see the reviews submitted by a paticular user

// review follows this same route structure

./suggest                     // provide a suggestion to the site
```

many smaller components (comment section, favorite, react) are disperased throughout the site, and ultimately, it may make sense to make the above routes 
subroutes of the user and game modules ie.

 ```games/:uid/<rate/review>``` to see game ratings
 
  ```user/contrib/review``` to see all contributions by a certain user.


Then the smaller components can be added to shared module so you can simply add a comment to a game by viewing that game in the games module

In this case, contrib is more a design class then implemenation. 

There can, for example, be a ```action/reducer/selector/effect``` chain for contribs, without there
nescesarily being a module and sub route tree for contributions 

## Admin
Create,Read,Update and Delete hub for admin users to administer the site
```
./                      // an overview of site activity and quick link portal to edit different areas of the site. maybe a dashboard that integrates the two

./games                 // tab select games or game info to create, update or delete entities from these areas

./content               // create, read, update, delete content by family/type

./users                 // view all users of the site, and their contributions, review threads, comments that are flagged, make decisions about banning certain users

./forum                 // administer forums, recruit, screen/train and assign moderators to threads. move or delete a paticular thread.
```

## User
a module for authenticated users to create profile, provide preference data and manage their contributions to the site. users authenticated and non authenticated can use the user module to view other user profiles and contributions (in cases where they arent blocked user or private profiles) 
```
./ 							// informs of user features of IVDB, for authenticated users serves as a portal to navigate - profiles they follow, recent contrib by them or others
./profile/own   // view your profile
./profile/edit  // create, update, delete a profile assigned to the auth user
./profile/:uid  // view a different user profile page
./profile/all   // browse profiles of users of IVDB
./preferences   // view your prefernce data and how IVDB processes it (ie show the logic of how liking game A and game B means we think you will like game C)
./prefernces/edit   //provide prefernce data via one of two means ([#16](https://github.com/bps-github7/IVDB/issues/16))
./contrib       // view your past contributions, manage them
./contrib/:uid  // view a contribution, such as a review, and posibly react to it (like, favorite, dislike, share, ...etc)
```

# Connective-tissue
## a quick rundown on the vocabulary employed throughout the IVDB:

we possibly invented/ redefined some terms while creating the data model.

I am not an expert on videogames and their terminology, nor a big user of forums.
So if the names of classes or properties do not suite you/ you believe them to be incorrect
please contact me immedietly and we can discuss finding a more appropriate title.

1. games: 
games **must** have a 
- title
- price
- coverImageURL (please try to source it freely- think wikipedia commons)
- about
- categories
- creators
- platform, which informs
	- consoles
game-info:
is the term for the above 4 attributes of games. there meanings are self evident but please reach out if you dont understand
- category: broad families that group games - action, adventure, platformer, RPG, FPS, sports, city builder, arcade...
- creator: game-development studios- activision, impression games, blizzard, etc
- platforms: family which different consoles live in- nintendo, sony, microsoft, pc
- VG_console: the name of the interface which describes a certain game console. we havent yet defined the actions, reducer and effects for adding, updating or deleteing a console
content: official content posted to IVDB
- watchlists: vary in flavor, but generally advise users about what games to pay attention to, like news but contain a variety of different game reccomendations
- news: informs readers about a new console, an upcomming game release, new informtion regarding "gamer-culture"
- streams: forcasts about popular streams, such as title, streamers, description, games being streamed, link to watch, expected stream times
- official reviews: reviews of games posted by admin or site owner. these types of reviews have comment sections and appear on the home page
- groups: users can join a group to recieve tailored info about topic they are interested in.
contribution:
- rate: user can rate game 1-5 stars
- review: user can provide a qualitative review of game. note a distinction here- admins and site owner review of games go in content, and are considered "official reviews", these are reviews displayed on homepage, users' ```contrib/reviews``` require a little bit more work to find (under ```games/:id/reviews```, or ```user/profile/contrib/reviews```)
- comment: user can comment on a game, official site content, other users profiles
- forum activity: user can post to threads, create new thread, apply to be mod or admin
- suggestion: user can provide suggestions (to be reviewed by admins) about a new game to add, game info, etc
users: 
have a (content-creation) privallege of 1 - 5.
- guests : privallege 1 means you cannot leave comments on other users profiles, rate/review games, create a profile, access auth guarded routes
- account-holders: privallege 2 means you can create an account, rate or review games, post to forums, create threads
- moderators: privallege of 3, you can moderate forums and comment sections by being assigned to one.
	regular users need apply to begin screening process, and must be apporved by 2 moderators or an admin to begin the training process
- admins: privallege of 4, administer all site content. they have the power to ban or block users, close down threads, erase posts, add new games, content, approve official reviews, etc...
- Site-owner: privallege of 5, can override admin decisions, and make impactful decisions about how the site is ran. (needs further definition)
Forums: 
- there are few forums, many threads within them, and many more posts within those
- forum info is the broad category of site data which describes forums
	- (forum) categories : group forums, by default there are three forum categories- (game related, IVDB related, help and support)
		for example, help and support is a category where forums such as "change-log", "bug-reporting" and "feature requests" forums live
		each of these forums contain threads which users can use to request fixes and features for the forum, and developers can report modifications regarding the overall forum system
	- prefixes: mod and admin applied descriptors of a thread, which can be used to guide contributions or warn offending users that their thread is pending review
	- types: different threads can be typed to inform their format, for example you can choose "question and answer", "poll", "discussion". the default format is discussion
	- metadata: the names of the above descriptors
- part of moderators jobs will be to provide community guidelines, which should be able to be pinned to the top of forums, threads, etc
- regular users should become aware of the requirements to become mod or admin, and how to apply when these requirements are filled (ie, create 3 threads, reply to 20 user posts, no recent banning, etc...)
admins: 
can adminster 4 seperate areas
- game and game info
- forum and forum info
- site content
- users and privalleges

# Notes
this is a working document, work in progress/ expect it to change for the time being


other suggestions for section to add to contribution guide:

- Steps for creating good issues or pull requests.
- Links to external documentation, mailing lists, or a code of conduct.
- Community and behavioral expectations.
