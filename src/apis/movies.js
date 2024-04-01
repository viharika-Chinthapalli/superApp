import axios from "axios";

export const getMoviesList = async (title) => {
    try {
        // console.log(process.env.REACT_APP_MOVIES_API_KEY);
        // const t = {title};
        // console.log(title);
        // const reqUrl = `http://www.omdbapi.com/?i=tt3896198&apikey="f7dc9a25"&s=${title}`;
        const reqUrl = `http://www.omdbapi.com/apikey=${process.env.REACT_APP_MOVIES_API_KEY}&s=${title}`;
        const response = await axios.get(reqUrl);
        return response.data.Search;
    } catch (error) {
        console.log(error);
        // add a toast message with custom error "Something went wrong! Please try after sometime"
    }
};
