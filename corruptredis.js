const Redis = require('ioredis');
const redis = new Redis(); // or your config

async function corruptRedis() {
  await redis.set('test-corrupt', 'NotAValidJSON');
  console.log('Corrupted Redis key "test-corrupt" with invalid JSON');
  redis.disconnect();
}

corruptRedis();
