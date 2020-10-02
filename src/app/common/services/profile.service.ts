import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Profile } from 'src/app/models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


    profileCollection : AngularFirestoreCollection<Profile>
    profileDocument : AngularFirestoreDocument<Profile>
    profiles : Observable<Profile []>
    profile : Observable<any>

    constructor(private afs : AngularFirestore) {
        this.profileCollection = this.afs.collection('profiles');
        this.profiles = this.profileCollection.valueChanges()

     }

    get$(displayName : string) : Observable<any> {
        this.profile = this.profileCollection.doc('BenSehnert').valueChanges(); 
        return this.profile
    }

    getAll$() {
        return this.profiles
    }

    exists(displayName : string) {
        return this.get$(displayName).subscribe(profile => {
            if (profile) return true;
        });
    } 

    create(profile) {
        this.profileCollection.add({
            publicProfile : {
                nickname: profile.publicProfile.nickname,
                profileImg : profile.publicProfile.profileImg,
                backgroundImg : profile.publicProfile.backgroundImg,
                bio : profile.publicProfile.bio,
                gamerTags : profile.publicProfile.gamerTags,
                links : profile.publicProfile.links,
                displaySettings : {
                    completionPreferences : false,
                    displayPreferences : true
                }

            },
            preferences : {
                likes : {
                    games : profile.preferences.likes.games,
                    consoles : profile.preferences.likes.consoles,
                    categories : profile.preferences.likes.categories,
                    creators : profile.preferences.likes.creators,
                    consoleMakers : profile.preferences.likes.consoleMakers
                },
                dislikes : {
                    games : profile.preferences.dislikes.games,
                    consoles : profile.preferences.dislikes.consoles,
                    categories : profile.preferences.dislikes.categories,
                    creators : profile.preferences.dislikes.creators,
                    consoleMakers : profile.preferences.dislikes.consoleMakers},
                historic : {
                    favoriteGame : profile.preferences.historic.favoriteGame,
                    favoriteConsole : profile.preferences.historic.favoriteConsole,
                    firstGameEverPlayed : profile.preferences.historic.firstGameEverPlayed,
                    firstConsoleEverPlayed : profile.preferences.historic.firstConsoleEverPlayed,
                    childhoodFavoriteGames : profile.preferences.historic.childhoodFavoriteGames
                },
                currentlyPlaying : {
                    games : profile.preferences.currentlyPlaying.games,
                    consoles : profile.preferences.currentlyPlaying.consoles
                }
            },
            accountSettings : {
                username : profile.accountSettings.username,
                email : profile.accountSettings.email,
            }
        })
    }

    save(profile, displayName) {
        if (this.exists(displayName)) this.update(profile, displayName)
        else this.create(profile);
    }

    update(profile, displayName) {


        //techincally, the code is the same whether we are updating or creating new file
        //could be mistaken/ and this is future problem area, but for now this seems right
        

        //THIS IS the clunkiest way to make fields optional. look into alternatives PLEASE!
        this.profileCollection.doc(displayName).update({
            publicProfile : {
                nickname: profile.publicProfile.nickname,
                profileImg : profile.publicProfile.profileImg,
                backgroundImg : profile.publicProfile.backgroundImg,
                bio : profile.publicProfile.bio,
                gamerTags : profile.publicProfile.gamerTags,
                links : profile.publicProfile.links,
                displaySettings : {
                    completionPreferences : false,
                    displayPreferences : true
                }

            },
            preferences : {
                likes : {
                    games : profile.preferences.likes.games,
                    consoles : profile.preferences.likes.consoles,
                    categories : profile.preferences.likes.categories,
                    creators : profile.preferences.likes.creators,
                    consoleMakers : profile.preferences.likes.consoleMakers
                },
                dislikes : {
                    games : profile.preferences.dislikes.games,
                    consoles : profile.preferences.dislikes.consoles,
                    categories : profile.preferences.dislikes.categories,
                    creators : profile.preferences.dislikes.creators,
                    consoleMakers : profile.preferences.dislikes.consoleMakers},
                historic : {
                    favoriteGame : profile.preferences.historic.favoriteGame,
                    favoriteConsole : profile.preferences.historic.favoriteConsole,
                    firstGameEverPlayed : profile.preferences.historic.firstGameEverPlayed,
                    firstConsoleEverPlayed : profile.preferences.historic.firstConsoleEverPlayed,
                    childhoodFavoriteGames : profile.preferences.historic.childhoodFavoriteGames
                },
                currentlyPlaying : {
                    games : profile.preferences.currentlyPlaying.games,
                    consoles : profile.preferences.currentlyPlaying.consoles
                }
            },
            accountSettings : {
                username : profile.accountSettings.username,
                email : profile.accountSettings.email,
            }
        })

        // if (this.exists(displayName)) {
        //     this.profileCollection.doc(displayName).set(profile)
        // }
        // else this.create(profile, displayName)
        
    }


    // create(profile : Profile, displayName : string) {
    //     this.profileCollection.a
    // }
}
