import React from 'react';
import {footerContainer} from './Footer.style';

export const Footer: React.FC = () => {
    const actualDate = new Date();
    return (
        <div className={footerContainer}>
            {actualDate.getFullYear()} by{' '}
            <a href="https://github.com/LukaszNowakPL/" target="_blank" rel="noopener noreferrer">
                Łukasz Nowak
            </a>
        </div>
    );
};
