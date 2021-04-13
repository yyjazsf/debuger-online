import DebuggerProvider from '../src/index'

const ins = new DebuggerProvider({
    url: 'http://localhost:3000',
    socketOptions: {},
    loginInfo: {
        id: 'yyj'
    }
})

test('connect', async () => {
    const ins1 = new DebuggerProvider({
        url: 'http://localhost:3000',
        socketOptions: {},
        loginInfo: {
            id: 'yyj'
        }
    })
    ins1.start()
    expect(sum(1, 2)).toBe(3);
});
