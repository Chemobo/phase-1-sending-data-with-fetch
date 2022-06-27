// Add your code here
const submitData = function(userName, userEmail) {
    const userInfo = {
        name: userName,
        email: userEmail
    };
        return fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(userInfo)
        }).then((response) => {
            return response.json();
        }).then((jsonData) => {
            return document.body.innerHTML = jsonData.id
        }).catch((err) => {
            document.body.innerHTML = err.message;
        });
    
    } 
    submitData('Edilsberg', 'edilsberg@gmail.com');