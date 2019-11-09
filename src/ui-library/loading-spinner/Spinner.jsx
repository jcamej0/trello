import React from 'react';
import { classBuilder } from '../../components/component-utils';
import theme from './loading-spinner.module.scss';


const Spinner = ({ overlay, opaque, fixed }) => (
  <div
    className={classBuilder.getClasses([
      overlay && theme['spinner-overlay'],
      fixed && theme['spinner-overlay--fixed'],
      opaque && theme['spinner-overlay--opaque'],
    ])}
  >
    <div className={theme.spinner} />
  </div>
);

Spinner.defaultProps = {
  overlay: true,
};

export default Spinner;
