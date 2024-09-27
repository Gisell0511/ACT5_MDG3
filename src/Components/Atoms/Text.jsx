import React from 'react';
import '../Atoms/Text.css';

const Text = ({ children, variant = 'body' }) => {
  const classes = `text-${variant}`;
  return <p className={classes}>{children}</p>;
};

export default Text;
