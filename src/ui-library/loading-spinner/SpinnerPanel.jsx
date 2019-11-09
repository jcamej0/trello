import * as React from 'react';
import Spinner from '../../ui-library/loading-spinner';
import theme from './loading-spinner.module.scss';

const SpinnerPanel = () => (
  <div className={theme.spinner__panel}>
    <Spinner overlay={false} />
  </div>
);

export default SpinnerPanel;
