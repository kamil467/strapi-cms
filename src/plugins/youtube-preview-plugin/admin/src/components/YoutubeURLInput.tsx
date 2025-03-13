// src/plugins/youtube-custom-field/admin/src/components/YoutubeUrlInput.tsx
import React from 'react';
import { TextInput } from '@strapi/design-system/TextInput';
import { CustomFieldProps } from './CustomField'

interface YoutubeUrlInputProps extends CustomFieldProps {
  value: string | undefined;
}

const YoutubeUrlInput: React.FC<YoutubeUrlInputProps> = ({ onChange, name, value, intlLabel, required, description }) => {
  return (
    <div>
      <TextInput
        label={intlLabel.defaultMessage}
        name={name}
        onChange={(e: { target: { value: any; }; }) => onChange({ target: { name, value: e.target.value } })}
        value={value || ''}
        required={required}
        placeholder="Enter YouTube URL"
        description={description?.defaultMessage}
      />
    </div>
  );
};

export default YoutubeUrlInput;