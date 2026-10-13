import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: { default: 'NexaStore — Good things, thoughtfully found', template: '%s | NexaStore' },
  description: 'Considered objects for better work, slower mornings, and the in-between.',
  applicationName: 'NexaStore',
  openGraph: { title: 'NexaStore', description: 'Good things, thoughtfully found.', type: 'website' }
};

export default function RootLayout({ children }) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><Navbar /><main id="main-content">{children}</main><Footer /></body></html>;
}
