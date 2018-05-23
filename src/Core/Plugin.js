import DestinationPlugin from 'neon-extension-framework/Models/Plugin/Destination';


export class ListenBrainzPlugin extends DestinationPlugin {
    constructor() {
        super('listenbrainz');
    }
}

export default new ListenBrainzPlugin();
