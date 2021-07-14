const app = require("express");
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
        id: 125,
        players: ["Bibbt", "Bobby the fycjer"]
    }],
    mafiaGames: []
}


io.on("connection", socket => {

    socket.on("createGame", data => {
        games[data.gameName].push({
            id: data.id,
            players: data.players
        });
    });

    socket.on("joinGame", data => {
        console.log(data.gameName);
        const currentGames = games[data.gameName];
        console.log(currentGames);


        let gameToJoin = currentGames.filter(game => game.id === data.id)[0];
        
        if (gameToJoin) {
            gameToJoin.players.push("agg");
            console.log("eagae");
        }

        else {
            gameToJoin = {
                id: data.id,
                players: []
            }
            gameToJoin.players.push("bsb");
            
            currentGames.push(gameToJoin);
        }

        console.log("joined");
        io.emit("joinedGame", {players: gameToJoin.players});
    });
});

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});