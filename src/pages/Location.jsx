const Location = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      <div className="bg-coffee-800 text-white py-16">
        <div className="container-max section-padding text-center">
          <h1 className="font-display font-bold text-5xl mb-4">Location & Hours</h1>
          <p className="text-xl text-coffee-200">
            Find us on beautiful Lakeshore Road
          </p>
        </div>
      </div>

      <div className="container-max section-padding py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display font-bold text-3xl text-coffee-800 mb-8">
              Visit Us Today
            </h2>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="font-display font-semibold text-xl text-coffee-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3 text-coffee-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Address
              </h3>
              <p className="text-coffee-700 text-lg mb-2">2007 Lakeshore Rd</p>
              <p className="text-coffee-700 text-lg mb-4">Burlington, ON L7R 1A1</p>
              <a
                href="https://maps.google.com/?q=2007+Lakeshore+Rd,+Burlington,+ON+L7R+1A1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-coffee-600 hover:text-coffee-800 font-medium"
              >
                Get Directions
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="font-display font-semibold text-xl text-coffee-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3 text-coffee-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Hours of Operation
              </h3>
              <div className="space-y-2 text-coffee-700">
                <div className="flex justify-between">
                  <span className="font-medium">Sunday - Friday</span>
                  <span>9:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday</span>
                  <span>9:00 AM - 9:00 PM</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-coffee-50 rounded-md">
                <p className="text-sm text-coffee-600">
                  <strong>Holiday Hours:</strong> Please check our social media for holiday hours and special closures.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="font-display font-semibold text-xl text-coffee-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3 text-coffee-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact Information
              </h3>
              <div className="space-y-3 text-coffee-700">
                <div className="flex items-center">
                  <span className="font-medium mr-3">Phone:</span>
                  <a href="tel:+19056311622" className="text-coffee-600 hover:text-coffee-800">
                    (905) 631-1622
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="font-medium mr-3">Email:</span>
                  <a href="mailto:lakeshorecoffeehouse@cogeco.ca" className="text-coffee-600 hover:text-coffee-800">
                    lakeshorecoffeehouse@cogeco.ca
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-lake-100 p-4 rounded-lg text-center">
                <svg className="w-8 h-8 text-lake-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
                <h4 className="font-medium text-coffee-800 mb-1">Free WiFi</h4>
                <p className="text-sm text-coffee-600">Perfect for work or study</p>
              </div>
              
              <div className="bg-green-100 p-4 rounded-lg text-center">
                <svg className="w-8 h-8 text-green-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="font-medium text-coffee-800 mb-1">Outdoor Seating</h4>
                <p className="text-sm text-coffee-600">Lakeside patio available</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-xl text-coffee-800 mb-4">
              Find Us on the Map
            </h3>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.8736842887943!2d-79.80885932346991!3d43.31676437112925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9c5e2a7f3c1d%3A0x5c8e5e8e8e8e8e8e!2s2007%20Lakeshore%20Rd%2C%20Burlington%2C%20ON%20L7R%201A3%2C%20Canada!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lakeshore Ice Cream & Coffee House Location"
              ></iframe>
            </div>
            
            <div className="mt-6 bg-coffee-100 p-6 rounded-lg">
              <h4 className="font-display font-semibold text-lg text-coffee-800 mb-3">
                Getting Here
              </h4>
              <ul className="space-y-2 text-coffee-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 text-coffee-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Free parking available on-site
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 text-coffee-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Accessible by Burlington Transit
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 text-coffee-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Walking distance from Lakeshore Trail
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 text-coffee-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Wheelchair accessible with highchairs available
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 text-coffee-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Multiple levels of seating with cozy fireplace
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location