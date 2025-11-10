// App.jsx
// Modern university landing page with blue/white/gold theme, carousels and cards
import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Carousel from './components/Carousel';
import ProgramCard from './components/ProgramCard';
import Footer from './components/Footer';
import { Calendar, Newspaper, Mail } from 'lucide-react';

const programs = [
  { title: 'Computer Science B.Sc.', dept: 'School of Engineering & Computing', level: 'Undergraduate' },
  { title: 'Business Administration BBA', dept: 'School of Business & Management', level: 'Undergraduate' },
  { title: 'Data Science M.Sc.', dept: 'Graduate Studies', level: 'Graduate' },
  { title: 'Psychology B.A.', dept: 'Arts & Social Sciences', level: 'Undergraduate' },
  { title: 'Electrical Engineering B.Eng.', dept: 'School of Engineering', level: 'Undergraduate' },
];

const eventSlides = [
  {
    title: 'Orientation Week',
    date: '2025-09-01',
    location: 'Main Auditorium',
    desc: 'Kickstart your journey with campus tours, student clubs, and faculty meetups.',
  },
  {
    title: 'Research Symposium',
    date: '2025-10-12',
    location: 'Science Hall',
    desc: 'Showcasing breakthrough research from our labs and collaborative centers.',
  },
  {
    title: 'Homecoming Weekend',
    date: '2025-11-05',
    location: 'Central Quad',
    desc: 'Celebrate with alumni talks, sports, and cultural performances.',
  },
];

const news = [
  { title: 'Bluecrest launches AI Innovation Hub', date: '2025-08-20' },
  { title: 'New scholarships announced for STEM majors', date: '2025-08-05' },
  { title: 'Debate team wins regional championship', date: '2025-07-28' },
];

const App = () => {
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
    alert("Thanks for reaching out! We'll get back to you soon.");
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavBar />
      <main>
        <HeroSection />

        {/* Programs grid + mini carousel */}
        <section id="programs" className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Explore Programs</h2>
                <p className="mt-1 text-sm text-gray-600">A breadth of disciplines across undergraduate and graduate levels.</p>
              </div>
              <span className="rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800">Blue • White • Gold</span>
            </div>

            {/* Grid */}
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {programs.slice(0, 3).map((p) => (
                <ProgramCard key={p.title} title={p.title} dept={p.dept} level={p.level} />
              ))}
            </div>

            {/* Carousel */}
            <div className="mt-8">
              <Carousel
                items={programs}
                renderItem={(p) => (
                  <div className="mx-auto max-w-3xl">
                    <ProgramCard title={p.title} dept={p.dept} level={p.level} />
                  </div>
                )}
              />
            </div>
          </div>
        </section>

        {/* Events carousel */}
        <section id="events" className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <Calendar className="text-blue-600" size={20} />
              <h2 className="text-2xl font-semibold text-gray-900">Upcoming Events</h2>
            </div>
            <div className="mt-6">
              <Carousel
                items={eventSlides}
                renderItem={(e) => (
                  <div className="mx-auto max-w-4xl">
                    <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
                      <p className="text-sm font-medium text-amber-700">{new Date(e.date).toLocaleDateString()} • {e.location}</p>
                      <h3 className="mt-1 text-lg font-semibold text-gray-900">{e.title}</h3>
                      <p className="mt-2 text-sm text-gray-600">{e.desc}</p>
                    </div>
                  </div>
                )}
              />
            </div>
          </div>
        </section>

        {/* News cards */}
        <section id="news" className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <Newspaper className="text-blue-600" size={20} />
              <h2 className="text-2xl font-semibold text-gray-900">Latest News</h2>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {news.map((n) => (
                <article key={n.title} className="group rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition hover:shadow-md">
                  <p className="text-xs font-medium text-amber-700">{new Date(n.date).toLocaleDateString()}</p>
                  <h3 className="mt-1 text-base font-semibold text-gray-900">{n.title}</h3>
                  <a href="#news" className="mt-3 inline-block text-sm font-semibold text-blue-700 hover:text-blue-800">Read more →</a>
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
                  className="mt-1 w-full rounded-md border border-blue-200 px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="mt-1 w-full rounded-md border border-blue-200 px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="mt-1 w-full rounded-md border border-blue-200 px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
