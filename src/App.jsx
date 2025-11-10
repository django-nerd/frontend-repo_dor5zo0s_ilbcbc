// App.jsx
// Main application shell combining hero, feature cards, and simple sections for programs/events/news/contact
import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import InfoCards from './components/InfoCards';
import Footer from './components/Footer';
import { Calendar, Newspaper, Mail } from 'lucide-react';

const mockPrograms = [
  { name: 'Computer Science B.Sc.', dept: 'Engineering & Technology' },
  { name: 'Business Administration BBA', dept: 'Business & Management' },
  { name: 'Psychology B.A.', dept: 'Arts & Social Sciences' },
];

const mockEvents = [
  { title: 'Orientation Week', date: '2025-09-01', location: 'Main Auditorium' },
  { title: 'Research Symposium', date: '2025-10-12', location: 'Science Hall' },
];

const mockNews = [
  { title: 'Bluecrest launches AI Innovation Hub', date: '2025-08-20' },
  { title: 'New scholarships announced for STEM majors', date: '2025-08-05' },
];

const App = () => {
  // Simple contact form state and validation
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = React.useState({});
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email is required';
    if (form.message.trim().length < 10) e.message = 'Please enter at least 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    alert('Thanks for reaching out! We\'ll get back to you soon.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavBar />
      <main>
        <HeroSection />
        <InfoCards />

        {/* Programs */}
        <section id="programs" className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-gray-900">Featured Programs</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {mockPrograms.map((p) => (
                <div key={p.name} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-semibold text-gray-900">{p.name}</h3>
                  <p className="mt-2 text-sm text-gray-600">{p.dept}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Events */}
        <section id="events" className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <Calendar className="text-blue-600" size={20} />
              <h2 className="text-2xl font-semibold text-gray-900">Upcoming Events</h2>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {mockEvents.map((e) => (
                <div key={e.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-medium text-gray-500">{new Date(e.date).toLocaleDateString()}</p>
                  <h3 className="mt-1 text-base font-semibold text-gray-900">{e.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{e.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* News */}
        <section id="news" className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <Newspaper className="text-blue-600" size={20} />
              <h2 className="text-2xl font-semibold text-gray-900">Latest News</h2>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {mockNews.map((n) => (
                <article key={n.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-medium text-gray-500">{new Date(n.date).toLocaleDateString()}</p>
                  <h3 className="mt-1 text-base font-semibold text-gray-900">{n.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <Mail className="text-blue-600" size={20} />
              <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
            </div>
            <form onSubmit={submit} className="mt-6 grid gap-4 sm:max-w-xl">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your full name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="name@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows="4"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="How can we help you?"
                />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
