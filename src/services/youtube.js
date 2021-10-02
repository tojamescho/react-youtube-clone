class Youtube {
  constructor(httpClient) {
    this.client = httpClient;
  }

  async mostPopular() {
    const response = await this.client.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 30,
      },
    });
    return response.data.items.map((item) => {
      return {
        id: item.id,
        title: item.snippet.title,
        channelTitle: item.snippet.channelTitle,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.medium.url,
      };
    });
  }

  async search(query) {
    const response = await this.client.get('search', {
      params: {
        part: 'snippet',
        maxResults: 30,
        type: 'video',
        q: query,
      },
    });
    return response.data.items.map((item) => {
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        channelTitle: item.snippet.channelTitle,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.medium.url,
      };
    });
  }
}

export default Youtube;
