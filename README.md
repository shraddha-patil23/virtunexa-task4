# Secure Digital Diary with Encryption
___

A simple yet secure digital diary application where users can write, encrypt, and decrypt their diary entries. The entries are encrypted using AES encryption with a password, ensuring that only authorized users can access their sensitive information.

## Features

- **Add Diary Entries**: Users can create entries with a title, content, and an encryption password.
- **Password Protection**: Each diary entry is encrypted using the AES algorithm with a password.
- **Decrypt Entries**: Users can decrypt their entries using the correct password and date.
- **Responsive Design**: Fully responsive design built with Tailwind CSS.

## Technologies Used

- **Frontend**: HTML, CSS, TailwindCSS, JavaScript
- **Encryption**: CryptoJS (AES encryption for data security)

## Usage

### Adding a New Entry
Title: Provide a title for your diary entry.
Content: Write the content of your diary entry.
Encryption Password: Choose a password to encrypt the entry.
Save Entry: After filling in the fields, click the "Save Entry" button to encrypt and save the diary entry.

### Decrypting an Entry
Decryption Date: Enter the date of the entry you wish to decrypt (in YYYY-MM-DD format).
Decryption Password: Enter the password used to encrypt the entry.
Decrypt: Click the "Decrypt Entry" button to view the original title and content.
