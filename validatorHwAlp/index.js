const axios = require('axios');

function isValidEmailFormat(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

async function isEmailTaken(email) {
    try {
        const response = await axios.get(`https://emailvalidation.abstractapi.com/v1/?`);
        return response.data.taken;
    } catch (error) {
        console.error('Error checking email:', error);
        return false;
    }
}

module.exports = { isValidEmailFormat, isEmailTaken };
