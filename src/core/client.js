import {Client as ListenBrainz} from '@fuzeman/listenbrainz/src/index';

import Plugin from './plugin';


const Client = new ListenBrainz();

function configure() {
    // Update client with current session
    return Plugin.preferences.context('authorization').getString('token').then((token) => {
        Client.token = token;
    });
}

// Configure client on session changes
Plugin.preferences.context('authorization').onChanged('token', configure);

// Initial client configuration
configure();

export default Client;
