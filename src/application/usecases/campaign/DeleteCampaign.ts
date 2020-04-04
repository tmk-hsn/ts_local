import { ICampaignRepository } from '../../repositories/ICampaignRepository'

export class DeleteCampaign {
  private campaignRepository: ICampaignRepository

  constructor(campaignRepository: ICampaignRepository) {
    this.campaignRepository = campaignRepository
  }

  async execute(id: number) {
    let task = await this.campaignRepository.find(id)
    return this.campaignRepository.delete(task)
  }
}