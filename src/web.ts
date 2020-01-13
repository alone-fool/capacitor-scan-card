import { WebPlugin } from '@capacitor/core';
import { scanCardPlugin } from './definitions';

export class scanCardWeb extends WebPlugin implements scanCardPlugin {
  constructor() {
    super({
      name: 'scanCard',
      platforms: ['web', 'Andriod', 'IOS']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }


}

const scanCard = new scanCardWeb();

export { scanCard };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(scanCard);
