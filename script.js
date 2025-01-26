const form = document.getElementById('diaryForm');
const outputDiv = document.getElementById('output');
const encryptedDataElement = document.getElementById('encryptedData');
const decryptForm = document.getElementById('decryptForm');
const decryptedOutputDiv = document.getElementById('decryptedOutput');
const decryptedDataElement = document.getElementById('decryptedData');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();
    const password = document.getElementById('password').value;
    const currentDate = new Date().toISOString().split('T')[0];

    if (!title || !content || !password) {
        alert('Please fill out all fields.');
        return;
    }

    const entry = { title, content, date: currentDate };
    const entryString = JSON.stringify(entry);

    const encrypted = CryptoJS.AES.encrypt(entryString, password).toString();

    encryptedDataElement.textContent = encrypted;
    outputDiv.classList.remove('hidden');
    form.reset();
});

decryptForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const encryptedData = encryptedDataElement.textContent;
    const password = document.getElementById('decryptPassword').value;
    const inputDate = document.getElementById('decryptDate').value;

    if (!encryptedData || !password || !inputDate) {
        alert('Encrypted data, password, or date is missing.');
        return;
    }

    try {
        const bytes = CryptoJS.AES.decrypt(encryptedData, password);
        const decrypted = bytes.toString(CryptoJS.enc.Utf8);

        if (!decrypted) {
            throw new Error('Decryption failed.');
        }

        const entry = JSON.parse(decrypted);

        if (entry.date !== inputDate) {
            alert('Invalid date. Decryption failed.');
            return;
        }

        decryptedDataElement.textContent = `Title: ${entry.title}\nContent: ${entry.content}`;
        decryptedOutputDiv.classList.remove('hidden');
    } catch (error) {
        alert('Invalid password, date, or corrupted data.');
    }
});
