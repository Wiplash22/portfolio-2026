import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Antony Jimson Poruthukkaran. All rights reserved.</p>
                <div style={styles.socials}>
                    {/* Add social icons here later */}
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: 'var(--text-primary)',
        color: 'var(--surface-color)',
        padding: '2rem 0',
        textAlign: 'center',
        marginTop: '4rem',
    },
    socials: {
        marginTop: '1rem',
    },
};

export default Footer;
