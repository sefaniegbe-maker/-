/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import './i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCenter from './components/ProductCenter';
import CaseCenter from './components/CaseCenter';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

export default function App() {
  // Smooth scrolling for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href')!);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-[#00E5FF]/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProductCenter />
        <CaseCenter />
        <AboutUs />
        <ContactUs />
      </main>
    </div>
  );
}
