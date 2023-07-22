import mime from 'mime';

export const SIREN = 'application/vnd.siren+json';

export const fileExtension = (type: string) => (type === SIREN ? 'json' : mime.getExtension(type) ?? '');
