// @flow
import * as React from 'react';
import './style.css';
import Header from './Header';

type Props = {
  children: React.Node
};

const Site = (props: Props) => {
  return (
    <div className="site fullScreen">
      {props.children}
    </div>
  );
};

Site.Header = Header;
export default Site;
