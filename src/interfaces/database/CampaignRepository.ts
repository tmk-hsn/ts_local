import { Campaign } from '../../domain/models/Campaign'
import { ICampaignRepository } from '../../application/repositories/ICampaignRepository'
import { IDBConnection } from './IDBConnection'
import moment from 'moment-timezone'

export class CampaignRepository extends ICampaignRepository {
  private connection: any

  constructor(connection: IDBConnection) {
    super()
    this.connection = connection
  }

  private convertModel(r: any) {
    let campaign = new Campaign()

    campaign.id = r.id
    campaign.name = r.name
    campaign.status = r.status
    campaign.createdAt = moment.tz(r.created_at, 'UTC')
    campaign.updatedAt = moment.tz(r.updated_at, 'UTC')

    return campaign
  }

  async find(id: number): Promise<Campaign> {
    let queryResults = await this.connection.execute(
      'select * from campaigns where id = ? limit 1',
      id
    )
    return this.convertModel(queryResults[0])
  }

  async findAll(): Promise<Array<Campaign>> {
    let queryResults = await this.connection.execute('select * from campaigns')
    let results = []
    results = queryResults.map((m: any) => {
      return this.convertModel(m)
    })

    return results
  }

  async persist(campaign: Campaign): Promise<Campaign> {
    let result = await this.connection.execute(
      'insert into campaigns (name, status, created_at, updated_at) values (?, ?, ?, ?)',
      [
        campaign.name,
        campaign.status,
        campaign.getUTCCreatedAt(),
        campaign.getUTCUpdatedAt()
      ]
    )
    campaign.id = result.insertId
    return campaign
  }

  async merge(campaign: Campaign): Promise<Campaign> {
    let result = await this.connection.execute(
      'update campaigns set name = ?, status = ?, updated_at = ? where id = ?',
      [campaign.name, campaign.status, campaign.getUTCUpdatedAt(), campaign.id]
    )
    return campaign
  }

  async delete(campaign: Campaign): Promise<Campaign> {
    let queryResults = await this.connection.execute(
      'delete from campaigns where id = ?',
      campaign.id
    )
    return this.convertModel(campaign)
  }
}