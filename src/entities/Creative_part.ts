import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity } from 'typeorm';
import { Ad } from './Ad';

@Entity()
export class Creative_part extends BaseEntity {
  @PrimaryGeneratedColumn()
  readonly id?: number

  @OneToMany(type => Ad, ad => ad.creative_part)
  ad: Ad[];

  @Column("text")
  public lead: string = ''

  @Column({ length: 255 })
  public title: string = ''

  @Column({ length: 1024 })
  public maybe_landing_url: string = ''

  @Column()
  public force_matching: boolean = false

  @Column()
  public status: boolean = false

  @Column()
  public resize_flg: boolean = false

  @Column()
  public review_status: boolean = false

  @CreateDateColumn()
  readonly createdAt?: Date

  @UpdateDateColumn()
  readonly updatedAt?: Date
  ads: any;
}