import { useAppSelector } from '../../app/hooks';
import styles from "./styles.module.scss"
import { Song } from '../musicUploadForm/musicUploadFormSlice';
import { Button, Input } from '../../components';
import { ButtonVariant } from '../../components/button/constants';


export const SongList = () => {
    const songs: Song[] = useAppSelector((state) => state.music.data);

    return (
        <div>
            <div className={styles.upSongList}>
                <Button onClick={() => (console.log("Play All"))} variant={ButtonVariant.Secondary}>Play All</Button>
                <Button onClick={() => (console.log("Add All"))} variant={ButtonVariant.Secondary}>Add All</Button>
                <Button onClick={() => (console.log("Track Number"))} variant={ButtonVariant.Secondary}>Track Number</Button>
                <Input className={styles.FilterInput} placeholder='Filter' />
            </div>
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
                    {songs?.map((song: Song, index: number) => {
                        return (
                            <tr key={`${index}-${song.songName}`}>
                                <td>{song.file}</td>
                                <td>{song.songName}</td>
                                <td>{song.artistName}</td>
                                <td>{song.trackNumber}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </div>
    );
};