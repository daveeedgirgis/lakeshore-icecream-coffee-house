import { Link } from 'react-router-dom'

const Home = () => {
  const testimonials = [
    {
      quote: "The best coffee by the lake! The atmosphere is perfect for a morning walk.",
      author: "Sarah M.",
      rating: 5
    },
    {
      quote: "Amazing ice cream flavors and the lakeside view is unbeatable. Our family's favorite spot!",
      author: "Mike T.",
      rating: 5
    },
    {
      quote: "Love their organic fair-trade coffee and the outdoor seating. Great for work meetings too.",
      author: "Jennifer L.",
      rating: 5
    }
  ]

  return (
    <div>
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-lake-400 to-lake-600">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center text-white section-padding">
          <h1 className="font-display font-bold text-5xl md:text-7xl mb-6">
            Lakeshore Ice Cream<br />& Coffee House
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Organic Fair-Trade Coffee • Premium Ice Cream & Desserts • Sandwiches & Snacks
          </p>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Your perfect lakeside retreat in Burlington, Ontario
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu" className="btn-primary text-lg">
              View Our Menu
            </Link>
            <Link to="/location" className="btn-secondary text-lg">
              Visit Us Today
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl text-coffee-800 mb-4">
              Why Choose Lakeshore?
            </h2>
            <p className="text-lg text-coffee-600 max-w-2xl mx-auto">
              We're more than just a café – we're your lakeside community hub for quality and sustainability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-coffee-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-coffee-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-xl text-coffee-800 mb-2">Ethically Sourced</h3>
              <p className="text-coffee-600">Organic fair-trade coffee that supports farmers and the environment.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-cream-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-xl text-coffee-800 mb-2">Lakeside Location</h3>
              <p className="text-coffee-600">Beautiful outdoor seating with stunning views of Lake Ontario.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-lake-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-lake-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-xl text-coffee-800 mb-2">Premium Quality</h3>
              <p className="text-coffee-600">Artisanal ice cream, fresh sandwiches, and gourmet desserts daily.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-coffee-50">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl text-coffee-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-coffee-600">
              Don't just take our word for it – hear from our happy customers!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-coffee-700 mb-4 italic">"{testimonial.quote}"</p>
                <p className="text-coffee-600 font-medium">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-coffee-800 text-white">
        <div className="container-max section-padding text-center">
          <h2 className="font-display font-bold text-4xl mb-4">
            Ready to Experience Lakeshore?
          </h2>
          <p className="text-xl mb-8 text-coffee-200">
            Join us for exceptional coffee, delicious treats, and beautiful lakeside views.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu" className="bg-white text-coffee-800 hover:bg-coffee-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Explore Our Menu
            </Link>
            <Link to="/location" className="border-2 border-white text-white hover:bg-white hover:text-coffee-800 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Find Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home