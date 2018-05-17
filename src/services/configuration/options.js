import {Group, Page, EnableOption, TextOption} from 'neon-extension-framework/services/configuration/models';

import Plugin from '../../core/plugin';


export default [
    new Page(Plugin, null, [
        new EnableOption(Plugin, 'enabled', {
            default: false,

            type: 'plugin',
            permissions: true,
            contentScripts: true
        }),

        new Group(Plugin, 'authorization', [
            new TextOption(Plugin, 'token', {
                cleanValue: (value) => value.trim(),

                length: 36,
                pattern: '[0-9a-zA-Z]{8}-[0-9a-zA-Z]{4}-[0-9a-zA-Z]{4}-[0-9a-zA-Z]{4}-[0-9a-zA-Z]{12}',

                requires: ['enabled']
            })
        ]),

        new Group(Plugin, 'scrobble', [
            new EnableOption(Plugin, 'enabled', {
                default: true,
                requires: ['enabled'],

                type: 'service'
            })
        ])
    ])
];
