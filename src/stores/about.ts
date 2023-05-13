import { createSignal } from 'solid-js';

const [isAboutModalActive, setIsAboutModalActive] = createSignal(false);

export { isAboutModalActive };
export const activateAboutModal = () => setIsAboutModalActive(true);
export const deactivateAboutModal = () => setIsAboutModalActive(false);
