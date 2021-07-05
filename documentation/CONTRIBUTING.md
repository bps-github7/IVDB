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
put here a decription of the sub components of each feature module
You might consider listing the sub routes for each feature component

-games: the top level component lists all the games in the database, which can be browsed and clicked on to learn more
  - game-info: you can learn more about how IVDB categorizes games, by browsing game info (see definition below)



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
