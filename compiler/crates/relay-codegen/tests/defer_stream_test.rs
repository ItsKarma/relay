/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<fdc5d4fcae9d2796db625c70fdb644eb>>
 */

mod defer_stream;

use defer_stream::transform_fixture;
use fixture_tests::test_fixture;

#[test]
fn fragment_with_defer_default_label() {
    let input = include_str!("defer_stream/fixtures/fragment-with-defer-default-label.graphql");
    let expected = include_str!("defer_stream/fixtures/fragment-with-defer-default-label.expected");
    test_fixture(transform_fixture, "fragment-with-defer-default-label.graphql", "defer_stream/fixtures/fragment-with-defer-default-label.expected", input, expected);
}

#[test]
fn fragment_with_stream_default_label() {
    let input = include_str!("defer_stream/fixtures/fragment-with-stream-default-label.graphql");
    let expected = include_str!("defer_stream/fixtures/fragment-with-stream-default-label.expected");
    test_fixture(transform_fixture, "fragment-with-stream-default-label.graphql", "defer_stream/fixtures/fragment-with-stream-default-label.expected", input, expected);
}
