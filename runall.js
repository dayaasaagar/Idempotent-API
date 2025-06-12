const startServer = require('./index');
const ports = [3001,3002,3003,3004]

for (const port of ports)
{
        startServer(port);
}
