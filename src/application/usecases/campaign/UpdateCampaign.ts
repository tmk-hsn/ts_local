import { ICampaignRepository } from '../../repositories/ICampaignRepository'
import moment from 'moment-timezone'

export class UpdateCampaign {
  private campaignRepository: ICampaignRepository

  constructor(campaignRepository: ICampaignRepository) {
    this.campaignRepository = campaignRepository
  }

  async execute(id: number, title: string, status: boolean) {
    let campaign = await this.campaignRepository.find(id)
    campaign.name = name
    campaign.status = status
    campaign.updatedAt = moment()
    return this.campaignRepository.merge(campaign)
  }
}