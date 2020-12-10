import React from 'react';
import { Link } from 'react-router-dom';

function OtherPage() {
  return (
    <div>
      I am some other OtherPage
      <Link to="/">Go back home</Link>
    </div>
  );
}

export default OtherPage;
