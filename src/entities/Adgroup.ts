import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { Campaign } from './Campaign';

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

export default Adgroup