const fs = require('fs');
const path = require('path');

const mythsPath = path.join(__dirname, '../data/myths.json');

const readMythsData = () => {
    try {
        const data = fs.readFileSync(mythsPath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading myths data:', error);
        return [];
    }
};

exports.getAllMyths = (req, res) => {
    const data = readMythsData();
    res.json(data);
};

exports.getMythById = (req, res) => {
    const data = readMythsData();
    const myth = data.find(m => m.id === parseInt(req.params.id));
    
    if (!myth) {
        return res.status(404).json({ error: 'Myth not found' });
    }
    
    res.json(myth);
};