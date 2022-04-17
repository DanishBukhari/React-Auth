let apiUrl

// check if development 
if (window.location.hostname === 'localhost') {
  apiUrl = 'http://localhost:5000' 
} else {
  apiUrl = 'https://example.herokuapp.com'
}

// export api url
export default apiUrl