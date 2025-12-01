export default function Footer() {
  return (
    <footer className="bg-[#0A3D91] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-serif text-xl font-semibold">Interior Design Secrets</p>
            <p className="text-[#D7E8FF] text-sm">© 2025 All rights reserved</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#D7E8FF]">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact Us
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
