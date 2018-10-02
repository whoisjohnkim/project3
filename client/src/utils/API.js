import axios from "axios";

export default {
    getGames: function() {
        return axios.get("/api/games/")
    },
    getGame: function(id) {
        return axios.get("/api/games/" + id);
    },
    deleteGame: function(id) {
        return axios.delete("/api/games/" + id);
    },
    saveGame: function(gameData) {
        return axios.post("/api/games", gameData);
    },
    getInteractive: function() {
        return axios.get("/api/games/interactive")
    }
};