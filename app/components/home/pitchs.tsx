import { DiscordPitch } from './pitchs/discord';
import { MirrorPitch } from './pitchs/mirror';

export function Pitchs() {
    return (
        <div className='flex flex-col'>
            <DiscordPitch />
            <MirrorPitch />
        </div>
    )
}