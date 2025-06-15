import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/contexts/useAuthContext';
import { NotificationProvider } from '@/contexts/useNotificationContext';

export const metadata = {
    title: 'Administrador de Material Técnico',
}

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-inter' });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
return (
    <html lang="es">
        <body className={`${inter.variable} min-h-dvh flex flex-col`}>
            <AuthProvider>
                <NotificationProvider>
                    {children}
                </NotificationProvider>
            </AuthProvider>
        </body>
    </html>
);
}
