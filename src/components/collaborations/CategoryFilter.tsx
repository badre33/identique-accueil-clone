
interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
            selectedCategory === category
              ? "bg-black text-white shadow-lg scale-105"
              : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
