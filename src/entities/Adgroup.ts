import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { Campaign } from './Campaign';
import { Ad } from './Ad';

@Entity()
export class Adgroup extends BaseEntity {
  @PrimaryGeneratedColumn()
  readonly id?: number

  @Column()
  readonly campaignId: number

  @ManyToOne(type => Campaign, campaign => campaign.adgroups, {
    onDelete: "CASCADE"
  })
  @JoinColumn({ name: "campaignId" })
  readonly campaign?: Campaign;

  @OneToMany(type => Ad, ad => ad.adgroup)
  private _ads: Ad[];
  public get ads(): Ad[] {
    return this._ads;
  }
  public set ads(value: Ad[]) {
    this._ads = value;
  }

  @Column()
  public name: string = ''

  @Column()
  public status: boolean = false

  @CreateDateColumn()
  readonly createdAt?: Date

  @UpdateDateColumn()
  readonly updatedAt?: Date

  constructor(campaignId: number) {
    super();
    this.campaignId = campaignId;
  }
}