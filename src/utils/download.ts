import mime from 'mime';

const fileExtension = (content: Blob) =>
  content.type === 'application/vnd.siren+json' ? 'json' : mime.getExtension(content.type) ?? '';

function makeFile(name: string, content: Blob) {
  const ext = fileExtension(content);
  const fileName = `${name}.${ext}`;
  return new File([content], fileName, {
    type: content.type,
  });
}

export function createDownload(name: string, content: Blob) {
  const file = makeFile(name, content);
  const url = URL.createObjectURL(file);

  const link = document.createElement('a');
  link.href = url;
  link.download = file.name;
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
