/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { ConnectorMappingsAttributes, ConnectorTypes } from '../../../common/api';
import { ACTION_SAVED_OBJECT_TYPE } from '../../../../actions/server';
import { createCaseError } from '../../common/error';
import { CasesClientArgs, CasesClientInternal } from '..';
import { CreateMappingsArgs } from './types';

export const createMappings = async (
  { connectorType, connectorId, owner }: CreateMappingsArgs,
  clientArgs: CasesClientArgs,
  casesClientInternal: CasesClientInternal
): Promise<ConnectorMappingsAttributes[]> => {
  const { unsecuredSavedObjectsClient, connectorMappingsService, logger } = clientArgs;

  try {
    if (connectorType === ConnectorTypes.none) {
      return [];
    }

    const res = await casesClientInternal.configuration.getFields({
      connectorId,
      connectorType,
    });

    const theMapping = await connectorMappingsService.post({
      soClient: unsecuredSavedObjectsClient,
      attributes: {
        mappings: res.defaultMappings,
        owner,
      },
      references: [
        {
          type: ACTION_SAVED_OBJECT_TYPE,
          name: `associated-${ACTION_SAVED_OBJECT_TYPE}`,
          id: connectorId,
        },
      ],
    });

    return theMapping.attributes.mappings;
  } catch (error) {
    throw createCaseError({
      message: `Failed to create mapping connector id: ${connectorId} type: ${connectorType}: ${error}`,
      error,
      logger,
    });
  }
};
