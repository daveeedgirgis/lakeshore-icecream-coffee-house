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
                href="https://www.instagram.com/lakeshorecoffeehouse/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-coffee-300 hover:text-white transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 11.987c0-3.264-2.64-5.905-5.905-5.905s-5.905 2.641-5.905 5.905 2.641 5.905 5.905 5.905 5.905-2.641 5.905-5.905zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439zm4.154 1.454c-.086-.623-.312-1.206-.653-1.746-.342-.54-.789-.988-1.329-1.329-.54-.342-1.123-.567-1.746-.653-.678-.093-1.33-.134-1.98-.134-.65 0-1.302.041-1.98.134-.623.086-1.206.312-1.746.653-.54.342-.988.789-1.329 1.329-.342.54-.567 1.123-.653 1.746-.093.678-.134 1.33-.134 1.98 0 .65.041 1.302.134 1.98.086.623.312 1.206.653 1.746.342.54.789.988 1.329 1.329.54.342 1.123.567 1.746.653.678.093 1.33.134 1.98.134.65 0 1.302-.041 1.98-.134.623-.086 1.206-.312 1.746-.653.54-.342.988-.789 1.329-1.329.342-.54.567-1.123.653-1.746.093-.678.134-1.33.134-1.98 0-.65-.041-1.302-.134-1.98zM24 12c0 1.654-.012 3.295-.072 4.849-.061 1.17-.309 2.309-.927 3.233-.618.924-1.618 1.759-2.833 2.377-.924.618-2.063.866-3.233.927-1.554.06-3.195.072-4.849.072-1.654 0-3.295-.012-4.849-.072-1.17-.061-2.309-.309-3.233-.927-1.215-.618-2.215-1.453-2.833-2.377-.618-.924-.866-2.063-.927-3.233-.06-1.554-.072-3.195-.072-4.849 0-1.654.012-3.295.072-4.849.061-1.17.309-2.309.927-3.233.618-.924 1.618-1.759 2.833-2.377.924-.618 2.063-.866 3.233-.927 1.554-.06 3.195-.072 4.849-.072 1.654 0 3.295.012 4.849.072 1.17.061 2.309.309 3.233.927 1.215.618 2.215 1.453 2.833 2.377.618.924.866 2.063.927 3.233.06 1.554.072 3.195.072 4.849z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-2 text-coffee-200">
              <p>📧 lakeshorecoffeehouse@cogeco.ca</p>
              <p>📞 (905) 631-1622</p>
              <p>📍 2007 Lakeshore Rd, Burlington, ON L7R 1A1</p>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Hours</h4>
            <div className="space-y-1 text-coffee-200">
              <p>Sunday - Friday: 9:00 AM - 9:00 PM</p>
              <p>Saturday: 9:00 AM - 9:00 PM</p>
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