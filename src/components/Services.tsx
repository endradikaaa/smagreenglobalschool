import React from 'react';
import { BookOpen, GraduationCap, Mail, ExternalLink } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'SLIMS - Library System',
      description: 'Access our comprehensive digital library management system. Browse books, manage loans, and explore our extensive collection.',
      icon: BookOpen,
      url: 'http://192.168.0.106/slims/index.php?p=login',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      title: 'Moodle - Learning Platform',
      description: 'Your gateway to online learning. Access courses, assignments, grades, and interactive learning materials.',
      icon: GraduationCap,
      url: 'http://192.168.0.106/moodle/login/index.php',
      color: 'bg-emerald-500',
      hoverColor: 'hover:bg-emerald-600'
    },
    {
      title: 'Roundcube - Email',
      description: 'Secure email communication for students and faculty. Stay connected with your school community.',
      icon: Mail,
      url: 'http://192.168.0.106/roundcube',
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Digital Learning Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access all your educational resources and tools from one convenient location. 
            Our integrated platform makes learning seamless and efficient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <a
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center w-full px-6 py-3 ${service.color} ${service.hoverColor} text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg`}
              >
                Access Now
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Our IT support team is available to assist you with any technical issues or questions about accessing these services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Support
            </a>
            <a 
              href="#" 
              className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-600 transition-colors"
            >
              User Guide
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;