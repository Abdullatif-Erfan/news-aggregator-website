import axios from "axios";
import { axiosResponseTypes } from "../types/Types";
import { NewsAPIURL, APIKEY } from "../utils/baseURLs";

/**
 * ================================== SLIDER SECTION ========================
 * Description:     Get Slider Data
 * HTTP Method:     GET
 * @Param:          {category: "science"} -> default category for unregistered users
 * @Returns:        {object}: returns a list of articles that have images.
 */
export const fetchSlidersData = async () => {
  const completeURL = `${NewsAPIURL}top-headlines/`;
  const defaultSliderCategory = "science";
  const response = await axios
    .get<axiosResponseTypes, any>(completeURL, {
      params: {
        apiKey: APIKEY,
        category: defaultSliderCategory,
        pageSize: 100, // among 90 articles just 10 articles have image
      },
    })
    .then((response) => {
      // Filter articles where urlToImage is not null
      const filteredArticles = response.data.articles.filter(
        (article) => article.urlToImage !== null
      );
      return filteredArticles;
    });
  return response;
};

/**
 * ================================== AUTHOR SECTION ========================
 * Description:     Get Author Data
 * HTTP Method:     GET
 * @Param:          { author: "Ashlyn Messier", sources:"bbc-news,cnn,fox-news"}
 * @Returns:        {object}: returns a list of articles
 */
export const fetchByAuthor = async () => {
  const fullURL = `${NewsAPIURL}everything/`;
  const defaultAuthor = "Ashlyn Messier";
  const defaultSources = "bbc-news,cnn,fox-news";
  const response = await axios
    .get<axiosResponseTypes, any>(fullURL, {
      params: {
        apiKey: APIKEY,
        sources: defaultSources,
        q: defaultAuthor,
        pageSize: 20, // Get 20 articles by Ashlyn Messier.
      },
    })
    .then((response) => response.data.articles);
  return response;
};

/**
 * ================================== TOP-HEADLINE SECTION ========================
 * Description:     Get Top-headline articles
 * HTTP Method:     GET
 * @Param:          {sources: "bbc-news"} ->  default source for unregistered users
 * @Returns:        {object}: returns a list of articles
 */
export const fetchTopHeadlineData = async (
  pageNumber: number,
  recordsPerPage: number,
  filterBaseOn: string,
  selectedOptions: string
) => {
  const fullURL = `${NewsAPIURL}top-headlines?apiKey=${APIKEY}&${filterBaseOn}=${selectedOptions}&pageSize=${recordsPerPage}&page=${pageNumber}`;

  const response = await axios.get<axiosResponseTypes, any>(fullURL);
  return response.data;
};

/**
 * ================================== Search by Keyword ========================
 * Description:     Get Articles by searched keywords
 * HTTP Method:     GET
 * @Param:          {sources: "bbc-news,cnn,fox-news", q: kewords}
 * @Returns:        {object}: returns a list of articles
 */
export const SearchByKeywords = async (
  searchTerm: string,
  pageNumber: number,
  recordsPerPage: number
) => {
  const fullURL = `${NewsAPIURL}everything/`;
  const searchedSources = "bbc-news,cnn,fox-news";

  const response = await axios
    .get<axiosResponseTypes, any>(fullURL, {
      params: {
        apiKey: APIKEY,
        sources: searchedSources,
        q: searchTerm,
        pageSize: recordsPerPage,
        page: pageNumber,
      },
    })
    .then((response) => response.data);
  return response;
};
