const app = require("express")();
const cors = require("cors");
const http = require("http").Server(app);
const io = require("socket.io")(http, {
    cors: {
        origin: "http://192.168.0.113:4200",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});

const PORT = 8080;

const users = {};

const games = {
    warewolfGames: [{ 
        id: "125",
        players: ["Bibbt", "Bobby the fycjer"],
        maxPlayers: 8,
        owner: "Bibbt",
        roles: []
    },
    { 
        id: "126",
        players: ["awehah", "Bobby the fucker"],
        maxPlayers: 8,
        owner: "awehah"
    }],
    mafiaGames: []
}

app.use(cors({ origin: "http://192.168.0.113:4200" }));

app.get("/games", (req, res) => {
    const currentGames = games[req.query.gameName];
    
    if (!currentGames) {
        res.send({code: 200});
        return;
    }

    res.send({code: 200,
            games: currentGames
        });
})

app.get("/lobbyPlayers", (req, res) => {
    const currentGames = games[req.query.gameName];
    
    if (!currentGames) {
        res.send({code: 200});
        return;
    }

    const game = currentGames.filter(game => game.id === req.query.gameId)[0];

    res.send({code: 200,
            players: game.players,
            test: "abc"
        });
})

io.on("connection", socket => {

    let room;

    socket.on("joinLobby", data => {
        socket.leave(room);
        room = data.gameName;
        socket.join(room);
    });

    socket.on("createGame", data => {

        socket.leave(room);
        const newGame = {
            id: "15",
            players: [data.player],
            maxPlayers: 8,
            owner: data.player,
            roles: []
        };

        games[data.gameName].push(newGame);

        io.in(room).emit("joinGame", { lobbies: games[data.gameName] });

        room = data.gameName + newGame.id;
        socket.join(room);

        socket.emit("createGame", {id: newGame.id});
    });

    socket.on("joinGame", data => {
        let game = getGame(data.gameName, data.id);

        if (game.players.length === game.maxPlayers) { 
            socket.emit("joinGame", {
                code: 400,
                message: "Room is full"
            });
            return;
        }
        
        socket.leave(room);
        game.players.push(data.player);
        
        io.in(room).emit("joinGame", { lobbies: games[data.gameName] });

        room = data.gameName + data.id;
        socket.join(room);

        io.in(room).emit("joinGame", { players: game.players});
    });

    socket.on("leaveGame", data => {

    });

    socket.on("startGame", data => {
        let game = getGame(data.gameName, data.gameId);
        game.roles = data.roles;
        io.in(room).emit("startGame");
    });

    //#region Werewolf
    socket.on("werewolfGetRole", data => {
        let game = getGame(data.gameName, data.gameId);

        const roleIndex = Math.floor(Math.random() * game.roles.length);
        let role = game.roles[roleIndex];
        console.log(roleIndex);
        console.log(game.roles);
        console.log(role);

        game.roles.splice(roleIndex, 1);

        socket.emit("getRole", { role: role })
    });
    //#endregion
});

function getGame(gameName, gameId) {
    const currentGames = games[gameName];
    return currentGames.filter(game => game.id === gameId)[0];
}

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});