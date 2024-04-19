import axios from "axios";
import { hostUrl, UrlParts } from "../const/urlConsts";

export default class ShikimoriService {
  static async getAnimes(params) {
    const response = await axios.get(hostUrl + UrlParts.API + UrlParts.ANIMES, {params});
    return response;
  }
  static async getAnimeConstants() {
    const respnse = await axios.get(hostUrl + UrlParts.API + UrlParts.CONSTANTS + UrlParts.ANIME);
    return respnse
  }
  static async getAnimeById(id) {
    const response = await axios.get(hostUrl + UrlParts.API + UrlParts.ANIME_ID + id);
    return response;
  }
  static async getMangas(params) {
    const response = await axios.get(hostUrl + UrlParts.API + UrlParts.MANGAS, { params });
    return response;
  }

  static async getRanobe(params) {
    const response = await axios.get(hostUrl + UrlParts.API + UrlParts.RANOBE, { params });
    return response;
  }

  static async getGenres(params) {
    const response = await axios.get(hostUrl + UrlParts.API + UrlParts.GENRES, { params });
    return response;
  }
}
