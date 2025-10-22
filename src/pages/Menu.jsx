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
    <div className="min-h-screen bg-cream-50">
      <div className="bg-coffee-800 text-white py-16">
        <div className="container-max section-padding text-center">
          <h1 className="font-display font-bold text-5xl mb-4">Our Menu</h1>
          <p className="text-xl text-coffee-200">
            Crafted with care, served with love
          </p>
        </div>
      </div>

      <div className="container-max section-padding py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                activeCategory === category
                  ? 'bg-coffee-600 text-white'
                  : 'bg-white text-coffee-600 hover:bg-coffee-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-3xl text-coffee-800 mb-8 text-center">
            {activeCategory}
          </h2>
          
          <div className="grid gap-6">
            {menuData[activeCategory].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display font-semibold text-xl text-coffee-800">
                    {item.name}
                  </h3>
                  <span className="font-bold text-lg text-coffee-600 ml-4">
                    {item.price}
                  </span>
                </div>
                
                <p className="text-coffee-600 mb-3 leading-relaxed">
                  {item.description}
                </p>
                
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getTagColor(tag)}`}
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

        <div className="mt-16 bg-coffee-100 p-8 rounded-lg text-center">
          <h3 className="font-display font-bold text-2xl text-coffee-800 mb-4">
            Dietary Information
          </h3>
          <div className="flex flex-wrap justify-center gap-6 text-coffee-700">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 bg-green-100 rounded-full border-2 border-green-500"></span>
              <span>Vegan Options Available</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 bg-blue-100 rounded-full border-2 border-blue-500"></span>
              <span>Gluten-Free Options Available</span>
            </div>
          </div>
          <p className="mt-4 text-coffee-600">
            Please inform our staff of any allergies or dietary restrictions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Menu