function scheduleVisit(data){
    fetch('http://localhost:5000/schedule/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response => response.json())
      .then(data => console.log('Response from server:', data))
      .catch(error => console.error('Error posting data:', error));
}

export { scheduleVisit };