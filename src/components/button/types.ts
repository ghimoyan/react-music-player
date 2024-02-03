import { ButtonHTMLAttributes } from 'react';

import { ButtonSize, ButtonVariant } from './constants';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    className?: string;
    size?: ButtonSize;
}