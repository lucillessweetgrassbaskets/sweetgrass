import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

// Reusable Contact Detail Component
const ContactDetail = ({ icon: Icon, title, content }: { icon: any; title: string; content: string }) => (
  <div className="flex items-start space-x-4">
    <Icon className="h-6 w-6 text-primary flex-shrink-0" />
    <div>
      <h3 className="font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{content}</p>
    </div>
  </div>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setStatus('idle');

    const formName = 'contact';
    const encoded = new URLSearchParams({
      'form-name': formName,
      ...formData,
    });

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encoded.toString(),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setError('Submission failed. Please try again later.');
      }
    } catch (err) {
      setStatus('error');
      setError('An unexpected error occurred.');
    }
  };

  return (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Contact Us</h1>



      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Contact Information */}

        <div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>

          <p className="text-gray-600 mb-8">

            Have questions about our products or interested in placing a custom order?

            We'd love to hear from you.

          </p>



          <div className="space-y-6">

            <div className="flex items-start space-x-4">

              <MapPin className="h-6 w-6 text-amber-600 flex-shrink-0" />

              <div>

                <h3 className="font-medium text-gray-900">Visit Us</h3>

                <p className="mt-2 text-gray-600">

                  123 Market Street<br />

                  Charleston, SC 29401

                </p>

              </div>

            </div>



            <div className="flex items-start space-x-4">

              <Phone className="h-6 w-6 text-amber-600 flex-shrink-0" />

              <div>

                <h3 className="font-medium text-gray-900">Call Us</h3>

                <p className="mt-2 text-gray-600">(843) 555-0123</p>

              </div>

            </div>



            <div className="flex items-start space-x-4">

              <Mail className="h-6 w-6 text-amber-600 flex-shrink-0" />

              <div>

                <h3 className="font-medium text-gray-900">Email Us</h3>

                <p className="mt-2 text-gray-600">info@lucillesbaskets.com</p>

              </div>

            </div>

          </div>

        </div>

        
        {/* Contact Form */}
        <div>
          <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />

            <p>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </label>
            </p>
            <p>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </label>
            </p>
            <p>
              <label>
                Subject
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </label>
            </p>
            <p>
              <label>
                Message
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </label>
            </p>
            <p>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                Send
              </button>
            </p>
          </form>

          {/* Status Messages */}
          {status === 'success' && (
            <p className="text-green-600 mt-4">Thank you! Your message has been sent.</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 mt-4">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
}
