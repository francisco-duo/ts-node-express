import { server, port } from "./server/Server";


server.listen(port || 3000, () => {
    console.log(`[server] Server is running on port http://localhost:${port}`);
});