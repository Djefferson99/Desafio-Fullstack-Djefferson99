import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, BeforeInsert, BeforeUpdate } from 'typeorm'
import { Contact } from './contact.entities'
import { getRounds, hashSync } from 'bcryptjs'

@Entity('users')


class User {
    @PrimaryGeneratedColumn('increment')
    id: number

    
    @Column({type: 'varchar', length: 45})
    name: string

    
    @Column({type: 'varchar', length: 45, unique: true})
    email: string

    @Column({length: 11 })
    telefone: string

    @Column({length: 120})
    password: string

    @CreateDateColumn({type: 'date'})
    createdAt: string 

    @OneToMany(() => Contact, contact => contact.user)
    contacts: Contact[]
    static contacts: any
    user: Contact

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const isHashed = getRounds(this.password)
        if(!isHashed){
            this.password = hashSync(this.password, 10)
        }
    }
}

export {User}
