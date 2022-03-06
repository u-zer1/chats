import React from 'react';
import { useNavigate } from 'react-router-dom';

import { RootAppContainer } from 'containers/root';
import { LayoutContext } from 'context/LayoutContext';
import { paths } from 'routes';

const RootAppPage = () => {
  const navigate = useNavigate();
  const { settings } = React.useContext(LayoutContext);
  const isAuth = true;

  React.useEffect(() => {
    if (!isAuth) {
      navigate(paths.AUTH);
    }
  }, []);

  return <RootAppContainer {...settings} />;
};

export default RootAppPage as React.FC;
