import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  // JSON "set" example
  async stocker(cle: string, value: any) {
    await Preferences.set({
      key: cle,
      value: JSON.stringify(value),
    });
  }

  // JSON "get" example
  async recuperer(cle: string) {
    const ret = await Preferences.get({ key: cle });
    return JSON.parse(ret.value!);
  }
}
