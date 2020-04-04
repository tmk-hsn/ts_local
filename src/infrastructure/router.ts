import express = require('express')
import { CampaignsController } from '../interfaces/controllers/CampaignsController'
import { MysqlConnection } from './MysqlConnection'

const mysqlConnection = new MysqlConnection()
const campaignsController = new CampaignsController(mysqlConnection)
let router = express.Router()

router.get('/campaigns', async (req: express.Request, res: express.Response) => {
  let results = await campaignsController.findAllCampaigns(req, res)
  res.send(results)
})

router.get(
  '/campaigns/:id',
  async (req: express.Request, res: express.Response) => {
    let result = await campaignsController.findCampaign(req, res)
    res.send(result)
  }
)

router.post('/campaigns', async (req: express.Request, res: express.Response) => {
  let result = await campaignsController.createCampaign(req, res)
  res.send(result)
})

router.patch(
  '/campaigns/:id',
  async (req: express.Request, res: express.Response) => {
    let result = await campaignsController.updateCampaign(req, res)
    res.send(result)
  }
)

router.delete(
  '/campaigns/:id',
  async (req: express.Request, res: express.Response) => {
    let result = await campaignsController.deleteCampaign(req, res)
    res.send(result)
  }
)

export default router