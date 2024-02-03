import { ChangeEvent, SyntheticEvent } from 'react'

import { Button, Input, Table } from "../../components"
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import styles from "./styles.module.scss"
import { addSong } from './musicUploadFormSlice'

export const MusicUploadForm = () => {
    const dispatch = useAppDispatch()
    // const initialFormData = useAppSelector((state) => state.musicUploadForm.songName);

    const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files)
    }
    // const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    //     const file = e.target.files?.[0];

    //     if (file) {
    //         // Handle the file (e.g., upload it) separately
    //         // ...

    //         // Dispatch the action with file information
    //         dispatch(addSong({ ...initialFormData, fileName: file.name }));
    //     }
    // };

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const songData = {
            songName: String(data.get('songName')),
            artistName: String(data.get('artistName')),
            trackNumber: String(data.get('trackName')),
            file: String(data.get('file'))
        };
        dispatch(addSong(songData));
    }
    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit}
        >
            <label className={styles.label}>
                Song Name
                <Input
                    required
                    name='songName'
                />
            </label>
            <label className={styles.label}>
                Artist Name
                <Input
                    required
                    name='artistName'
                />
            </label>
            <label className={styles.label}>
                Track Number
                <Input
                    type='number'
                    required
                    name='trackName'
                />
            </label>
            <label className={styles.label}>
                File Upload
                <Input type="file"
                    required
                    name='file'
                    // accept=".mp3,.wav"
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