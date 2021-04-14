// import * as io from "socket.io-client";
const io = require('socket.io-client') 

interface IOptions {
  url: string,
  socketOptions?: SocketIOClient.ConnectOpts,
  loginInfo: unknown,
  plugins: unknown[],
  events: () => void
}

class DebuggerProvider {
  public socket: SocketIOClient.Socket;
  private plugins: unknown[]
  private loginInfo: unknown;

  // https://socket.io/docs/v2/client-initialization/
  constructor(opts: IOptions) {
    const { url, socketOptions, loginInfo, plugins = []  } = opts

    this.plugins = plugins
    this.loginInfo = loginInfo;

    this.socket = io(url, {
      transports: ["websocket"],
      autoConnect: false,
      ...socketOptions,
    });

    this.socket.on("connect", this.onConnect);
    this.socket.on("reconnect", this.onReconnect);

    this.socket.on("disconnect", this.onDisconnect);
    this.socket.on("error", this.onError);
  }

  onConnect() {
    this.socket.emit('login', this.loginInfo)
  }
  onReconnect() {}

  onDisconnect() {}
  onError() {}

  start() {
    this.socket.connect()
  }

  stop() {
    this.socket.disconnect()
  }

}

export default DebuggerProvider;
