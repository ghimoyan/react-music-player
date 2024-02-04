import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'
import { arch } from "os";

export interface Song {

    songName: string;
    artistName: string;
    trackNumber: string;
    file: string;

}
export interface SongData {
    data: Song[]
}
const initialState = {
    data: []
} as SongData

export const MusicUploadFormSlice = createSlice({
    name: 'music',
    initialState,
    reducers: {
        addSong: (state: SongData, action: PayloadAction<Song>) => {
            state.data = [action.payload, ...state.data]
        },
    }
})

export const { addSong } = MusicUploadFormSlice.actions;
export const MusicUploadFormReducer = MusicUploadFormSlice.reducer