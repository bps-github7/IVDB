import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
// import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Game } from 'src/app/models/content/Game';
import { GameInfo } from 'src/app/models/content/GameInfo';
import { GameDescriptor } from 'src/app/models/content/GameDescriptor';
import { VgConsole } from 'src/app/models/content/VgConsole';

@Injectable({
  providedIn: 'root'
})

class videogame_Info implements GameInfo {
    categories: GameDescriptor [];
    console_makers: GameDescriptor [];
    creators: GameDescriptor [];
    microsoft: VgConsole [];
    nintendo: VgConsole [];
    pc: VgConsole []
    sony: VgConsole [];
    


}

export class GameInfoService {

    // shouldnt it be <game info []>?
    gameInfoCollection : AngularFirestoreCollection<GameInfo>;
    gameInfoDocument : AngularFirestoreDocument<GameInfo>;
    doc_id = 'KZX1GyjNGtwUzHsyICBO';
    gameInfo$;
    gameInfo = new videogame_Info();

    constructor(private afs : AngularFirestore) {
        this.gameInfoCollection = this.afs.collection<GameInfo>('game_info');
        this.gameInfo$ = this.gameInfoCollection.doc(this.doc_id).valueChanges();
        this.categories$.subscribe(arr => {
            this.gameInfo.categories = Object.keys(arr).map(categoryTitle => {
                return arr[categoryTitle]
            });            
        });
        this.creators$.subscribe(arr => {
            this.gameInfo.creators = Object.keys(arr).map(categoryTitle => {
                return arr[categoryTitle]
            });            
        });
        this.console_makers$.subscribe(arr => {
            this.gameInfo.console_makers = Object.keys(arr).map(console_maker_title => {
                return arr[console_maker_title]
            });            
        });
        this.sony$.subscribe(arr => {
            this.gameInfo.sony = Object.keys(arr).map(console_title => {
                return arr[console_title]
            });            
        });
        this.nintendo$.subscribe(arr => {
            this.gameInfo.nintendo = Object.keys(arr).map(console_title => {
                return arr[console_title]
            });            
        });
        this.microsoft$.subscribe(arr => {
            this.gameInfo.microsoft = Object.keys(arr).map(console_title => {
                return arr[console_title]
            });            
        });
        this.pc$.subscribe(arr => {
            this.gameInfo.pc = Object.keys(arr).map(console_title => {
                return arr[console_title]
            });            
        });
    }

    get categories$() : Observable <GameDescriptor []> {
        return this.gameInfoCollection
        .doc<GameDescriptor []>('/categories').valueChanges();
    }

    get_categories_array() : GameDescriptor [] {
        return this.gameInfo.categories;
    }

    find_category(category : string) : GameDescriptor {
        return this.get_categories_array().filter(arr => arr.title.toLowerCase() == category.toLowerCase())[0];
        
    }

    get creators$() : Observable <GameDescriptor []> {
        return this.gameInfoCollection
        .doc<GameDescriptor []>('/creators').valueChanges();
    }

    
    get_creators_array() : GameDescriptor [] {
        return this.gameInfo.creators;
    }

    find_creator(creator : string) : GameDescriptor {
        let foundCreator = this.get_creators_array().filter(arr => arr.title.toLowerCase() == creator.toLowerCase());
        return foundCreator[0];
    }

    get console_makers$() : Observable<GameDescriptor []> {
        return this.gameInfoCollection
        .doc<GameDescriptor []>('/console-makers').valueChanges();
    }    

    
    get_console_makers_array() : GameDescriptor [] {
        return this.gameInfo.console_makers;
    }

    find_console_maker(console_maker : string) : GameDescriptor {
        let found_console_maker = this.get_console_makers_array().filter(arr => arr.title.toLowerCase() == console_maker.toLowerCase());
        return found_console_maker[0];
    }

    //implement these after you fix up their db entries.

    get sony$() : Observable<VgConsole []> {
        return this.gameInfoCollection
        .doc<VgConsole []>('/sony').valueChanges();;
    }

    
    get_sony_array() : VgConsole [] {
        return this.gameInfo.sony;
    }

    find_sony(console_name : string) : VgConsole {
        let found_console = this.get_sony_array().filter(arr => arr.name.toLowerCase() == console_name.toLowerCase());
        return found_console[0];
    }


    get nintendo$() : Observable<VgConsole []> {
        return this.gameInfoCollection
        .doc<VgConsole []>('/nintendo').valueChanges();;
    }

    get_nintendo_array() : VgConsole [] {
        return this.gameInfo.nintendo;
    }

    find_nintendo(console_name : string) : VgConsole {
        let found_console = this.get_nintendo_array().filter(arr => arr.name.toLowerCase() == console_name.toLowerCase());
        return found_console[0];
    }

    get microsoft$() : Observable<VgConsole []> {
        return this.gameInfoCollection
        .doc<VgConsole []>('/microsoft').valueChanges();;
    }

    get_microsoft_array() : VgConsole [] {
        return this.gameInfo.microsoft;
    }

    find_microsoft(console_name : string) : VgConsole {
        let found_console = this.get_microsoft_array().filter(arr => arr.name.toLowerCase() == console_name.toLowerCase());
        return found_console[0];
    }



    get pc$() : Observable<VgConsole []> {
        return this.gameInfoCollection.doc<VgConsole []>('/pc').valueChanges();;
    }

    get_pc_array() : VgConsole [] {
        return this.gameInfo.pc;
    }

    find_pc(console_name : string) : VgConsole {
        let found_console = this.get_pc_array().filter(arr => arr.name.toLowerCase() == console_name.toLowerCase());
        return found_console[0];
    }


}