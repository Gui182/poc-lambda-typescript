class VtexUseCase implements ReturnResponseBody {
  channelId: string;
  clientId: string;
  skuId: string;

  constructor(channelId: string, clientId: string, skuId: string) {
    this.channelId = channelId;
    this.clientId = clientId;
    this.skuId = skuId;
  }

  returnResponseBody(): ResponseBody {
    return {
      channelId: this.channelId,
      clientId: this.clientId,
      skuId: this.skuId,
      usecase: "vtex",
    };
  }
}
