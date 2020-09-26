### Change log

##### 8/12/2020 4:17pm EST

-made google Login 
-facebook doesnt work yet because website doesnt have url (of course...)
-this info is non critical- just didnt want to forget it- you break in and get my full name and email- congrats 
password: thelongstrengthenedbisk989&
email : rehash576750@gmail.com

* added a username dropdown item to dropdown menu.
-reorganized and refactored html/css- dropdown items now have cleaner animation
-design choice/tradeoff- there is now a 10em bottom margin on the dropdown component (idle whitespace as of now. should brainstorm solutions) done to accodate z-index property using elements- w/out, the dropdown would be over lapped by the rest of the components rendered into markup.

##### 9/13/2020 
changes made while lacking internet access. meaning these need debug/testing to make sure they are well integrated.

-refactored view-game component, making sure routing is all set up. this had been done already but wasnt sure it worked 100% well

-added links from games.component.ts so that you can navigate to view-game by clicking on a game title or cover image.

-added a default arg to rate.component.ts, the default value is rate and shows the 5 star rate thing
    - the mode 'avg' shows what the cummulative rating for that game is (im pretty sure a method in rating or star service needs debug for this to work)
    -the mode 'view' shows a list of every rating, should be able to sort by rating, alphebetize users, etc...
    -the mode 'all' shows the combined features ofthis component
-BIG IF: 
    -not sure if the default param thing is set up correctly
    -def not sure if the ngIf condtional is right for this kind of thing (*ngIf="mode == 'avg'")  

##### 9/14/2020

-added an auth-guard userAuthGuard, which is supposed to allow users to access their profile and update.create it.
this hasnt been implemented yet, i just entered it into the routing in app.module (returns true in all cases).

-working on game and profile components seperately. mostly css so no breaking changes expected.

-going to implement create-profile form now, or at least start working on that.


##### 9/25/2020

-we got parts of profile, create-profile, game-form working.
-in the process, broke the async pipe for categories, creators, console_makers, nintendo ... etc in game-form and others
(dont really know how that happened- did angular update and deprecate these features, vscode linting?)
-i think VSCODE LINTING did this- got a bunch of extensions to help debug the html, then these problems started happening.
