export interface IGithubRepo{
    readonly id: number;
    readonly name: string;
    readonly full_name: string;
    readonly html_url: string;
    readonly description: string;
    readonly language: string;
}