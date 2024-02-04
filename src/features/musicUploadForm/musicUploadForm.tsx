import { ChangeEvent, SyntheticEvent, useState } from 'react'

import { Button, Input, Table } from "../../components"
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import styles from "./styles.module.scss"
import { addSong } from './musicUploadFormSlice'

export const MusicUploadForm = () => {
    const dispatch = useAppDispatch()

    const [fileName, setFileName] = useState<string | null>(null);

    const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
        }
    };

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const songData = {
            songName: String(data.get('songName')),
            artistName: String(data.get('artistName')),
            trackNumber: String(data.get('trackName')),
            file: fileName || '',
        };
        dispatch(addSong(songData));
    }

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit}
        >
            <label>
                Song Name
                <Input
                    required
                    name='songName'
                />
            </label>
            <label>
                Artist Name
                <Input
                    required
                    name='artistName'
                />
            </label>
            <label>
                Track Number
                <Input
                    type='number'
                    required
                    name='trackName'
                />
            </label>
            <label>
                File Upload
                <Input
                    type="file"
                    required
                    name='file'
                    onChange={handleFileUpload}
                    multiple={false}
                />
            </label>
            <Button type='submit'>
                Submit
            </Button>
        </form>
    )
}