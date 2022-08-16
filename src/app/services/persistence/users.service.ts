import { User } from "src/app/models";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, updateDoc } from '@firebase/firestore';

@Injectable()
export class UsersService {
	users;

	constructor(private afs: Firestore) {
		this.users = collection(this.afs, 'users')
	}

	getAll() {
		return collectionData(this.users, {
			idField: 'id'
		}) as Observable<User []>
	}

	create(user : User) {
		return addDoc(this.users, user)
	}

	update(user : Partial<User>) {
		const userDocumentReference = doc(
			this.users,
			`users/${user.id}`
		)
		return updateDoc(userDocumentReference, { ...user})
	}

	delete(id: string) {
		const userDocumentReference = doc(this.users, `users/${id}`)
		return deleteDoc(userDocumentReference)
	}
}