import React, { useEffect } from 'react';
import { useAppSelector } from '../../app/hooks';
import styles from "./styles.module.scss"
import { MusicUploadForm } from '../musicUploadForm';
import { Song } from '../musicUploadForm/musicUploadFormSlice';


export const SongList = () => {
    const songs: Song[] = useAppSelector((state) => state.music.data);
    console.log(songs, 'songs')

    return (
        <div>
            <h2>Song List</h2>
            <table className={styles.songTable}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sing Name</th>
                        <th>Artist Name</th>
                        <th>Track</th>
                    </tr>
                </thead>
                <tbody>
                    {songs?.map((song: Song, index: number) => (
                        <tr key={`${index}-${song.songName}`}>
                            <td>{song.file}</td>
                            <td>{song.songName}</td>
                            <td>{song.artistName} </td>
                            <td>{song.trackNumber}</td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    );
};

