import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function SignUp(props) {
  return (
    // need to add redux form for this-- no button
    <Link to="/dashboard"><button>Skip to dashboard</button></Link>
  )
}
