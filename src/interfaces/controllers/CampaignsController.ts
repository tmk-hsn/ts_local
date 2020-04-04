import { CampaignSerializer } from '../serializers/CampaignSerializer'
import { CampaignRepository } from '../database/CampaignRepository'
import { ListCampaigns } from '../../application/usecases/campaign/ListCampaigns'
import { GetCampaign } from '../../application/usecases/campaign/getCampaign'
import { CreateCampaign } from '../../application/usecases/campaign/CreateCampaign'
import { UpdateCampaign } from '../../application/usecases/campaign/UpdateCampaign'
import { DeleteCampaign } from '../../application/usecases/campaign/DeleteCampaign'
import { IDBConnection } from '../database/IDBConnection'

export class CampaignsController {
  private campaignSerializer: CampaignSerializer
  private campaignRepository: CampaignRepository

  constructor(dbConnection: IDBConnection) {
    this.campaignSerializer = new CampaignSerializer()
    this.campaignRepository = new CampaignRepository(dbConnection)
  }

  async findCampaign(req: any, res: any) {
    const id = req.params.id
    const useCase = new GetCampaign(this.campaignRepository)
    let result = await useCase.execute(id)
    return this.campaignSerializer.serialize(result)
  }

  async findAllCampaigns(req: any, res: any) {
    const useCase = new ListCampaigns(this.campaignRepository)
    let results = await useCase.execute()
    return this.campaignSerializer.serialize(results)
  }

  async createCampaign(req: any, res: any) {
    const { title, description } = req.body
    const useCase = new CreateCampaign(this.campaignRepository)
    let result = await useCase.execute(title, description)
    return this.campaignSerializer.serialize(result)
  }

  async updateCampaign(req: any, res: any) {
    const id = req.params.id
    const { title, description } = req.body
    const useCase = new UpdateCampaign(this.campaignRepository)
    let result = await useCase.execute(id, title, description)
    return this.campaignSerializer.serialize(result)
  }

  async deleteCampaign(req: any, res: any) {
    const id = req.params.id
    const useCase = new DeleteCampaign(this.campaignRepository)
    let result = await useCase.execute(id)
    return this.campaignSerializer.serialize(result)
  }
}