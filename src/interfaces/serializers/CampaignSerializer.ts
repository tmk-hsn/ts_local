import { Campaign } from '../../domain/models/Campaign'
import moment from 'moment-timezone'

const _serializeSingleTask = (campaign: Campaign) => {
  return {
    id: campaign.id,
    title: campaign.name,
    description: campaign.status,
    createdAt: moment(campaign.createdAt)
      .tz('Asia/Tokyo')
      .format(),
    updatedAt: moment(campaign.updatedAt)
      .tz('Asia/Tokyo')
      .format()
  }
}

export class CampaignSerializer {
  serialize(data: any) {
    if (!data) {
      throw new Error('expect data to be not undefined nor null')
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleTask)
    }
    return _serializeSingleTask(data)
  }
}