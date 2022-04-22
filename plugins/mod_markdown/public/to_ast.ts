/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { VisToExpressionAst } from '../../../src/plugins/visualizations/public';
import { buildExpression, buildExpressionFunction } from '../../../src/plugins/expressions/public';
import { MarkdownVisExpressionFunctionDefinition } from './markdown_fn';
import { MarkdownVisParams } from './types';

export const toExpressionAst: VisToExpressionAst<MarkdownVisParams> = (vis) => {
  const { markdown, fontSize, openLinksInNewTab, controlLabel } = vis.params;

  const markdownVis = buildExpressionFunction<MarkdownVisExpressionFunctionDefinition>(
    'markdownVis',
    {
      markdown,
      font: buildExpression(`font size=${fontSize}`),
      openLinksInNewTab,
      controlLabel,
    }
  );

  const ast = buildExpression([markdownVis]);

  return ast.toAst();
};
