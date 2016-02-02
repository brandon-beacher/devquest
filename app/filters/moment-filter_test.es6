/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('moment', () => {
  beforeEach(module('devQuest'));

  it('should filter our numbers not greater than 3', inject(($filter) => {
    expect($filter('moment')([1, 2, 3, 4])).toEqual([4]);
  }));
});
