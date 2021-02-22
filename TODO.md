### TODO for internet videogame db


1. DB schemas
    [] rate and review documents should be identified with `gamePK_username`
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

