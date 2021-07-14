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

    socket.on("createGame", data => {

        const newGame = {
            id: "15",
            players: [data.player],
            maxPlayers: 8,
            owner: data.player,
            roles: []
        };

        games[data.gameName].push(newGame);

        socket.emit("gameCreated", {id: newGame.id});
    });

    socket.on("joinGame", data => {
        const currentGames = games[data.gameName];

        if (!currentGames) {return;}

        let gameToJoin = currentGames.filter(game => game.id === data.id)[0];

        gameToJoin.players.push("agg");
        
        console.log("joined");

        io.emit("joinedGame", {players: gameToJoin.players});
    });
});

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});