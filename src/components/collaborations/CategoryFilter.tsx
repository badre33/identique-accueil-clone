
interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="mb-12 flex gap-2 overflow-x-auto border-y border-black/15 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`shrink-0 border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] transition-colors ${
            selectedCategory === category
              ? "border-black bg-black text-white"
              : "border-black/20 bg-transparent text-black/60 hover:border-black hover:text-black"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
