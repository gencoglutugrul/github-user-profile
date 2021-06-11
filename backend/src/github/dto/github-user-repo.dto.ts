import { Exclude, Expose } from "class-transformer";

@Exclude()
export class GithubUserRepoDto {
    @Expose()
    readonly name: string;

    @Expose()
    readonly full_name: string;

    @Expose()
    readonly html_url: string;

    @Expose()
    readonly description: string;
    
    @Expose()
    readonly language: string;
}
