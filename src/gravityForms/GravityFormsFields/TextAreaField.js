import React from "react";
import { graphql } from "gatsby";

import useGravityForm, { ACTION_TYPES } from "../hooks/useGravityForm";

export const TEXT_AREA_FIELD_FIELDS = graphql`
  fragment TextAreaFieldFields on WpTextAreaField {
    id
    label
    description
    cssClass
    isRequired
    placeholder
  }
`;

const DEFAULT_VALUE = '';

export default function TextAreaField({ field, fieldErrors }) {
  const { id, formId, type, label, description, cssClass, isRequired, placeholder } = field;
  const htmlId = `field_${formId}_${id}`;
  const { state, dispatch } = useGravityForm();
  const fieldValue = state.find((fieldValue) => fieldValue.id === id);
  const value = fieldValue?.value || DEFAULT_VALUE;

  return (
    <div className={`gfield gfield-${type} ${cssClass}`.trim()}>
      <label htmlFor={htmlId}>{label}{isRequired && <span className="is-required"> (Required)</span>}</label>
      <textarea
        name={String(id)}
        id={htmlId}
        required={isRequired}
        value={value}
        placeholder={placeholder}
        onChange={event => {
          dispatch({
            type: ACTION_TYPES.updateTextAreaFieldValue,
            fieldValue: {
              id,
              value: event.target.value,
            },
          })
        }}
      />
      {description ? <p className="field-description">{description}</p> : null}
      {fieldErrors?.length ? fieldErrors.map(fieldError => (
        <p key={fieldError.id} className="error-message">{fieldError.message}</p>
      )) : null}
    </div>
  );
}
