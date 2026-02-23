import React from "react";
import { Building2, Layers, Map } from "lucide-react";

export default function FranchiseModels() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tight">
            Franchise Models
          </h2>
          <div className="w-24 h-1.5 bg-primary rounded-full mx-auto mt-6 mb-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Option A */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
              <Building2 size={40} />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">Option A</h3>
            <h4 className="text-lg font-bold text-primary mb-6">
              Single-Unit Franchise
            </h4>
            <p className="text-gray-600 font-medium leading-relaxed">
              One specific location exclusively operated by a single franchisee.
              Ideal for hands-on, local business owners.
            </p>
          </div>

          {/* Option B */}
          <div className="bg-white rounded-3xl p-8 border-2 border-primary shadow-xl relative overflow-hidden flex flex-col items-center text-center transform md:-translate-y-4">
            <div className="absolute top-0 right-0 left-0 bg-primary text-white text-xs font-bold uppercase tracking-wider py-1.5 text-center">
              Most Popular
            </div>
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 mt-4">
              <Layers size={40} />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">Option B</h3>
            <h4 className="text-lg font-bold text-primary mb-6">
              Multi-Unit Franchise
            </h4>
            <p className="text-gray-600 font-medium leading-relaxed">
              Franchisee owns and operates multiple branches within a specific
              region. Scaling for maximum community impact.
            </p>
          </div>

          {/* Option C */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
              <Map size={40} />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">Option C</h3>
            <h4 className="text-lg font-bold text-primary mb-6">
              Master Franchise
            </h4>
            <p className="text-gray-600 font-medium leading-relaxed">
              One franchisee controls total rights to develop the brand across
              an entire city or country.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
