// src/components/HomePage.jsx
import React from 'react';

const HomePage = () => {
  return (
    <main className="p-4">
      <section className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Welcome to suno, Aisha!</h2>
        <p className="text-gray-600">Your personalized menstrual health companion.</p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold text-gray-800">Cycle Tracker</h3>
          <p className="text-gray-600">Track your menstrual cycle with ease.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold text-gray-800">Set Reminders</h3>
          <p className="text-gray-600">Get reminders for water intake, heat therapy, and more.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold text-gray-800">Educational Resources</h3>
          <p className="text-gray-600">Access videos, articles, and interactive content.</p>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
