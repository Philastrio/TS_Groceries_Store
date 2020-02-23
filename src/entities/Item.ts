import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Generated,
  CreateDateColumn
} from "typeorm";

@Entity("items")
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    type: "text"
  })
  name: string;

  @CreateDateColumn({
    type: "timestamp"
  })
  created: string;
}
