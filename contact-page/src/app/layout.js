import './globals.css';

export const metadata = {
  title: 'Contact Page',
  description: 'Contact us form with file upload',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
