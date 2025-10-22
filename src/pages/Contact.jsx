const Contact = () => {

  return (
    <div className="min-h-screen bg-cream-50">
      <div className="bg-coffee-800 text-white py-16">
        <div className="container-max section-padding text-center">
          <h1 className="font-display font-bold text-5xl mb-4">Contact Us</h1>
          <p className="text-xl text-coffee-200">
            We'd love to hear from you
          </p>
        </div>
      </div>

      <div className="container-max section-padding py-16">
        <div className="max-w-4xl mx-auto">
          <div>
            <h2 className="font-display font-bold text-3xl text-coffee-800 mb-8">
              Get in Touch
            </h2>
            <p className="text-coffee-700 text-lg mb-8">
              Have a question, suggestion, or just want to say hello? We're always excited to hear from our customers and community members.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-coffee-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-coffee-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-coffee-800 mb-1">Visit Us</h3>
                  <p className="text-coffee-700">2007 Lakeshore Rd</p>
                  <p className="text-coffee-700">Burlington, ON L7R 1A1</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-coffee-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-coffee-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-coffee-800 mb-1">Call Us</h3>
                  <p className="text-coffee-700">
                    <a href="tel:+19056311622" className="hover:text-coffee-600 transition-colors">
                      (905) 631-1622
                    </a>
                  </p>
                  <p className="text-sm text-coffee-600">Sunday - Saturday: 9:00 AM - 9:00 PM</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-coffee-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-coffee-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-coffee-800 mb-1">Email Us</h3>
                  <p className="text-coffee-700">
                    <a href="mailto:lakeshorecoffeehouse@cogeco.ca" className="hover:text-coffee-600 transition-colors">
                      lakeshorecoffeehouse@cogeco.ca
                    </a>
                  </p>
                  <p className="text-sm text-coffee-600">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-coffee-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-coffee-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-coffee-800 mb-1">Follow Us</h3>
                  <div className="flex space-x-3">
                    <a
                      href="https://www.instagram.com/lakeshorecoffeehouse/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-coffee-600 hover:text-coffee-800 transition-colors"
                    >
                      @lakeshorecoffeehouse
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact