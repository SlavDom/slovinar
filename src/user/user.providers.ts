import { Connection, Repository } from 'typeorm';
import { UserEntity } from './user.entity';

export const photoProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(UserEntity),
        inject: ['DATABASE_CONNECTION'],
    },
];
