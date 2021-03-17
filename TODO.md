### TODO for internet videogame db

##### Css:
1. app.component.css- max width 800px centered- img ignore this rule for some reason- need to fix that. something im misunderstanding about css, i suspect (once again- css weakness).


##### timelines:
1. the great form shift- make all site forms reactive, utalizing the reusable, ````tested```` 'reactive-_____-form-control'
    may need to make more of these so that there are enough for every time, including your custom multi-text and other misc.
2. db schema shift- rate and review documents should be identified with `gamePK_username`  
3. should really pacckage components and parts of the site together, like 


[] - game-info-form and console-info-form have a persistent bug- edit button doesnt work after something was already edited before.

1. DB schemas
    [] update ALL FIREBASE COLLECTIONS/ RXJS bridges so that the uid of a document is stored in that document. simplifies all things pertaining to routes and accessing observables. obs.valueChanges({idField : 'uid'}) this override only works when the ovs is not being emitted as return value.

2. finish comment section- 
    [] media insert option 
    [] automatic meta data collection- saying at least the time and date of comment when created or edited last.

3. get comment-section working across the site.
    [X] View game component - we still dont have it so that the signed in user doesnt have access to other users accounts.
    [] view Reviews
    [] streams
    [] watchlists
    [] etc... 

4. Comment section validation
    [] Regular users should only be able to edit/ delete THEIR comments
    [] Admins and mods should be able to at least delete any comment, maybe edit them as well.
    [] guests?

5. GameInfo isnt working in admin/game-form OR view-game, game-card:
    [] debug gameinfo service
    [] rewrite it with what you know now in mind, cut down on redundancuy/ inelegant code wh/is abuntant in that service

