import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-yellow-500 mb-2 tracking-wider">GET IN TOUCH</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out. 
            I'm always open to discussing new opportunities and ideas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-slate-900" size={20} />
                </div>
                <h4 className="text-white mb-2">Phone</h4>
                <p className="text-gray-400">+91 7976504161</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-slate-900" size={20} />
                </div>
                <h4 className="text-white mb-2">Email</h4>
                <p className="text-gray-400">work.hemang@gmail.com</p>
              </CardContent>
            </Card>

            
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-slate-900 border-slate-700 text-white placeholder:text-gray-500"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-slate-900 border-slate-700 text-white placeholder:text-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-slate-900 border-slate-700 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-slate-900 border-slate-700 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900">
                    <Send className="mr-2" size={18} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
