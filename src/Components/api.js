// api.js
import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_SIIE_URL;

export async function fetchBlogPosts() {
  try {
    const response = await axios.get(`https://news.networktigers.com/wp-json/wp/v2/posts?_embed&order=desc&per_page=100&status=publish`);
    //  const response = await axios.get(`${apiUrl}/wp-json/wp/v2/posts?_embed&order=desc&per_page=${limit}&status=publish
    return response.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}
export async function getFeaturedBlogPost(categoryId){
  try {
    const response = await axios.get(`https://news.networktigers.com/wp-json/wp/v2/posts?_embed&categories=${categoryId}&order=desc&per_page=1&status=publish`
    );
    //  const response = await axios.get(`${apiUrl}/wp-json/wp/v2/posts?_embed&order=desc&per_page=${limit}&status=publish
    return response.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}
export async function fetchCategories(categoryId) {
  try {
    const response = await axios.get(`${apiUrl}/wp-json/wp/v2/categories/${categoryId}`);
    return {
      id: response.data.id,
      name: response.data.name,
    };
  } catch (error) {
    console.error('Error fetching category:', error);
    return null;
  }
}
export async function fetchFeaturedCategory() {
  try {
    const response = await axios.get("https://news.networktigers.com/wp-json/wp/v2/categories");
    
    if (response.data && response.data.length > 0) {
      // Return the first category in the array
      return {
        id: response.data[0].id,
        name: response.data[0].name,
      };
    } else {
      return null; // No categories found
    }
  } catch (error) {
    console.error('Error fetching category:', error);
    return null;
  }
}
export async function fetchAuthor(authorId) {
  try {
    const response = await axios.get(`${apiUrl}/wp-json/wp/v2/users/${authorId}`);
    return {
      id: response.data.id,
      name: response.data.name,
    };
  } catch (error) {
    console.error('Error fetching author:', error);
    return null;
  }
}
