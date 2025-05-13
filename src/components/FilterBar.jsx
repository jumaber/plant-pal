import { useState } from "react";

const filters = [
  { label: "Thirsty 💦", value: "thirsty", showCount: false },
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
];

export function FilterBar({ selectedFilter, onFilterChange, plantCounts = {} }) {
  return (
    <div className="flex flex-wrap gap-2 pb-4">
      {filters.map((filter) => {
        const count = plantCounts[filter.value] || 0;  // Verifica a quantidade de plantas por divisão
        const isActive = selectedFilter === filter.value;

        // Esconde o filtro se não houver plantas na divisão (mas mantém a aba "All")
        if (count === 0 && filter.value !== "all") {
          return null;
        }

        return (
          <button
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            className={`px-4 py-2 rounded-md border transition-all duration-200
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
  );
}
