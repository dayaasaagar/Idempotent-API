

const Redis = require('ioredis');
const redis = new Redis();

async function clearRedis() {
  await redis.flushall();
  console.log('Redis cache cleared.');
}

clearRedis();
