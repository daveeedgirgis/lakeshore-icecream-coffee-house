import { Link } from 'react-router-dom'

const Home = () => {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Ethically Sourced",
      description: "Premium organic fair-trade coffee that supports farmers and protects our environment."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
        </svg>
      ),
      title: "Lakeside Experience",
      description: "Stunning Lake Ontario views with comfortable outdoor seating and peaceful atmosphere."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Artisan Quality",
      description: "Handcrafted ice cream, fresh sandwiches, and gourmet desserts made daily with care."
    }
  ]

  const testimonials = [
    {
      quote: "The most beautiful coffee shop in Burlington! The lakeside view makes every visit special.",
      author: "Sarah Mitchell",
      rating: 5,
      location: "Burlington Local"
    },
    {
      quote: "Outstanding coffee and the best ice cream flavors. Our family's weekend tradition!",
      author: "Michael Thompson",
      rating: 5,
      location: "Regular Customer"
    },
    {
      quote: "Perfect spot for work meetings with great WiFi and even better atmosphere.",
      author: "Jennifer Lee",
      rating: 5,
      location: "Business Professional"
    }
  ]

  const stats = [
    { number: "1000+", label: "Happy Customers" },
    { number: "15+", label: "Ice Cream Flavors" },
    { number: "5", label: "Years Serving" },
    { number: "100%", label: "Organic Coffee" }
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-900 via-coffee-800 to-neutral-800">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
        ></div>
        <div className="relative z-10 text-center text-white section-padding py-20">
          <div className="animate-fadeIn">
            <h1 className="font-serif text-6xl md:text-8xl font-bold mb-8 leading-tight">
              Lakeshore
              <span className="block text-primary-400">Coffee House</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-neutral-200 max-w-3xl mx-auto font-light">
              Organic Fair-Trade Coffee • Premium Ice Cream & Desserts • Sandwiches & Snacks
            </p>
            <p className="text-lg mb-12 text-neutral-300 max-w-2xl mx-auto">
              Your perfect lakeside retreat in the heart of Burlington, Ontario
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/menu" className="btn-primary">
                Explore Our Menu
              </Link>
              <Link to="/location" className="btn-secondary">
                Visit Us Today
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="section-title text-gradient">
              Why Choose Lakeshore?
            </h2>
            <p className="section-subtitle">
              We're more than just a café – we're your lakeside community hub dedicated to quality, sustainability, and exceptional experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-2xl font-semibold text-coffee-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-coffee-50">
        <div className="container-max section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-4xl md:text-5xl font-bold text-coffee-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="section-title">
                Crafted with <span className="text-primary-600">Passion</span>
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Since 2019, we've been Burlington's premier destination for exceptional coffee and artisanal treats. 
                Our commitment to quality and community shines through in every cup we serve and every smile we share.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  <span className="text-neutral-700">Independently owned and operated</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  <span className="text-neutral-700">Sustainable and ethical sourcing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  <span className="text-neutral-700">Community-focused and locally loved</span>
                </div>
              </div>
              <Link to="/about" className="btn-outline">
                Learn Our Story
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Lakeshore Coffee House interior"
                  className="w-full h-96 object-cover rounded-2xl shadow-medium"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-200 rounded-2xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-coffee-200 rounded-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-coffee-50 to-primary-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="section-title">
              What Our <span className="text-primary-600">Customers</span> Say
            </h2>
            <p className="section-subtitle">
              Don't just take our word for it – hear from our wonderful community!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card card-hover p-8">
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-neutral-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-neutral-200 pt-4">
                  <p className="font-semibold text-coffee-800">{testimonial.author}</p>
                  <p className="text-sm text-neutral-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-coffee-800 to-coffee-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-primary-400 rounded-full -translate-x-20 -translate-y-20"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary-300 rounded-full translate-x-16 translate-y-16"></div>
        </div>
        <div className="container-max section-padding text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience <span className="text-primary-400">Lakeshore?</span>
          </h2>
          <p className="text-xl mb-10 text-neutral-200 max-w-2xl mx-auto">
            Join us for exceptional coffee, delicious treats, and beautiful lakeside views. 
            Your perfect café experience awaits!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/menu" className="bg-white text-coffee-800 hover:bg-primary-50 font-medium py-4 px-8 rounded-full transition-all duration-300 shadow-soft hover:shadow-medium">
              Explore Our Menu
            </Link>
            <Link to="/location" className="border-2 border-white text-white hover:bg-white hover:text-coffee-800 font-medium py-4 px-8 rounded-full transition-all duration-300">
              Find Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home