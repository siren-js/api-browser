import { createSignal } from 'solid-js';

const [isAboutModalActive, setIsAboutModalActive] = createSignal(false);

export { isAboutModalActive };
export const showAboutModal = () => setIsAboutModalActive(true);
export const hideAboutModal = () => setIsAboutModalActive(false);
