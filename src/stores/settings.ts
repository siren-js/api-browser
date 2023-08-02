import { createSignal } from 'solid-js';
import { createStore, produce } from 'solid-js/store';

const [isSettingsModalActive, setIsSettingsModalActive] = createSignal(false);

export { isSettingsModalActive };
export const showSettingsModal = () => setIsSettingsModalActive(true);
export const hideSettingsModal = () => setIsSettingsModalActive(false);

interface Settings {
  headers: [string, string][];
  relaxed: boolean;
}

const [settings, setSettings] = createStore<Settings>({
  headers: [['Accept', 'application/vnd.siren+json,application/json;q=0.9,*/*']],
  relaxed: false,
});

export { settings };

export const addHeader = () => setSettings(produce((state) => state.headers.push(['', ''])));

export const removeHeader = (index: number) => setSettings(produce((state) => state.headers.splice(index, 1)));

const updateHeader = (index: number, component: 0 | 1, value: string) =>
  setSettings(produce((state) => (state.headers[index][component] = value)));

export const updateHeaderName = (index: number, name: string) => updateHeader(index, 0, name);

export const updateHeaderValue = (index: number, value: string) => updateHeader(index, 1, value);

export const setRelaxed = (value: boolean) => setSettings('relaxed', value);
