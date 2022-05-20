/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { i18n } from '@kbn/i18n';

import { MarkdownOptions } from './markdown_options';
import { SettingsOptions } from './settings_options_lazy';
import { DefaultEditorSize } from '../../../src/plugins/vis_default_editor/public';
import { VisGroups, VisTypeDefinition } from '../../../src/plugins/visualizations/public';
import { toExpressionAst } from './to_ast';
import { MarkdownVisParams } from './types';

export const markdownVisDefinition: VisTypeDefinition<MarkdownVisParams> = {
  name: 'mod_markdown',
  title: 'Modified Markdown',
  isAccessible: true,
  // icon location /home/ieva/Documents/elasticsearch/kibana_plugin/kibana/node_modules/@elastic/eui/lib/components/icon/svgs
  icon: 'bolt',
  group: VisGroups.TOOLS,
  titleInWizard: i18n.translate('visTypeMarkdown.markdownTitleInWizard', {
    defaultMessage: 'API Call',
  }),
  description: i18n.translate('visTypeMarkdown.markdownDescription', {
    defaultMessage: 'Call an API to do stuff.',
  }),
  toExpressionAst,
  visConfig: {
    defaults: {
      fontSize: 12,
      openLinksInNewTab: false,
      markdown: '',
      controlLabel: '',
    },
  },
  editorConfig: {
    optionTabs: [
      {
        name: 'advanced',
        title: i18n.translate('visTypeMarkdown.tabs.dataText', {
          defaultMessage: 'Data',
        }),
        editor: MarkdownOptions,
      },
      // uncomment to allow settings options
      /*{
        name: 'options',
        title: i18n.translate('visTypeMarkdown.tabs.optionsText', {
          defaultMessage: 'Options',
        }),
        editor: SettingsOptions,
      },*/
    ],
    enableAutoApply: true,
    defaultSize: DefaultEditorSize.LARGE,
  },
  options: {
    showTimePicker: false,
    showFilterBar: false,
  },
  inspectorAdapters: {},
};