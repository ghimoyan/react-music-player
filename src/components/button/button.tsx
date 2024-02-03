import { FC } from 'react';

import clsx from 'clsx';

import { ButtonSize, ButtonVariant } from './constants';
import styles from './styles.module.scss';
import { IButton } from './types';

export const Button: FC<IButton> = ({
    type,
    variant = ButtonVariant.Primary,
    children,
    className,
    size = ButtonSize.Small,
    ...props
}) => {
    return (
        <button
            {...props}
            type={type}
            className={clsx(
                styles.button,
                variant && styles[variant],
                size && styles[size],
                className
            )}
        >
            {children}
        </button>
    );
};