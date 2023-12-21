import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { LikesModule } from './likes/likes.module';
import { TagsModule } from './tags/tags.module';
import { PostsModule } from './posts/posts.module';
import { AttachmentModule } from './attachment/attachment.module';
import { SavedPostsModule } from './saved_posts/saved_posts.module';
import { LocationsModule } from './locations/locations.module';
import { StoriesModule } from './stories/stories.module';
import { TravelRecommendationsModule } from './travel_recommendations/travel_recommendations.module';
import { CompanyModule } from './company/company.module';
import { UserActivityModule } from './user_activity/user_activity.module';
import { AiChatsModule } from './ai-chats/ai-chats.module';
import { BillingModule } from './billing/billing.module';
import { EmployersModule } from './employers/employers.module';
import { CommentsModule } from './comments/comments.module';
import { CompanyTrackModule } from './company-track/company-track.module';
import { CompanyServiceModule } from './company-service/company-service.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    LikesModule,
    TagsModule,
    PostsModule,
    AttachmentModule,
    SavedPostsModule,
    LocationsModule,
    StoriesModule,
    TravelRecommendationsModule,
    CompanyModule,
    UserActivityModule,
    AiChatsModule,
    BillingModule,
    EmployersModule,
    CommentsModule,
    CompanyTrackModule,
    CompanyServiceModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'root',
      password: 'hacker678876',
      database: 'expobaku',
      entities: [, __dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
