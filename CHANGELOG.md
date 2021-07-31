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

- Fetch button disabled while fetching
- Location field aligns with current representation

## 1.2.0

### Added

- Form controls now contain an icon based on known field `type`s:
  - `search`
  - `tel`
  - `url`
  - `email`
  - `password`
  - `date`
  - `month`
  - `week`
  - `time`
  - `datetime-local`
  - `number`

### Changed

- The text shown when an action has no fields is now larger and has more
  spacing.

### Fixed

- [#8]: `radio` fields' `title` is now displayed as a form control label

[#8]: https://github.com/siren-js/api-browser/issues/8

## 1.1.1 - 2021-06-17

### Fixed

- [#2]: Modals now close properly after navigation
- Typo in sub-entities panel

[#2]: https://github.com/siren-js/api-browser/issues/2

## 1.1.0 - 2021-06-16

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
- [#5]: Generating content for empty property values.

[#3]: https://github.com/siren-js/api-browser/issues/3
[#4]: https://github.com/siren-js/api-browser/issues/4
[#5]: https://github.com/siren-js/api-browser/issues/5

## 1.0.0 - 2021-05-31

### Added

- Fetch entry point URL
- Display an (embedded) entity
  - Render the `title` as the header, the `class` elements as tags, and panels
    for the `actions`, `links`, and `entities`
  - JSON representation of the entity
- Follow (embedded) links
- Submit actions
