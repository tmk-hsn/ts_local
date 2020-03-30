import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity } from 'typeorm';
import { Adgroup } from './Adgroup';

@Entity()
export class Campaign extends BaseEntity {
  @PrimaryGeneratedColumn()
  readonly id?: number

  @Column()
  public name: string = ''

  @Column()
  public status: boolean = false

  @OneToMany(type => Adgroup, adgroup => adgroup.campaign)
  adgroups: Adgroup[];

  @CreateDateColumn()
  readonly createdAt?: Date

  @UpdateDateColumn()
  readonly updatedAt?: Date
}

export default Campaign
