# Development Lab Website

## Introduction  
The **Development Lab Website** is the official platform for the development club of [Your College Name]. It serves as a comprehensive portal for club-related activities, including blogs, projects, events, and team details. The website is designed to be interactive, user-friendly, and easily maintainable.  

---  

## Features  
- **Dynamic Pages**:  
  - **Blogs**: Share updates, tutorials, and news.  
  - **Projects**: Showcase ongoing and completed projects.  
  - **Team**: Display the current members and alumni of the club.  
  - **Timeline**: Highlight past and upcoming events.  
  - **Gallery**: A curated collection of photos from events.  
- **Responsive Design**: Ensures seamless experience across devices.  
- **Admin Functionality**: Manage content, blogs, and media efficiently.  
- **API-Driven Backend**: Enables dynamic content updates.  

---  

## Tech Stack  

### Frontend  
- **Framework**: [Next.js](https://nextjs.org/) (TypeScript)  
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), CSS Modules  

### Backend  
- **Framework**: [Django](https://www.djangoproject.com/)  
- **Database**: SQLite  
- **API Development**: Django REST Framework  

---  

## Installation and Setup  

### Prerequisites  
- **Frontend**: Node.js (v16 or higher)  
- **Backend**: Python (v3.8 or higher)  

### Frontend Setup  
1. Navigate to the `frontend` directory:  
   ```bash
   cd frontend
   ```  
2. Install dependencies:  
   ```bash
   npm install
   ```  
3. Run the development server:  
   ```bash
   npm run dev
   ```

### Backend Setup  
1. Navigate to the `server` directory:  
   ```bash
   cd server
   ```  
2. Create and configure the `.env` file based on `.env.example` to set environment variables (e.g., secret keys).  
3. Install dependencies:  
   ```bash
   pip install -r requirements.txt
   ```  
4. Apply migrations to initialize the database:  
   ```bash
   python manage.py migrate
   ```  
5. Start the development server:  
   ```bash
   python manage.py runserver
   ```  

---  

## Project Structure  

### Frontend  
```plaintext
frontend/
├── app/                 # Dynamic and static pages
├── components/          # Reusable UI components
├── public/              # Static assets (images, icons, etc.)
├── styles/              # Tailwind and CSS modules
└── next.config.mjs      # Next.js configuration
```  

### Backend  
```plaintext
server/
├── api/                 # Django app containing models, views, serializers
├── server/              # Core Django settings and URLs
├── db.sqlite3           # Database file
└── manage.py            # Django management script
```  

---