import { useState } from 'react';
import { BasicFormField, FieldProp } from './core';

export default function FileUploadControl({ field }: FieldProp) {
  const [selectedFiles, setSelectedFiles] = useState(null as FileList | null);
  return (
    <BasicFormField field={field}>
      <div className={`file${selectedFiles?.length ? ' has-name' : ''}`}>
        <label className="file-label">
          <input
            type="file"
            className="file-input"
            multiple={!!field.multiple}
            onChange={async ({ target: { files } }) => {
              setSelectedFiles(files);
              field.files = files;
            }}
          />
          <span className="file-cta">
            <span className="file-icon">
              <i className="fas fa-upload"></i>
            </span>
            <span className="file-label">Choose a file...</span>
          </span>
          {selectedFiles?.length ? (
            <span className="file-name">
              {[...selectedFiles].map((file) => file.name)}
            </span>
          ) : null}
        </label>
      </div>
    </BasicFormField>
  );
}
