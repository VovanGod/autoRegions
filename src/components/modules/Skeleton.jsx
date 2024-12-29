import React, { useState } from 'react';

const Skeleton = ({ image, name }) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <div className="skeleton"></div>}
      <img src={`img/${image}.jpg`} alt={name} onLoad={() => setLoading(false)} style={loading ? { display: 'none' } : {}} />
    </>
  );
};

export default Skeleton;