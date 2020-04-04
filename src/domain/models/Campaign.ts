import moment from 'moment-timezone'

export class Campaign {
  private _id: number
  private _name: string
  private _status: boolean
  private _createdAt: moment.Moment
  private _updatedAt: moment.Moment

  get id(): number {
    return this._id
  }

  set id(id: number) {
    this._id = id
  }

  get name(): string {
    return this._name
  }

  set name(name: string) {
    this._name = name
  }

  get status(): boolean {
    return this._status
  }

  set status(status: boolean) {
    this._status = status
  }

  get createdAt(): moment.Moment {
    return this._createdAt
  }

  getUTCCreatedAt(): string {
    if (this._createdAt) {
      return this._createdAt.utc().format('YYYY-MM-DD HH:mm:ss')
    }
    return ''
  }

  set createdAt(t: moment.Moment) {
    this._createdAt = t
  }

  get updatedAt(): moment.Moment {
    return this._updatedAt
  }

  getUTCUpdatedAt(): string {
    if (this._updatedAt) {
      return this._updatedAt.utc().format('YYYY-MM-DD HH:mm:ss')
    }
    return ''
  }

  set updatedAt(t: moment.Moment) {
    this._updatedAt = t
  }

  constructor(name: string = '', status: boolean = false) {
    this._name = name
    this._status = status
  }
}