import axios from 'axios';

export default {
    getRandomImages() {
        return axios.get('/images');
    },
    getBandById(id) {
        return axios.get(`/band/${id}`);
    },
    getAllBands() {
        return axios.get('/bands')
    },
    getBandsByName(name) {
        return axios.get(`/bands?bandName=${name}`);
    },
    getBandsByGenre(genre) {
        return axios.get(`/bands?genre=${genre}`);
    },
    getAllGenres() {
        return axios.get('/genres')
    },
    createBand(band) {
        return axios.post('/bands', band)
    },
    getHomepageGalleryImages(id) {
        return axios.get(`/homegallery/${id}`);
    },
    getTopGenre(id) {
        return axios.get(`/topGenre/${id}`)
    },
    getNoBandsFollowed(id) {
        return axios.get(`bandsfollowed/${id}`)
    }
}
