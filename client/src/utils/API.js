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
    updateGame: function(id, gameData) {
        return axios.put("/api/games/" + id, gameData);
    },
    getInteractive: function() {
        return axios.get("/api/games/interactive");
    },
    getFood: function() {
        return axios.get("/api/foods");
    }
};