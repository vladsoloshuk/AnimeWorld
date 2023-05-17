import axios from "axios";
import { hostUrl, UrlParts } from "../const/urlConsts";

export default class AnimeServices {
  static async getAnimes(params) {
    const response = await axios.get(hostUrl + UrlParts.API + UrlParts.ANIMES, { params });
    return response;
  }
  static async getAnimeConstants() {
    const respnse = await axios.get(hostUrl + UrlParts.API + '/constants/anime');
    return respnse
  }
  static async getAnimeById(id) {
    const response = await axios.get(hostUrl + UrlParts.API + UrlParts.ANIME_ID + id);
    return response;
  }
  static async getMangas(limit = 50, page = 1, order = "ranked") {
    const params = { limit, page, order };
    const response = await axios.get(hostUrl + UrlParts.API + UrlParts.MANGAS, { params });
    return response;
  }
}
