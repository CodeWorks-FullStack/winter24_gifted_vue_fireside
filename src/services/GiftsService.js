import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class GiftsService {
  async getGifts() {
    const response = await api.get('api/gifts')
    logger.log('📡 GOT GIFTS', response.data)
    const newGifts = response.data.map(giftPOJO => new Gift(giftPOJO))
    AppState.gifts = newGifts
  }

}

export const giftsService = new GiftsService()