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

  async updateGift(giftId) {
    const giftData = { opened: true }
    const response = await api.put(`api/gifts/${giftId}`, giftData)
    logger.log('UPDATED GIFT', response.data)
    const newGift = new Gift(response.data)

    const giftIndex = AppState.gifts.findIndex(gift => gift.id == giftId)

    if (giftIndex == -1) throw new Error('Find index did not work, dawg')

    AppState.gifts.splice(giftIndex, 1, newGift)
  }

}

export const giftsService = new GiftsService()