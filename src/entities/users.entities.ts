import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm'

@Entity('users')


class User {
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

}

export {User}
