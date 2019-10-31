import Cryptr from 'cryptr';

import cryptConfig from '../config/crypt';

class Crypt {
  constructor() {
    this.crypt = new Cryptr(cryptConfig.key);
  }
}

export default new Crypt().crypt;
