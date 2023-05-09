import axios from "axios";
import { hostUrl, UrlParts } from "../const/urlConsts";

export default class AnimeServices {
  static async getAnimes() {
    return axios.get(hostUrl + UrlParts.ANIMES);
  }
  static async getAnimeById(id) {
    return axios.get(hostUrl + UrlParts.ANIME_ID + id);
  }
}
