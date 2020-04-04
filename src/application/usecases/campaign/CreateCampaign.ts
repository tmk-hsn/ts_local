import { Campaign } from '../../../domain/models/Campaign'
import { ICampaignRepository } from '../../repositories/ICampaignRepository'
import moment from 'moment-timezone'

export class CreateCampaign {
  private campaignRepository: ICampaignRepository

  constructor(campaignRepository: ICampaignRepository) {
    this.campaignRepository = campaignRepository
  }

  execute(name: string, status: boolean) {
    let campaign = new Campaign(name, status)
    campaign.createdAt = moment()
    campaign.updatedAt = moment()
    return this.campaignRepository.persist(campaign)
  }
}