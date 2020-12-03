import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
// import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Game } from 'src/app/models/content/Game';
import { gameInfo } from 'src/app/models/content/GameInfo';
import { Game_Descriptor } from 'src/app/models/content/Game_Descriptor';
import { VG_Console } from 'src/app/models/content/VG_Console';

@Injectable({
  providedIn: 'root'
})

class GameInfo implements gameInfo {
    categories: Game_Descriptor [];
    console_makers: Game_Descriptor [];
    creators: Game_Descriptor [];
    microsoft: VG_Console [];
    nintendo: VG_Console [];
    pc: VG_Console []
    sony: VG_Console [];
    


}

export class GameInfoService {

    gameInfoCollection : AngularFirestoreCollection<gameInfo>;
    gameInfoDocument : AngularFirestoreDocument<gameInfo>;
    doc_id = 'KZX1GyjNGtwUzHsyICBO';
    gameInfo$;
    gameInfo = new GameInfo();

    constructor(private afs : AngularFirestore) {
        this.gameInfoCollection = this.afs.collection<GameInfo>('game_info');
        this.gameInfo$ = this.gameInfoCollection.doc(this.doc_id).valueChanges();
    }

    /* Would it be easier to just get all the different attributes  
    of gameInfo object filled out in the begginning, then return single attribute
    on need-to-know basis? Sort of, yes. Definitely less code than this! (and less tight coupling)
     
    DEV notes Wednesday 11/3/2020 11:03am EST- FW this ^^, tons of boilerplate code in this service,
    not to mention its gonna get much much worse once you add the capability for admins to add, edit and delete gameInfo! 
    */

    get categories$() : Observable <Game_Descriptor []> {
        return this.gameInfoCollection
        .doc<Game_Descriptor []>('/categories').valueChanges();
    }

    get_categories_array() : Game_Descriptor [] {
        this.categories$.subscribe(arr => {
            this.gameInfo.categories = Object.keys(arr).map(categoryTitle => {
                return arr[categoryTitle]
            });            
        });
        return this.gameInfo.categories;
    }

    find_category(category : string) : Game_Descriptor {
        let foundCategory = this.get_categories_array().filter(arr => arr.title.toLowerCase() == category.toLowerCase());
        return foundCategory[0];
    }

    get creators$() : Observable <Game_Descriptor []> {
        return this.gameInfoCollection
        .doc<Game_Descriptor []>('/creators').valueChanges();
    }

    
    get_creators_array() : Game_Descriptor [] {
        this.creators$.subscribe(arr => {
            this.gameInfo.creators = Object.keys(arr).map(categoryTitle => {
                return arr[categoryTitle]
            });            
        });
        return this.gameInfo.creators;
    }

    find_creator(creator : string) : Game_Descriptor {
        let foundCreator = this.get_creators_array().filter(arr => arr.title.toLowerCase() == creator.toLowerCase());
        return foundCreator[0];
    }

    get console_makers$() : Observable<Game_Descriptor []> {
        return this.gameInfoCollection
        .doc<Game_Descriptor []>('/console-makers').valueChanges();
    }    

    
    get_console_makers_array() : Game_Descriptor [] {
        this.console_makers$.subscribe(arr => {
            this.gameInfo.console_makers = Object.keys(arr).map(console_maker_title => {
                return arr[console_maker_title]
            });            
        });
        return this.gameInfo.console_makers;
    }

    find_console_maker(console_maker : string) : Game_Descriptor {
        let found_console_maker = this.get_console_makers_array().filter(arr => arr.title.toLowerCase() == console_maker.toLowerCase());
        return found_console_maker[0];
    }

    //implement these after you fix up their db entries.

    get sony$() : Observable<VG_Console []> {
        return this.gameInfoCollection
        .doc<VG_Console []>('/sony').valueChanges();;
    }

    
    get_sony_array() : VG_Console [] {
        this.sony$.subscribe(arr => {
            this.gameInfo.sony = Object.keys(arr).map(console_title => {
                return arr[console_title]
            });            
        });
        return this.gameInfo.sony;
    }

    find_sony(console_name : string) : VG_Console {
        let found_console = this.get_sony_array().filter(arr => arr.name.toLowerCase() == console_name.toLowerCase());
        return found_console[0];
    }


    get nintendo$() : Observable<VG_Console []> {
        return this.gameInfoCollection
        .doc<VG_Console []>('/nintendo').valueChanges();;
    }

    get_nintendo_array() : VG_Console [] {
        this.nintendo$.subscribe(arr => {
            this.gameInfo.nintendo = Object.keys(arr).map(console_title => {
                return arr[console_title]
            });            
        });
        return this.gameInfo.nintendo;
    }

    find_nintendo(console_name : string) : VG_Console {
        let found_console = this.get_nintendo_array().filter(arr => arr.name.toLowerCase() == console_name.toLowerCase());
        return found_console[0];
    }

    get microsoft$() : Observable<VG_Console []> {
        return this.gameInfoCollection
        .doc<VG_Console []>('/microsoft').valueChanges();;
    }

    get_microsoft_array() : VG_Console [] {
        this.microsoft$.subscribe(arr => {
            this.gameInfo.microsoft = Object.keys(arr).map(console_title => {
                return arr[console_title]
            });            
        });
        return this.gameInfo.microsoft;
    }

    find_microsoft(console_name : string) : VG_Console {
        let found_console = this.get_microsoft_array().filter(arr => arr.name.toLowerCase() == console_name.toLowerCase());
        return found_console[0];
    }



    get pc$() : Observable<VG_Console []> {
        return this.gameInfoCollection.doc<VG_Console []>('/pc').valueChanges();;
    }

    get_pc_array() : VG_Console [] {
        this.pc$.subscribe(arr => {
            this.gameInfo.pc = Object.keys(arr).map(console_title => {
                return arr[console_title]
            });            
        });
        return this.gameInfo.pc;
    }

    find_pc(console_name : string) : VG_Console {
        let found_console = this.get_pc_array().filter(arr => arr.name.toLowerCase() == console_name.toLowerCase());
        return found_console[0];
    }


}