import React from 'react';
import { useSelector } from 'react-redux';

import './config/Reactotron';

import createRoutes from './routes';

export default function App() {
  const signed = useSelector(state => state.auth.signed);
  const families = useSelector(state => state.families.data);
  const loading = useSelector(state => state.families.loading);

  const Routes = createRoutes(signed, families, loading);
  return <Routes />;
}
