'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: '🎨',
      title: 'Brand Identity',
      description: 'Create memorable brand experiences that resonate with your audience and stand out in the market.'
    },
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Build responsive, fast, and user-friendly websites that convert visitors into customers.'
    },
    {
      icon: '📱',
      title: 'Digital Marketing',
      description: 'Grow your online presence with strategic marketing campaigns that deliver results.'
    },
    {
      icon: '🚀',
      title: 'Creative Consulting',
      description: 'Get expert guidance on your creative projects and business growth strategies.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md fixed w-full top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-900">
              🌊 Coastline Creative
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Contact
              </Link>
            </div>
            <button className="md:hidden">
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Creative Solutions
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                That Make Waves
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We craft exceptional digital experiences that help your brand stand out 
              in today's competitive landscape. From concept to launch, we're your 
              creative partner every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Start Your Project
              </Link>
              <Link 
                href="#services" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive creative services to help your business thrive in the digital world.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Why Choose Coastline Creative?
              </h2>
              <p className="text-xl mb-6 text-blue-100">
                We're not just another creative agency. We're your strategic partner 
                in building a brand that makes a lasting impact.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold text-sm mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold">Results-Driven Approach</h4>
                    <p className="text-blue-100">Every project is designed to achieve your specific business goals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold text-sm mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold">Collaborative Process</h4>
                    <p className="text-blue-100">We work closely with you to ensure your vision comes to life.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white text-blue-600 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-sm mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold">Cutting-Edge Technology</h4>
                    <p className="text-blue-100">We use the latest tools and technologies to deliver exceptional results.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">Ready to Get Started?</h3>
              <p className="text-blue-100 mb-6">
                Let's discuss how we can help bring your creative vision to life. 
                Get in touch today for a free consultation.
              </p>
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">🌊 Coastline Creative</h3>
              <p className="text-gray-400">
                Creating digital experiences that make waves in your industry.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Brand Identity</li>
                <li>Web Development</li>
                <li>Digital Marketing</li>
                <li>Creative Consulting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Get In Touch</h4>
              <p className="text-gray-400 mb-2">hello@coastlinecreative.com</p>
              <p className="text-gray-400 mb-4">(555) 123-4567</p>
              <Link 
                href="/contact" 
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Contact Us →
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Coastline Creative. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
