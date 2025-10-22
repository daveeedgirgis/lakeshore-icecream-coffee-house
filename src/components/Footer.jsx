const Footer = () => {
  return (
    <footer className="bg-coffee-800 text-white">
      <div className="container-max section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display font-bold text-xl mb-4">
              Lakeshore Ice Cream & Coffee House
            </h3>
            <p className="text-coffee-200 mb-4">
              Your lakeside destination for organic fair-trade coffee, premium ice cream, and delicious treats.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/lakeshoreicecream"
                target="_blank"
                rel="noopener noreferrer"
                className="text-coffee-300 hover:text-white transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.326-1.297C4.246 14.794 3.756 13.643 3.756 12.346s.49-2.448 1.367-3.326c.878-.878 2.029-1.367 3.326-1.367s2.448.49 3.326 1.367c.878.878 1.367 2.029 1.367 3.326s-.49 2.448-1.367 3.326c-.878.878-2.029 1.297-3.326 1.297zm7.718 0c-1.297 0-2.448-.49-3.326-1.297-.878-.878-1.367-2.029-1.367-3.326s.49-2.448 1.367-3.326c.878-.878 2.029-1.367 3.326-1.367s2.448.49 3.326 1.367c.878.878 1.367 2.029 1.367 3.326s-.49 2.448-1.367 3.326c-.878.878-2.029 1.297-3.326 1.297z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com/lakeshoreicecream"
                target="_blank"
                rel="noopener noreferrer"
                className="text-coffee-300 hover:text-white transition-colors duration-200"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-2 text-coffee-200">
              <p>📧 hello@lakeshoreicecream.ca</p>
              <p>📞 (905) 639-2773</p>
              <p>📍 2007 Lakeshore Rd, Burlington, ON</p>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Hours</h4>
            <div className="space-y-1 text-coffee-200">
              <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
              <p>Saturday: 8:00 AM - 9:00 PM</p>
              <p>Sunday: 8:00 AM - 7:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-coffee-700 mt-8 pt-8 text-center text-coffee-300">
          <p>&copy; 2024 Lakeshore Ice Cream & Coffee House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer