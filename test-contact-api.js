// Simple test for the contact API
const testData = {
  firstName: 'Test',
  lastName: 'User',
  email: 'test@example.com',
  serviceType: 'web-development',
  message: 'This is a test message for the consultation request.',
};

fetch('http://localhost:3000/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(testData),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
