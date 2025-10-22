import { useState } from 'react'
import { menuData } from '../data/menuData'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(Object.keys(menuData)[0])
  const categories = Object.keys(menuData)

  const getTagColor = (tag) => {
    switch (tag) {
      case 'Vegan':
        return 'bg-green-100 text-green-800'
      case 'Gluten-Free':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="bg-gradient-to-r from-coffee-800 to-coffee-900 text-white py-24">
        <div className="container-max section-padding text-center">
          <h1 className="font-serif text-6xl font-bold mb-6">Our Menu</h1>
          <p className="text-xl text-neutral-200 max-w-2xl mx-auto">
            Crafted with passion, served with love – discover our carefully curated selection of artisanal treats
          </p>
        </div>
      </div>

      <div className="container-max section-padding py-16">
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-soft hover:shadow-medium ${
                activeCategory === category
                  ? 'bg-coffee-700 text-white transform scale-105'
                  : 'bg-white text-neutral-700 hover:bg-primary-50 hover:text-coffee-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center text-gradient mb-12">
            {activeCategory}
          </h2>
          
          <div className="grid gap-8">
            {menuData[activeCategory].map((item, index) => (
              <div
                key={index}
                className="card card-hover p-8 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-2xl font-semibold text-coffee-800 group-hover:text-primary-600 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="font-bold text-2xl text-primary-600 ml-6 flex-shrink-0">
                    {item.price}
                  </span>
                </div>
                
                <p className="text-neutral-600 mb-4 leading-relaxed text-lg">
                  {item.description}
                </p>
                
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${getTagColor(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-br from-primary-50 to-coffee-50 p-10 rounded-2xl text-center shadow-soft">
          <h3 className="font-serif text-3xl font-semibold text-coffee-800 mb-6">
            Dietary Information
          </h3>
          <div className="flex flex-wrap justify-center gap-8 text-neutral-700 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-green-100 rounded-full border-3 border-green-500 flex items-center justify-center">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <span className="font-medium">Vegan Options Available</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full border-3 border-blue-500 flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
              <span className="font-medium">Gluten-Free Options Available</span>
            </div>
          </div>
          <p className="text-neutral-600 text-lg">
            Please inform our staff of any allergies or dietary restrictions. We're happy to accommodate your needs!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Menu