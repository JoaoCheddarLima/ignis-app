export enum DiscordAutomationType {
    MIRROR_MESSAGES = 'MIRROR_MESSAGES',
    FOWARD_MESSAGES = 'SEND_MESSAGES'
}

interface FowardMessagesAutomatedChannels {
    channelId: string;
    rolesToTag: string[];
}

interface MirrorMessagesAutomatedChannels {
    channelFrom: string;
    channelTo: string;
    rolesToTag: string[];
}

export interface IDiscordBaseAutomation {
    user: string;
    automationName: string;
    timesUsed: number;
    lastUsed: Date;
    isRunning: boolean;
}

export interface IFowardMessagesAutomation extends IDiscordBaseAutomation {
    automationType: DiscordAutomationType.FOWARD_MESSAGES;
    channels: FowardMessagesAutomatedChannels[];
}

export interface IMirrorMessagesAutomation extends IDiscordBaseAutomation {
    automationType: DiscordAutomationType.MIRROR_MESSAGES;
    channels: MirrorMessagesAutomatedChannels[];
}