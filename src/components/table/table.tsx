import { FC } from "react"
import { ITable } from "./type"
import clsx from 'clsx';


export const Table: FC<ITable> = ({
    children,
    ...props
}) => {
    return (
        <table
            {...props}
        >
            <thead>
                <tr>
                    <th></th>
                    <th>Song Name</th>
                    <th>Artist Name</th>
                    <th>Track</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}