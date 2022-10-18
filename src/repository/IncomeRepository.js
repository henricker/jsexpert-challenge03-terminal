import http from 'http';

const API_BASE_URL = 'http://localhost:3000';

class IncomeRepository {
  async makeRequest(url) {
    return new Promise((resolve, reject) => {
      http.get(url, (response) => {
        const chunks = [];
        response.on('data', (chunk) => {
          chunks.push(chunk);
        })

        response.on('end', () => {
          const body = Buffer.concat(chunks);
          resolve(JSON.parse(body.toString()));
        })

        response.on('error', reject)
      })
    })
  }

  async getConversions() {
    const response = await this.makeRequest(`${API_BASE_URL}/convert`);
    return response.results;
  }
}

export default IncomeRepository;
