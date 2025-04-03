// Listen for the Enter key press globally
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      // Simulate the button click when "Enter" is pressed
      document.querySelector('.enterbutton').click();
    }
  });
  
  // Add an event listener to the Enter button
  document.querySelector('.enterbutton').addEventListener('click', () => {
    const username = document.getElementById('customusername').value;
    const password = document.getElementById('custompassword').value;
  
    // Define the correct password for validation
    const correctPassword = 'password123'; // Replace this with your own correct password
  
    if (username && password) {
      if (password === correctPassword) {
        console.log('Access granted!');
        alert('Welcome, ' + username + '!');
      } else {
        console.log('Access denied!');
        alert('Error: Incorrect password. Please try again.');
      }
    } else {
      alert('Please fill in both username and password!');
    }
  });