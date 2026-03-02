const fs = require('fs');
const path = require('path');

const videosPath = path.join(__dirname, '../data/videos.json');

const readVideosData = () => {
    try {
        const data = fs.readFileSync(videosPath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading videos data:', error);
        return [];
    }
};

exports.getAllVideos = (req, res) => {
    const data = readVideosData();
    res.json(data);
};

exports.getVideoById = (req, res) => {
    const data = readVideosData();
    const video = data.find(v => v.id === parseInt(req.params.id));
    
    if (!video) {
        return res.status(404).json({ error: 'Video not found' });
    }
    
    res.json(video);
};