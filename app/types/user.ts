export interface DiscordAuth {
    name: string;
    icon: string;
    mail: string;
}

export interface IUser {
    name: string;
    isCustomer: boolean;
    planExpiration: Date;
    mail: string;
    api_key: string;
}
