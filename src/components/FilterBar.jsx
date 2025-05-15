// FilterBar component to display filter options
export function FilterBar({ selectedFilter, onFilterChange, plantCounts = {} }) {
  // Filter options, each with a label, value, and whether to show the count
  const filters = [
    { label: "Thirsty 💦", value: "thirsty", showCount: true },
    { label: "All", value: "all", showCount: true },
    { label: "Kitchen Window", value: "Kitchen Window", showCount: true },
    { label: "Kitchen Shelf", value: "Kitchen Shelf", showCount: true },
    { label: "Living Room", value: "Living Room", showCount: true },
    { label: "Corridor", value: "Corridor", showCount: true },
    { label: "Balcony", value: "Balcony", showCount: true },
    { label: "Parents Room", value: "Parents Room", showCount: true },
    { label: "Marius Room", value: "Marius Room", showCount: true },
    { label: "Caterina Room", value: "Caterina Room", showCount: true },
    { label: "Sleeping Room", value: "Sleeping Room", showCount: true },
    { label: "Floor", value: "Floor", showCount: true },
  ];

  return (
    <div>
      <div className="flex overflow-x-auto whitespace-nowrap gap-2 lg:pb-4 scrollbar-hide">
        {/* Loop through each filter option */}
        {filters.map((filter) => {
          // Get the count for the filter value (number of plants in that category)
          const count = plantCounts[filter.value] || 0;
          // Check if the filter is currently active (selected)
          const isActive = selectedFilter === filter.value;

          // Skip the filter button if there are no plants in that category and it's not the "All" category
          if (count === 0 && filter.value !== "all") {
            return null;
          }

          return (
            <button
              key={filter.value}
              onClick={() => onFilterChange(filter.value)}
              className={`px-4 py-2 min-w-fit rounded-md border transition-all duration-200
              ${
                isActive
                  ? "bg-[#002D25] text-white border-none text-tag-selected"
                  : "bg-white text-[#002D25] border-[#002D25] text-tag"
              }`}
            >
              {filter.label}{" "}
              {filter.showCount && count > 0 && (
                <span className="text-tag">({count})</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
