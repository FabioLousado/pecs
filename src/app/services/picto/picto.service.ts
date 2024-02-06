import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { forkJoin, switchMap } from 'rxjs';
import { Picto } from '../../classes/Picto';
import { FirebaseApp } from '@angular/fire/app';
import { Firestore, addDoc, collection, getDocs, query } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PictoService {

  @Inject(FirebaseApp)

  picto: Picto[] = []

  constructor(private http: HttpClient, private db : Firestore) { }

  async addPicto(picto : Picto) {
    const docRef = await addDoc(collection(this.db, 'picto'), {
      name: picto.nom,
      data: picto.data
    });
    console.log("Document written with ID: ", docRef.id);
  }

  async getPictos() {
    return (
     await getDocs(query(collection(this.db, 'picto')))
    ).docs.map((doc) => new Picto(doc.id, doc.data()['name'], doc.data()['data']));
   }

  getFromAraasac(page: number) {
    this.picto = []
    this.http.get<any[]>(`https://api.arasaac.org/v1/pictograms/all/fr`).subscribe(
      {
        next: list => {
          for (let i = 15 * page; i < 15 * page + 15; i++) {
            let doc = list.at(i)
            this.getById(doc)
          }
        }
      }
    )
  }

  private getById(doc : any) {
    this.http.get(`https://api.arasaac.org/v1/pictograms/${doc._id}?resolution=500&download=false`, { responseType: 'blob' })
      .subscribe(
        data => this.addData(data, doc.keywords.at(0).keyword)
      )
  }

  search(search: string) {
    this.picto = []
    this.http.get<any[]>(`https://api.arasaac.org/v1/pictograms/fr/search/${search}`).subscribe(
      {
        next: list => {
          for(let doc of list){
            this.getById(doc)
          }
        }
      }
    )
  }


  addData(data: Blob, name: string = "") {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      // Push the data URL to an array for previewing
      this.picto.push(new Picto('', name, event.target.result));
    };
    reader.readAsDataURL(data);
  }
}
