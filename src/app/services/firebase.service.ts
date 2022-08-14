import { Injectable } from '@angular/core';
import { serverTimestamp } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

  get timestamp() {
    //todo prob a bandaid solution, should just do this manually when serverTimestamp is needed
    return serverTimestamp
  };

}




