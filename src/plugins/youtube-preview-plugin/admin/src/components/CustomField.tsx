// src/plugins/youtube-preview-plugin/admin/src/components/CustomField.tsx
import React from 'react';
import YoutubeUrlInput from './YoutubeURLInput';
import ThumbnailDisplay from './ThumbnailDisplay';
import { Stack } from '@strapi/design-system/Stack';
import { GenericInputProps } from '@strapi/helper-plugin';

export interface CustomFieldProps extends Omit<GenericInputProps, 'onChange'> {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
  value: string | undefined;
  intlLabel: {
    id: string;
    defaultMessage: string;
  };
  required: boolean;
  description?: {
    id: string;
    defaultMessage: string;
  };
  error?: string;
  disabled?: boolean;
}

const CustomField: React.FC<CustomFieldProps> = ({
  value,
  onChange,
  name,
  intlLabel,
  required,
  description,
  error,
  disabled,
}) => {
  return (
    <Stack spacing={1}>
      <YoutubeUrlInput
              value={value}
              onChange={onChange}
              name={name}
              intlLabel={intlLabel}
              required={required}
              description={description}
              error={error}
              disabled={disabled} type={''}      />
      {value && <ThumbnailDisplay url={value} />}
    </Stack>
  );
};

export default CustomField;