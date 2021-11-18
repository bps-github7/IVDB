# IVDB Contributing Guidelines
### instructions for new developers to the Internet Videogame
Please scan and comprehend prior to getting started on your fork


# Index:
1. [About](#about)
2. [Documentation](#documentation)
3. [Site Architecturea](#site-architecture)
4. [Feature Modules](#feature-modules)
5. [Connective Tissue](#connective-tissue)
6. [Notes](#notes)


# About
this is a medium-large sized Angular application which uses Firestore as a back-end as a service.

NGRX and the following libraries are used in order to facilitate data flow and storage:
- @ngrx/store
- @ngrx/entity
- @ngrx/effects

It is expected that smart / container components should connect to the store
by dispatching actions, and handle side effects (talking to external APIs) with effects.

version 2.0 used angular and rxjs, so you may find lingering components which get data with service and observable subscription.
These are fair game for refactoring.

version 3.0 uses sass (indented syntax)

In general, I have been disregarding all but essential styling since adding ngrx.

Bootstrap ^5.1.0 is being used

Not totally style related, but we are also using Angular Material (Dont reinvent the wheel!)

# Documentation
See the documents sub-directory in the project root, called "documentation" for all of these

1) Requirement Sheet: is a decent reference (made after initial discussions with client) but fairly limited in scope.
2) Class Diagrams: we have defined draft class diagrams for the complete site. Make sure you refer to the most up to date version.
To view/edit the file, use the site "draw.io" and upload the file you wish to modify.
3) Sequence diagrams: We don't have any yet, they would be a welcome addition to docs, but we havent needed to make any yet.
4) Bug log: I haven't used this in a while. If you intend on employing it, please erase the existing
contents (from version 2) or clearly designate the distinction (if you wish to preserve the old bugs, for whatever reason)

Please be sure to tag me (and leading contributors) in a commit where you modify the UML (or make an issue or pull request about it)

# Site Architecture
This is roughly based around the feature modules which the app.module employs/ routes to
```
-modules
  -user.module
  -admin.module 
  -content.module
  -forum.module
  -game.module
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
-components
  - dropdown
  - ...
-app.module
-app.component
-app-routing.module
```
Both core and shared modules are not feature modules, but rather serve their intended/typical purpose in a lazily loaded angular application

-core: Auth service lives here. Nothing else of note at this point. For pieces of the application that are meant to be loaded only once

-shared: Components and other logic which we expect to use across feature modules, like a favorite button, carousel or data-table.
shared also contains directives, (route) guards, validators, and pipes, as well as a module called material which intiailizes all needed material modules.

Note there is also ```components``` directory, which holds components declared at the app level. Make sure to distinguish between this and shared module.
While neither contains standalone components meant to be routable to, components declared in ```shared``` are accessible to any feature module, whereas
thosed defined in ```components``` are only accessible to the root / app component.

# Feature Modules
In all cases, the root of a feature module is an overview/ hub page for sub content of the module. it contains a rolling feed of all new or prioritized content in that feature module, as well as links and other information for understanding this data or traversing the sub routes of the feature module.

## Games: 
you can browse games and learn more about game-info (how IVDB categorizes games)
```
./     			
./all       //view a select amount of games, supports filtering and pagination, with view of gameCover, title, price, quick link to buy/rate/review
./:uid      // when you click on a game from browse, shows more info like description, game-info, pictures of game play and a comment section
./info      // widget with tabs, to learn about game-info by type, as well as our defintions for different game info categories
```

## Forum
Access to IVDB forum, at highest level view- ie showing all forum families and a list of the current/active threads in them. in addition shows moderator / admin list, rules, top posters and links to games being discussed currently in a thread
```
./					                            
./forum/:id                             // open a forum
./forum/:forum_id/thread/:thread_id     // view a thread
```

## Content
Official content of IVDB includes news, streams (streaming-broadcasts and info), watchlists, official reviews and groups. Its posted on the homepage, typically tied to a game or other category related to gaming, and can be commented on and favorited by users
```
./
./all
./all/family=[:family]
./:uid
```

## Admin
Create,Read,Update and Delete hub for admin users to administer the site
```
./                      
./games                 // tab select games or game info to create, update or delete entities from these areas
./content               // create, read, update, delete content by family/type
./users                 // view all users of the site, and their contributions, review threads, comments that are flagged, make decisions about banning certain users
./forum                 // administer forums, recruit, screen/train and assign moderators to threads. move or delete a paticular thread.
```

## User
a module for authenticated users to create profile, provide preference data and manage their contributions to the site. users authenticated and non authenticated can use the user module to view other user profiles and contributions (in cases where they arent blocked user or private profiles) 
```
./ 							
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
## a quick rundown on the vocabulary employed throughout the IVDB and anatomy of data types:

## games 
- title
- price
- coverImageURL (please try to source it freely- ie wikipedia commons)
- about
- categories
- creators
- platform, which informs
	- consoles

## game-info: 
4 families of attributes for classifying games (game-metadata)
- category: broad families that group games - action, adventure, platformer, RPG, FPS, sports, city builder, arcade...
- creator: game-development studios- activision, impression games, blizzard, etc
- platforms: family which different consoles live in- nintendo, sony, microsoft, pc
- VG_console: the name of the interface which describes a certain game console.

## content: 
official (admin-posted) IVDB content
- watchlists: vary in flavor, but generally advise users about what games to pay attention to, like news but 
- news: informs readers about a new console, an upcomming game release, new informtion regarding "gamer-culture"
- streams: forcasts about popular streams, such as title, streamers, description, games being streamed, link to watch, expected stream times
- official reviews: reviews of games posted by admin or site owner. these types of reviews have comment sections and appear on the home page
- groups: users can join (or create) a group to recieve tailored info about topic they are interested in.

## contribution:
IVDB content posted by account holding users, editable by author, moderators or admins.
- rate: user can rate game 1-5 stars
- review: user can provide a qualitative review of game. 
- comment: user can comment on a game, official site content, other users profiles
- forum activity: user can post to threads, create new thread, apply to be mod or admin
- suggestion: user can provide suggestions (to be reviewed by admins) about a new game to add, game info, etc

## users: 
have a (content-creation) privallege of 1 - 5.
- guests : privallege 1 means you cannot leave comments on other users profiles, rate/review games, create a profile or access auth guarded routes
- account-holders: privallege 2 means you can create an account, rate or review games, post to forums and create threads
- moderators: privallege of 3, you can moderate forums and comment sections by being assigned to one.
- admins: privallege of 4, administer all site content. they have the power to ban or block users, close down threads, erase posts, add new games and more.
- Site-owner: privallege of 5, can override admin decisions, and make impactful decisions about how the site is ran. (needs further definition)

## Forums: 
- there are few forums, many threads within them, and many more posts within those
## forum info 
is the broad category of site data which describes forums (forum metadata)
- (forum) categories : group forums, by default there are three forum categories- (game related, IVDB related, help and support)
- prefixes: mod and admin applied descriptors of a thread, which can be used to guide contributions or warn offending users that their thread is pending review
- types: different threads can be typed to inform their format, for example you can choose "question and answer", "poll", "discussion". the default format is         

## admins: 
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
