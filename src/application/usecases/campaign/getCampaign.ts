import { ICampaignRepository } from '../../repositories/ICampaignRepository'

export class GetCampaign {
  private campaignRepository: ICampaignRepository

  constructor(campaignRepository: ICampaignRepository) {
    this.campaignRepository = campaignRepository
  }

  execute(id: number) {
    return this.campaignRepository.find(id)
  }
}