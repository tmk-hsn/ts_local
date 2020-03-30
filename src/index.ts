import express from 'express'
import { User } from './entities/User'
import { getConnectionOptions, createConnection, BaseEntity } from 'typeorm'

let app = async () => {
  const app = express()

  // --- TypeORMの設定
  const connectionOptions = await getConnectionOptions()
  const connection = await createConnection(connectionOptions)
  // ActiveRecordパターンでTypeORMを使用する場合
  BaseEntity.useConnection(connection)

  app.get('/', async (req, res) => {
    const user = new User()
    user.name = 'Qiita'
    user.age = 25
    await user.save()
    const users = await User.find()
    res.send(users)
  })
  app.listen(3000, () => console.log('Example app listening on port 3000!'))
}

app()