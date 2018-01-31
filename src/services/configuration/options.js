import {
    Group, Page,
    EnableOption,
    SelectOption,
    TextOption
} from 'neon-extension-framework/services/configuration/models';

import Plugin from '../../core/plugin';


export default [
    new Page(Plugin, null, Plugin.title, [
        new EnableOption(Plugin, 'enabled', 'Enabled', {
            default: false,

            type: 'plugin',
            permissions: true,
            contentScripts: true
        }),

        new Group(Plugin, 'authorization', 'Authentication', [
            new TextOption(Plugin, 'token', 'Token', {
                cleanValue: (value) => value.trim(),

                length: 36,
                pattern: '[0-9a-zA-Z]{8}-[0-9a-zA-Z]{4}-[0-9a-zA-Z]{4}-[0-9a-zA-Z]{4}-[0-9a-zA-Z]{12}',

                requires: ['enabled']
            })
        ]),

        new Group(Plugin, 'scrobble', 'Scrobble', [
            new EnableOption(Plugin, 'enabled', 'Enabled', {
                default: true,
                requires: ['enabled'],

                type: 'service'
            })
        ]),

        new Group(Plugin, 'debugging', 'Debugging', [
            new SelectOption(Plugin, 'log_level', 'Log Level', [
                {key: 'error', label: 'Error'},
                {key: 'warning', label: 'Warning'},
                {key: 'notice', label: 'Notice'},
                {key: 'info', label: 'Info'},
                {key: 'debug', label: 'Debug'},
                {key: 'trace', label: 'Trace'}
            ], {
                default: 'warning'
            })
        ])
    ])
];
