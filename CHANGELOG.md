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
- Display original JSON source (in addition to current state)
- Support for multi-`select`

### Changed

- Update location input control value to show current location

## 1.1.0

### Added

- Settings
  - Customize HTTP headers to be sent in each request
  - Toggle title casing property names

### Changed

- Upgraded `@siren-js/client` from v0.1.0 to v0.3.1, which allows for custom
  HTTP headers, supports more field type submission, and fixes submitting no
  value
- Location form is now centered

### Fixed

- [#3]: Actions are now properly submitted with the Enter key.
- [#4]: Navbar is now visible on touch devices.

[#3]: https://github.com/siren-js/api-browser/issues/3
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
