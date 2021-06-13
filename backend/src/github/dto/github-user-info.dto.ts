import { Exclude, Expose } from "class-transformer";

@Exclude()
export class GithubUserInfoDto {
    @Expose()
    readonly html_url: string;

    @Expose()
    readonly avatar_url: string;

    @Expose()
    readonly name: string;

    @Expose()
    readonly location: string;

    @Expose()
    readonly bio: string;
}
