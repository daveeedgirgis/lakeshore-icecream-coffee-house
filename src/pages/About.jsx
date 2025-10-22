const About = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      <div className="bg-coffee-800 text-white py-16">
        <div className="container-max section-padding text-center">
          <h1 className="font-display font-bold text-5xl mb-4">About Us</h1>
          <p className="text-xl text-coffee-200">
            Our story by the lake
          </p>
        </div>
      </div>

      <div className="container-max section-padding py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="font-display font-bold text-4xl text-coffee-800 mb-6">
              Welcome to Lakeshore
            </h2>
            <div className="prose prose-lg text-coffee-700 space-y-4">
              <p>
                Located directly across from the stunning Lake Ontario waterfront in Burlington, Lakeshore Ice Cream & Coffee House 
                is an independent, locally-owned café that has become a beloved gathering place for the community. 
                Our unique location offers unparalleled lakeside views and easy walkability from the waterfront trail.
              </p>
              <p>
                We pride ourselves on serving organic, fair-trade coffee alongside our extensive menu of ice cream, 
                desserts, sandwiches, paninis, soups, salads, quiches, and Belgian waffles. Our commitment to quality 
                over volume means every item is prepared with care, emphasizing fresh, local ingredients whenever possible.
              </p>
              <p>
                With multiple levels of comfortable seating, including a cozy fireplace area and window views overlooking 
                the lake, Lakeshore offers the perfect atmosphere whether you're here for a leisurely coffee, family dessert time, 
                remote work session with free WiFi, or simply enjoying Burlington's beautiful waterfront neighborhood.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/store-exterior-patio.png"
              alt="Lakeshore Coffee House exterior and patio with beautiful lakeside location"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-16">
          <h3 className="font-display font-bold text-3xl text-coffee-800 mb-8 text-center">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-display font-semibold text-xl text-coffee-800 mb-2">Quality & Ethics</h4>
              <p className="text-coffee-600">
                We serve only organic, fair-trade coffee and maintain high standards for all our 
                offerings, from ice cream to fresh sandwiches and daily soups.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-coffee-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-coffee-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-display font-semibold text-xl text-coffee-800 mb-2">Family Friendly</h4>
              <p className="text-coffee-600">
                Perfect for families with kids who love ice cream, remote workers needing WiFi, 
                and tourists exploring Burlington's beautiful lakeside attractions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-lake-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-lake-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h4 className="font-display font-semibold text-xl text-coffee-800 mb-2">Lakeside Location</h4>
              <p className="text-coffee-600">
                Our prime waterfront location offers outdoor seating with stunning lake views 
                and convenient access to Burlington's waterfront trail and attractions.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src="/images/lakeshore-ice-cream.png"
              alt="Ice cream enjoyed at Lakeshore with beautiful lakeside view"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="font-display font-bold text-3xl text-coffee-800 mb-6">
              More Than Coffee
            </h3>
            <div className="space-y-4 text-coffee-700">
              <p>
                Our location isn't just convenient – it's magical. Situated right on Lakeshore Road, 
                we offer stunning views of Lake Ontario that change with the seasons. Watch the sunrise 
                over your morning coffee, enjoy lunch on our outdoor patio, or unwind with an evening 
                dessert as the sun sets over the water.
              </p>
              <p>
                We're proud to be independently owned and operated, which means every decision we make 
                is focused on serving our community better. From hosting local art exhibitions to 
                supporting neighborhood events, we're invested in making Burlington an even better place to live.
              </p>
              <p>
                Come as you are – whether you're dressed for a business meeting, fresh from a lakeside 
                walk, or just looking for a cozy spot to read. We're here to make your day a little brighter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About