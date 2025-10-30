import { useState, useEffect } from 'react';
import { BrandContext } from "../context";
import PropTypes from 'prop-types';

const BrandProvider = ({ children }) => {
  const [brand, setBrand] = useState(null);

  useEffect(() => {
    // FAKE an API Call
    const data = {"name": "tapaScript", "color": "#765G45"}
    setBrand(data);
  }, []);

  return (
    <BrandContext value={brand}>
      {children}
    </BrandContext>
  );
};
BrandProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BrandProvider;