import 'egg';
import 'egg-socket.io'
import { Socket, Server as SocketServer, Namespace as SocketNameSpace, Adapter } from 'socket.io';
import NspController from '../app/io/controller/nsp'
declare module 'egg' {
    export interface Application {
        io: EggIOServer & EggSocketIO & EggSocketNameSpace;
        mongooseDB:any;
        mongoose: any;
        jwt:any
    }
    interface Context {
        socket: Socket;
    }
    interface EggIOServer extends SocketServer {
        of(nsp: string): EggSocketNameSpace;
    }
    interface EggSocketIO {
        middleware: CustomMiddleware;
        controller: CustomController;
    }
    interface EggSocketNameSpace extends SocketNameSpace {
        route(event: string, handler: Function): any;
        adapter: MyAdapter;
    }

    interface MyAdapter extends Adapter {
        clients(rooms, callback: Function);
        remoteDisconnect(id, isBoolean, error: Function);
    }

    interface CustomMiddleware {}
    interface CustomController {
        nsp: NspController;
    }
}
