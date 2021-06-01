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

### Changed

- Center location input control
- Update location input control value to show current location

## 1.0.0

### Added

- Fetch entry point URL
- Display an (embedded) entity
  - Render the `title` as the header, the `class` elements as tags, and panels
    for the `actions`, `links`, and `entities`
  - JSON representation of the entity
- Follow (embedded) links
- Submit actions
