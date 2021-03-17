import axios from 'axios';

const KEY = 'AIzaSyB_omo8fxciuGj7Jzpt_78ZIHnR-48vEn4';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getSnippetData: () => axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3/',
        params:{
            part: 'snippet',
            maxResults: 20,
            key: KEY
        }
    }),

    getVideoCommentsDetail: () => axios.create({

        baseURL: 'https://www.googleapis.com/youtube/v3/',
        params:{
            part: 'snippet',
            key:KEY
        }
    }),
}
