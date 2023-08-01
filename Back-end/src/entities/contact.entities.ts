import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm'
import { User } from './users.entities'

@Entity('contact')


class Contact {
    @PrimaryGeneratedColumn('increment')
    id: number

    
    @Column({type: 'varchar', length: 45})
    name: string

    
    @Column({type: 'varchar', length: 45, unique: true})
    email: string


    @Column({length: 10 })
    telefone: string


    @CreateDateColumn({type: 'date'})
    createdAt: string 

    
    @ManyToOne(() => User, user => user.contacts, {onDelete: 'CASCADE'})
    user: User
}

export {Contact}
