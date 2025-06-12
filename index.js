const express = require('express')
const Redis = require('ioredis')
const {v4: uuidv4}=  require('uuid')

const app = express();
app.use(express.json());

const redis = new Redis();
//redis.connect().catch(console.error);



async function startServer(PORT){
    
app.post('/pay',async(req,res)=> {

    const idempotencyKey = req.header('Idempotency-Key');
    if(!idempotencyKey)
        {
                return res.status(400).json({error:"Missing indempotency Key"});

        }
        const cached = await redis.get(idempotencyKey);

        if(cached)
            {
                return res.status(200).json({error:"from server ${PORT}",...JSON.parse(cached),cached:true})
            }
        

    const result = {
        transactionId: uuidv4(),
        status: 'Payment Processed',
        time: new Date().toISOString()
    };
    await redis.set(idempotencyKey, JSON.stringify(result),'EX',300);
    res.status(201).json({from:'Server ${PORT}',...result, cached:false});


});
app.listen(PORT,()=>{ console.log(`server running on ${PORT}`);

});

}
module.exports=startServer;