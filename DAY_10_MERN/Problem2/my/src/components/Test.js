import React, { useState, useMemo } from 'react';

const HeavyComputationComponent = ({ items }) => {
  const [filterTerm, setFilterTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [executionTime, setExecutionTime] = useState(0);

  // Use useMemo to memoize the filtered items
  const filteredItemsMemoized = useMemo(() => {
    const startTime = performance.now();

    // Expensive computation: filtering the items based on the filter term
    const filtered = items.filter(item => item.includes(filterTerm));

    const endTime = performance.now();
    // Calculate execution time and update state
    setExecutionTime(endTime - startTime);

    return filtered;
  }, [items, filterTerm]);

  // Update filtered items when filter term changes
  useState(() => {
    setFilteredItems(filteredItemsMemoized);
  }, [filteredItemsMemoized]);

  const handleFilterChange = event => {
    setFilterTerm(event.target.value);
  };

  return (
    <div>
      <h2>Heavy Computation Component</h2>
      <input
        type="text"
        value={filterTerm}
        onChange={handleFilterChange}
        placeholder="Enter filter term"
      />
      <p>Execution Time: {executionTime.toFixed(2)} milliseconds</p>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default HeavyComputationComponent;
