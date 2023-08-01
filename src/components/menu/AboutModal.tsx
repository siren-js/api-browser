import './AboutModal.css';

import { Component, For } from 'solid-js';

import { hideAboutModal, isAboutModalActive } from '../../stores/about';
import { CodeBlock } from '../CodeBlock';
import { ExternalLink } from '../ExternalLink';

export const AboutModal: Component = () => {
  return (
    <div class="modal" classList={{ 'is-active': isAboutModalActive() }}>
      <div class="modal-background" onClick={hideAboutModal}></div>
      <div class="modal-content">
        <div class="box">
          <About />
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" onClick={hideAboutModal}></button>
    </div>
  );
};

const supportedFieldTypes = [
  'checkbox',
  'date',
  'date-time',
  'datetime-local',
  'email',
  'file',
  'month',
  'number',
  'password',
  'radio',
  'search',
  'tel',
  'text',
  'time',
  'url',
  'week',
];

const About: Component = () => (
  <div class="content">
    <h2>About</h2>
    <p>
      <ExternalLink href="https://github.com/siren-js">Siren.js</ExternalLink> API browser provides a UI for exploring{' '}
      <ExternalLink href="https://github.com/kevinswiber/siren">Siren</ExternalLink> via the{' '}
      <ExternalLink href="https://github.com/siren-js/client">Siren.js client</ExternalLink>. There are a few things to
      note when using the browser with your API, primarily around <code>fields</code> and how their values are set
      before action submission.
    </p>

    <h3>Fields</h3>
    <p>
      The following field <code>type</code>s are supported:
    </p>
    <ul class="supported-field-type-list">
      <For each={supportedFieldTypes}>
        {(type) => (
          <li>
            <code>{type}</code>
          </li>
        )}
      </For>
    </ul>
    <p>
      Most of these are displayed using the corresponding{' '}
      <ExternalLink href="https://html.spec.whatwg.org/multipage/input.html#attr-input-type">
        HTML input <code>type</code>
      </ExternalLink>
      . <code>date-time</code> is an alias for <code>datetime-local</code>. Other exceptions are noted below.
    </p>
    <p>
      Unknown field <code>type</code>s are displayed as simple text inputs.
    </p>

    <h4>Checkboxes</h4>
    <p>
      <code>checkbox</code> fields are presented as HTML checkboxes. Checking the HTML checkbox sets the field's{' '}
      <code>value</code> to <code>true</code>. Unchecking it sets the <code>value</code> to <code>false</code>. A
      default value from the server is converted to a <code>boolean</code>, so a{' '}
      <ExternalLink href="https://developer.mozilla.org/en-US/docs/Glossary/Truthy">truthy</ExternalLink> value will
      initially check the checkbox.
    </p>

    <h4>File Uploads</h4>
    <p>
      <code>file</code> fields are displayed as a single-file input. The contents of the file are only sent when the
      parent action's <code>type</code> is <code>multipart/form-data</code>. Otherwise, only the file's name is sent to
      the server.
    </p>

    <h4>Radio Buttons</h4>
    <p>
      <code>radio</code> fields must include an <code>options</code> property with an array of one or more option
      objects. Here's an example:
    </p>
    <CodeBlock language="json">
      {JSON.stringify(
        {
          name: 'hogwartsHouse',
          type: 'radio',
          options: [
            { title: 'Gryffindor', value: 'g' },
            { title: 'Hufflepuff', value: 'h' },
            { title: 'Ravenclaw', value: 'r' },
            { title: 'Slytherin', value: 's' },
          ],
        },
        null,
        2,
      )}
    </CodeBlock>
    <p>
      Each option object must include a <code>value</code> property used to set the field's <code>value</code> when that
      option is selected. There is also an optional <code>title</code> property, which can be used to customize the
      option's label.
    </p>
    <p>
      Rather than display <code>radio</code> fields as HTML radio buttons, the browser displays them as an HTML
      dropdown. HTML's radio buttons have a few shortcomings. First, they don't allow the user to deselect an option.
      Second, since the browser cannot control the number of options, radio buttons could consume a lot of screen real
      estate.
    </p>
    <p>
      Using a dropdown allows the browser to easily provide a default or "no selection" option, depending on the{' '}
      <code>radio</code> field's initial (default) <code>value</code>. When the <code>value</code> provided by the
      server (possibly <code>null</code>) matches one of the option object's <code>value</code>, no default option is
      generated and the matching option is selected initially. However, when the initial <code>value</code> does{' '}
      <em>not</em> match any of the <code>options</code>, a default option is generated with the same <code>value</code>
      . Therefore, when there is no default field <code>value</code>, selecting the default option removes the field's{' '}
      <code>value</code>.
    </p>
  </div>
);
