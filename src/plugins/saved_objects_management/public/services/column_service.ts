/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import type { SpacesApi } from '../../../../../x-pack/plugins/spaces/public';
import { ShareToSpaceSavedObjectsManagementColumn } from './columns';
import { SavedObjectsManagementColumn } from './types';

export interface SavedObjectsManagementColumnServiceSetup {
  /**
   * register given column in the registry.
   */
  register: (column: SavedObjectsManagementColumn) => void;
}

export interface SavedObjectsManagementColumnServiceStart {
  /**
   * return all {@link SavedObjectsManagementColumn | columns} currently registered.
   */
  getAll: () => SavedObjectsManagementColumn[];
}

export class SavedObjectsManagementColumnService {
  private readonly columns = new Map<string, SavedObjectsManagementColumn>();

  setup(): SavedObjectsManagementColumnServiceSetup {
    return {
      register: (column) => {
        if (this.columns.has(column.id)) {
          throw new Error(`Saved Objects Management Column with id '${column.id}' already exists`);
        }
        this.columns.set(column.id, column);
      },
    };
  }

  start(spacesApi?: SpacesApi): SavedObjectsManagementColumnServiceStart {
    if (spacesApi) {
      registerSpacesApiColumns(this, spacesApi);
    }
    return {
      getAll: () => [...this.columns.values()],
    };
  }
}

function registerSpacesApiColumns(
  service: SavedObjectsManagementColumnService,
  spacesApi: SpacesApi
) {
  service.setup().register(new ShareToSpaceSavedObjectsManagementColumn(spacesApi.ui));
}
