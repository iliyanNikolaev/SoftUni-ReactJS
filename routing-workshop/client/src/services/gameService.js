import { get, post, del, put } from "./requester";

const endpoints = {
    allGames: '/data/games',
    create: '/data/games',
    byId: '/data/games/',
    commentsForGame: (gameId) => `/data/comments?where=gameId%3D%22${gameId}%22`,
    postComment: '/data/comments'
}

export const getAllGames = async () => {
   return get(endpoints.allGames);
}

export const createGame = async (gameData, accessToken) => {
    return post(endpoints.create, gameData, accessToken);
}

export const getGameById = async (gameId) => {
    return get(endpoints.byId + gameId);
}

export const deleteGameById = (id, accessToken) => {
    return del(endpoints.byId+id, undefined, accessToken);   
}

export const editGameById = (id, data, accessToken) => {
    return put(endpoints.byId+id, data, accessToken);   
}

export const getCommentsByGameId = (gameId, accessToken) => {
    return get(endpoints.commentsForGame(gameId, accessToken));
}

export const postCommentForGame = (commentData, accessToken) => {
    return post(endpoints.postComment, commentData, accessToken);
}

