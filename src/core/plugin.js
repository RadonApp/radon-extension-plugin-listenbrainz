import DestinationPlugin from 'neon-extension-framework/base/plugins/destination';


export class ListenBrainzPlugin extends DestinationPlugin {
    constructor() {
        super('listenbrainz');
    }
}

export default new ListenBrainzPlugin();
