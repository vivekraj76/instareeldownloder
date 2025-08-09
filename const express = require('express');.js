const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Reels Downloader Endpoint
app.post('/api/download', async (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ success: false, message: 'URL is required' });
  }

  try {
    const response = await axios({
      method: 'GET',
      url: 'https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index',
      params: { url },
      headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        'x-rapidapi-host': 'instagram-downloader-download-instagram-videos-stories.p.rapidapi.com',
      },
    });

    const data = response.data;
    if (data.media) {
      res.json({
        success: true,
        videoUrl: data.media,
        filename: 'reel.mp4',
      });
    } else {
      res.status(400).json({ success: false, message: 'Unable to fetch video' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Video Downloader Endpoint
app.post('/api/download/video', async (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ success: false, message: 'Video URL is required' });
  }

  try {
    const response = await axios({
      method: 'GET',
      url: 'https://youtube-video-downloader6.p.rapidapi.com/youtube',
      params: { url },
      headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        'x-rapidapi-host': 'youtube-video-downloader6.p.rapidapi.com',
      },
    });

    const data = response.data;
    if (data.download_url) {
      res.json({
        success: true,
        videoUrl: data.download_url,
        filename: 'video.mp4',
      });
    } else {
      res.status(400).json({ success: false, message: 'Unable to fetch video' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Story Downloader Endpoint
app.post('/api/download/story', async (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ success: false, message: 'Story URL is required' });
  }

  try {
    const response = await axios({
      method: 'GET',
      url: 'https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index',
      params: { url },
      headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        'x-rapidapi-host': 'instagram-downloader-download-instagram-videos-stories.p.rapidapi.com',
      },
    });

    const data = response.data;
    if (data.media) {
      res.json({
        success: true,
        videoUrl: data.media,
        filename: 'story.mp4',
      });
    } else {
      res.status(400).json({ success: false, message: 'Unable to fetch story' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Photo Downloader Endpoint
app.post('/api/download/photo', async (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ success: false, message: 'Photo URL is required' });
  }

  try {
    const response = await axios({
      method: 'GET',
      url: 'https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index',
      params: { url },
      headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        'x-rapidapi-host': 'instagram-downloader-download-instagram-videos-stories.p.rapidapi.com',
      },
    });

    const data = response.data;
    if (data.media) {
      res.json({
        success: true,
        videoUrl: data.media,
        filename: 'photo.jpg',
      });
    } else {
      res.status(400).json({ success: false, message: 'Unable to fetch photo' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});