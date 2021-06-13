# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog][kac], and this project adheres to
[Semantic Versioning][semver].

[kac]: https://keepachangelog.com/en/1.0.0
[semver]: https://semver.org/spec/v2.0.0.html

## Unreleased

### Added

- Error response reporting
- Non-Siren response handling
- Tags for actions' `method` and `type`
- Configuration options
  - Siren client headers
  - Title casing property names
- Display original JSON source (in addition to current state)
- Support for multi-`select`

### Changed

- Center location form
- Update location input control value to show current location

## 1.1.0

### Changed

- Upgraded `@siren-js/client` from v0.1.0 to v0.3.1, which allows for custom
  HTTP headers, supports more field type submission, and fixes submitting no
  value

### Fixed

- Navbar is now visible on touch devices ([#4]).

[#4]: https://github.com/siren-js/api-browser/issues/4

## 1.0.0 - 2021-05-31

### Added

- Fetch entry point URL
- Display an (embedded) entity
  - Render the `title` as the header, the `class` elements as tags, and panels
    for the `actions`, `links`, and `entities`
  - JSON representation of the entity
- Follow (embedded) links
- Submit actions
