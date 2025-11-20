# Social Media Project with AI Captioning

Ye project ek **Social Media Platform** hai jo AI ka use karke images ke liye captions generate karta hai.  
Features include:

- User registration, login, logout with **JWT authentication**  
- Protected `/user` route  
- Image upload using **ImageKit**  
- AI-generated captions via **Gemini AI**  
- Multer memory storage for file uploads  
- UUID-based file naming  

---

## Requirements

1. **Node.js** >= 18  
2. **MongoDB Atlas** or local MongoDB  
3. `.env` file with the following keys:

```env
PORT=5000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
