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

    @Column({type: 'integer'})
    telefone: number

    @CreateDateColumn({type: 'date'})
    createdAt: string 

    
    @ManyToOne(() => User)
    user: User
}

export {Contact}
