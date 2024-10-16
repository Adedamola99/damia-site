import ClientRootLayout from '@/components/ClientRootLayout'; 
import './globals.css';

export const metadata = {
  title: 'Portfolio',
  description: 'My personal portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientRootLayout>{children}</ClientRootLayout>
      </body>
    </html>
  );
}
