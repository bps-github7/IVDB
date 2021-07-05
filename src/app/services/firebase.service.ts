import { Injectable } from '@angular/core';
import firebase from 'firebase/app'; 
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

  get timestamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
  };

}