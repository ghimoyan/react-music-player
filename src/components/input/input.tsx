import { FC } from 'react';

import clsx from 'clsx';

import styles from './styles.module.scss';
import { IInput } from './types';

export const Input: FC<IInput> = ({
    className,
    ...props
}) => {
    return (
        <input
            {...props}
            className={clsx(
                styles.input,
                className
            )}
        />
    );
};