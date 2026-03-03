import express from 'express';
import { createServer } from 'node:http';
import { uvPath } from '@titaniumnetwork-dev/ultraviolet';
import { join } from 'node:path';

const app = express();
const server = createServer(app);

app.use(express.static(join(process.cwd(), 'public')));
app.use('/uv/', express.static(uvPath));

server.listen(3000, () => {
    console.log('Andy Hub is live on port 3000');
});
