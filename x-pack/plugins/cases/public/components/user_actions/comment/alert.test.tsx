/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { CommentResponseAlertsType } from '../../../../common/api';
import { SnakeToCamelCase } from '../../../../common/types';
import { getRuleId, getRuleName } from './alert';
import { Ecs } from '../../../containers/types';

describe('rule getters', () => {
  describe.each([
    ['getRuleId', getRuleId],
    ['getRuleName', getRuleName],
  ])('%s null checks', (name, funcToExec) => {
    it('returns null if the comment field is an empty string', () => {
      const comment = {
        rule: {
          id: '',
          name: '',
        },
      } as unknown as SnakeToCamelCase<CommentResponseAlertsType>;

      expect(funcToExec(comment)).toBeNull();
    });

    it('returns null if the comment field is an empty string in an array', () => {
      const comment = {
        rule: {
          id: [''],
          name: [''],
        },
      } as unknown as SnakeToCamelCase<CommentResponseAlertsType>;

      expect(funcToExec(comment)).toBeNull();
    });

    it('returns null if the comment does not have a rule field', () => {
      const comment = {} as unknown as SnakeToCamelCase<CommentResponseAlertsType>;

      expect(funcToExec(comment)).toBeNull();
    });

    it('returns null if the signals and alert field is an empty string', () => {
      const comment = {} as unknown as SnakeToCamelCase<CommentResponseAlertsType>;
      const alert = {
        signal: { rule: { id: '', name: '' } },
        kibana: { alert: { rule: { uuid: '', name: '' } } },
      } as unknown as Ecs;

      expect(funcToExec(comment, alert)).toBeNull();
    });
  });

  describe.each([
    ['getRuleId', getRuleId, '1'],
    ['getRuleName', getRuleName, 'Rule name1'],
  ])('%s', (name, funcToExec, expectedResult) => {
    it('returns the first entry in the comment field', () => {
      const comment = {
        rule: {
          id: ['1', '2'],
          name: ['Rule name1', 'Rule name2'],
        },
      } as unknown as SnakeToCamelCase<CommentResponseAlertsType>;

      expect(funcToExec(comment)).toEqual(expectedResult);
    });

    it('returns signal field', () => {
      const comment = {} as unknown as SnakeToCamelCase<CommentResponseAlertsType>;
      const alert = { signal: { rule: { id: '1', name: 'Rule name1' } } } as unknown as Ecs;

      expect(funcToExec(comment, alert)).toEqual(expectedResult);
    });

    it('returns kibana alert field', () => {
      const comment = {} as unknown as SnakeToCamelCase<CommentResponseAlertsType>;
      const alert = {
        kibana: { alert: { rule: { uuid: '1', name: 'Rule name1' } } },
      } as unknown as Ecs;

      expect(funcToExec(comment, alert)).toEqual(expectedResult);
    });

    it('returns signal field even when kibana alert field is defined', () => {
      const comment = {} as unknown as SnakeToCamelCase<CommentResponseAlertsType>;
      const alert = {
        signal: { rule: { id: '1', name: 'Rule name1' } },
        kibana: { alert: { rule: { uuid: 'rule id1', name: 'other rule name1' } } },
      } as unknown as Ecs;

      expect(funcToExec(comment, alert)).toEqual(expectedResult);
    });

    it('returns the first entry in the signals field', () => {
      const comment = {} as unknown as SnakeToCamelCase<CommentResponseAlertsType>;
      const alert = {
        signal: { rule: { id: '1', name: 'Rule name1' } },
        kibana: { alert: { rule: { uuid: 'rule id1', name: 'other rule name1' } } },
      } as unknown as Ecs;

      expect(funcToExec(comment, alert)).toEqual(expectedResult);
    });

    it('returns the alert field if the signals field is an empty string', () => {
      const comment = {} as unknown as SnakeToCamelCase<CommentResponseAlertsType>;
      const alert = {
        signal: { rule: { id: '', name: '' } },
        kibana: { alert: { rule: { uuid: '1', name: 'Rule name1' } } },
      } as unknown as Ecs;

      expect(funcToExec(comment, alert)).toEqual(expectedResult);
    });

    it('returns the alert field if the signals field is an empty string in an array', () => {
      const comment = {} as unknown as SnakeToCamelCase<CommentResponseAlertsType>;
      const alert = {
        signal: { rule: { id: [''], name: [''] } },
        kibana: { alert: { rule: { uuid: '1', name: 'Rule name1' } } },
      } as unknown as Ecs;

      expect(funcToExec(comment, alert)).toEqual(expectedResult);
    });

    it('returns the alert field first item if the signals field is an empty string in an array', () => {
      const comment = {} as unknown as SnakeToCamelCase<CommentResponseAlertsType>;
      const alert = {
        signal: { rule: { id: [''], name: [''] } },
        kibana: { alert: { rule: { uuid: ['1', '2'], name: ['Rule name1', 'Rule name2'] } } },
      } as unknown as Ecs;

      expect(funcToExec(comment, alert)).toEqual(expectedResult);
    });
  });
});
