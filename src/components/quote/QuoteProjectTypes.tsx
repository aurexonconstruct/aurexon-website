import React from 'react';
import { QUOTE_PROJECT_TYPES } from '../../data/quoteData';

interface QuoteProjectTypesProps {
  selectedType: string;
  onSelectType: (id: string) => void;
}

export const QuoteProjectTypes: React.FC<QuoteProjectTypesProps> = ({
  selectedType,
  onSelectType
}) => {
  return (
    <div className="mb-8">
      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-3">
        Project Type / Scope Category <span className="text-[#C5A869]">*</span>
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
        {QUOTE_PROJECT_TYPES.map((type) => {
          const isSelected = selectedType === type.id;
          return (
            <button
              key={type.id}
              type="button"
              onClick={() => onSelectType(type.id)}
              className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#C5A869]/15 border-[#C5A869] text-white shadow-sm'
                  : 'bg-[#070E1B] border-[#1E293B] text-slate-300 hover:border-slate-600'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-xs font-medium text-white">{type.name}</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                {type.category}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
