import axios from 'axios';

const chatGPTAPI = async (apiKey, prompt) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
  };

  const url = 'https://api.openai.com/v1/completions';
  const data = {
    model: 'text-davinci-002',
    prompt,
    temperature: 0.7,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  };

  try {
    const response = await axios.post(url, data, config);
    return response.data.choices[0].text;
  } catch (error) {
    console.error('Error fetching data from ChatGPT API:', error);
    return null;
  }
};

export default chatGPTAPI;