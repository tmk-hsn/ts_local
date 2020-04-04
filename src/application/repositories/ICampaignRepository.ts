import { Campaign } from '../../domain/models/Campaign'

// インターフェースのみを定義
export abstract class ICampaignRepository {
  abstract async findAll(): Promise<Array<Campaign>>
  abstract async find(id: number): Promise<Campaign>
  abstract async persist(campaign: Campaign): Promise<Campaign>
  abstract async merge(campaign: Campaign): Promise<Campaign>
  abstract async delete(campaign: Campaign): Promise<Campaign>
}