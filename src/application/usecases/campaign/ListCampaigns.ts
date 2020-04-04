import { ICampaignRepository } from '../../repositories/ICampaignRepository'

export class ListCampaigns {
  private campaignRepository: ICampaignRepository

  constructor(campaignRepository: ICampaignRepository) {
    this.campaignRepository = campaignRepository
  }

  execute() {
    return this.campaignRepository.findAll()
  }
}