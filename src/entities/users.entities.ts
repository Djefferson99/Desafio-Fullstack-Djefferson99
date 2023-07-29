import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm'
import { Contact } from './contact.entities'

@Entity('users')


class User {
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

    @OneToMany(() => Contact, contact => contact.user)
    contacts: Contact[]
}

export {User}
