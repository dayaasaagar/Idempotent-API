1. I created 4 servers using Node.js to simulate distributed system.
2. Used UUID based idempotency key which I passed through headers. 
3. Stored the responses in redis cache with a TTL of 5 mins
4. On duplicate request, served the cached response. 

Test Cases:
1) 201, Created Cache: false
2) 200 OK, Cached: true
3) Corrupted Redis Data: forced invalid value and caught JSON parse failure. (500 response).
4) Missing Idempotency key-> 400 Bad request.

This ensures that each transaction is processed only once, regardless how many times the request was sent from any server.
