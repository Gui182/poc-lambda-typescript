import { ShopfyUseCase } from "../useCases/shopfyUseCase"
import { VtexUseCase } from "../useCases/vtexUseCase"

export class ResponseBodyFactory {

  static getPayload(channelId: string, clientId: string, skuId: string): ReturnResponseBody {

      if(channelId === 'vtex') {
        return new VtexUseCase(channelId, clientId, skuId)
      } else if (channelId === 'shopfy') {
        return new ShopfyUseCase(channelId, clientId, skuId)
      } else {
        throw new Error('invalid channel')
      }
  }
}
