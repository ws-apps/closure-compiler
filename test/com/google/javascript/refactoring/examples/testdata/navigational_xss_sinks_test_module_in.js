/*
 * Copyright 2016 The Closure Compiler Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Test cases for the navigational_xss_sinks.js RefasterJs
 * template.
 */

goog.module('refactoring_testcase');
const foo = goog.require('goog.foo');

/**
 * @param {!Location} target The target.
 * @param {string} val The value.
 */
exports.nonnull_location_href = function(target, val) {
  foo.bar();
  // Should match before_setLocationHref.
  target.href = val;
};
