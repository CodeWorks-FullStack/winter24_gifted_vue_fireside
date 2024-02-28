import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class GiftsService {
  async getGifts() {
    const response = await api.get('api/gifts')
    logger.log('📡 GOT GIFTS', response.data)
  }

}

export const giftsService = new GiftsService()