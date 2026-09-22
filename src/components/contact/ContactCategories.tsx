import React from 'react';
import { CONTACT_CATEGORIES } from '../../data/contactData';

interface ContactCategoriesProps {
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

export const ContactCategories: React.FC<ContactCategoriesProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  return (
    <div className="mb-8">
      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-3">
        Enquiry Category <span className="text-[#C5A869]">*</span>
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {CONTACT_CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#C5A869]/15 border-[#C5A869] text-white shadow-sm'
                  : 'bg-[#0B1528] border-[#1E293B] text-slate-300 hover:border-slate-600'
              }`}
            >
              <div className="text-xs font-medium text-white mb-0.5">{cat.name}</div>
              <div className="text-[10px] text-slate-400 line-clamp-1">{cat.description}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
