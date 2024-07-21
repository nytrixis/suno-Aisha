import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
// import ProfilePage from './components/ProfilePage';
// import TrackerPage from './components/TrackerPage';
// import RemindersPage from './components/RemindersPage';
// import ResourcesPage from './components/ResourcesPage';
// import SOSPage from './components/SOSPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route exact path="/" component={HomePage} />
            {/* <Route path="/profile" component={ProfilePage} /> */}
            {/* <Route path="/tracker" component={TrackerPage} /> */}
            {/* <Route path="/reminders" component={RemindersPage} /> */}
            {/* <Route path="/resources" component={ResourcesPage} /> */}
            {/* <Route path="/sos" component={SOSPage} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
