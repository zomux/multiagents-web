import React, { useEffect } from 'react';
import { Redirect } from '@docusaurus/router';

export default function WorkshopRedirect() {
  useEffect(() => {
    window.location.replace('/2026/');
  }, []);

  return <Redirect to="/2026/" />;
}
