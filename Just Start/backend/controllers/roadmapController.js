const fs = require('fs');
const path = require('path');

const roadmapsPath = path.join(__dirname, '../data/roadmaps.json');

const readRoadmapsData = () => {
    try {
        const data = fs.readFileSync(roadmapsPath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading roadmaps data:', error);
        return [];
    }
};

exports.getAllRoadmaps = (req, res) => {
    const data = readRoadmapsData();
    res.json(data);
};

exports.getRoadmapById = (req, res) => {
    const data = readRoadmapsData();
    const roadmap = data.find(r => r.id === req.params.id);
    
    if (!roadmap) {
        return res.status(404).json({ error: 'Roadmap not found' });
    }
    
    res.json(roadmap);
};