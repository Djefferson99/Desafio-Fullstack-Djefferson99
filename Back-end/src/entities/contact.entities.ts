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


    @Column({length: 11 })
    telefone: string


    @CreateDateColumn({type: 'date'})
    createdAt: string 

    @Column({type:'integer' })
    userId: number

    @ManyToOne(() => User, user => user.contacts, {onDelete: 'CASCADE'})
    user: User
}

export {Contact}
