import React from 'react'

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#1c1c1c] text-white text-center py-4">
            <p>&copy; {currentYear} Abdullah Al Alif. All rights reserved.</p>
        </footer>
    );
}

export default Footer;