import Redis from 'ioredis';

import crypt from './Crypt';

class Invite {
  constructor() {
    this.redis = new Redis({
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      keyPrefix: 'invite:',
    });
  }

  async create({ userId, familyId }) {
    const value = JSON.stringify({ userId, familyId });
    const key = crypt.encrypt(value);
    await this.redis.set(key, value, 'ex', 60 * 60 * 24);
    return key;
  }

  async verify(key) {
    const invite = await this.redis.get(key);

    return invite ? JSON.parse(invite) : null;
  }

  del(key) {
    return this.redis.del(key);
  }
}

export default new Invite();
