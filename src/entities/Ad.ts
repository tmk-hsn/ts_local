import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { Adgroup } from './Adgroup';
import { Creative_part } from './Creative_part';

@Entity()
export class Ad extends BaseEntity {
  @PrimaryGeneratedColumn()
  readonly id?: number

  @Column()
  readonly adgroupId: number

  @ManyToOne(type => Adgroup, adgroup => adgroup.ads, { onDelete: "CASCADE" })
  @JoinColumn({ name: "adgroupId" })
  readonly adgroup?: Adgroup;

  @Column()
  readonly creative_partId: number

  @ManyToOne(type => Creative_part, creative_part => creative_part.ads, { onDelete: "CASCADE" })
  @JoinColumn({ name: "creative_partId" })
  readonly creative_part?: Creative_part;

  @Column()
  public name: string = ''

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  public score_by_category: number

  @Column({ length: 16 })
  public title: string = ''

  @Column()
  public is_archive: boolean = false

  @Column()
  public status: boolean = false

  @CreateDateColumn()
  readonly createdAt?: Date

  @UpdateDateColumn()
  readonly updatedAt?: Date

  constructor(adgroupId: number, creative_partId: number) {
    super();
    this.adgroupId = adgroupId;
    this.creative_partId = creative_partId;
  }
}