import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {WordModule} from './word/word.module';
import {Word} from './word/word.entity';
import {Nest} from './nest/nest.entity';
import {Affix} from './affix/affix.entity';
import {NestModule} from './nest/nest.module';
import {AffixModule} from './affix/affix.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: './db.sqlite',
            entities: [Word, Nest, Affix],
            synchronize: true,
        }),
        NestModule,
        AffixModule,
        WordModule,
    ],
})
export class AppModule {}
