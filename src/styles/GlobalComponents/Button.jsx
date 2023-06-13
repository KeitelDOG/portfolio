import React from 'react';

import { ButtonBack, ButtonFront } from './index';

function Button(props) {
  const {
    alt, form, disabled, onClick, children,
  } = props;
  return (
    <ButtonBack alt={alt} form={form} disabled={disabled}>
      {children}
      <ButtonFront alt={alt} onClick={onClick} disabled={disabled}>{children}</ButtonFront>
    </ButtonBack>
  );
}

export default Button;
