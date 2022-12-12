import { Injectable } from '@angular/core';
import { Storage, getDownloadURL, listAll, ref, ListResult } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FstorageService {

  constructor(private _fstorage: Storage) { }

  async getCarouselImages(): Promise<string[]>{
    const refCarousel = ref( this._fstorage, 'carousel');
    var imagesList: string[] = [];
    await listAll(refCarousel).then(
      async (listResult: ListResult) => {
        for(let item of listResult.items){
          const url= await getDownloadURL(item);
          imagesList.push(url)
        }
      }
    );
    return imagesList;
  }
}

