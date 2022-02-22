const express = require('express');
const router = express.Router();
const Log = require('../models/log');


// Create one log
router.post('/', async (req, res) => {

    const log = new Log({
        id: req.body.id,
        date: req.body.date,
        level: req.body.level,
        message: req.body.message,
        // category: req.body.category,
        // user: req.body.user,
        // data: req.body.data,
    });

    try {
        const newLog = await log.save();
        res.status(201).json(newLog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// Get all logs
router.get('/', async (req, res) => {
    try {
        const logs = await Log.find();
        res.json(logs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one log
router.get('/:id', getLog, (req, res) => {
    res.send(res.log.name)
});

// Update one log
router.patch('/:id', async (req, res) => {
    if(req.body.id != null) {
        res.log.id = req.body.id;
    }

    if(req.body.date != null) {
        res.log.date = req.body.date;
    }
    
    if(req.body.level != null) {
        res.log.level = req.body.level;
    }

    if(req.body.message != null) {
        res.log.message = req.body.message;
    }

    try {
        const updatedLog = await res.log.save();
        res.json(updatedLog);
    } catch (err) {
        res.status(400).json({ message: err.message });
     }

});

// Delete one log
router.delete('/:id', getLog, async (req, res) => {
    try {
        await res.log.remove();
        res.json({ message: 'Deleted log' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



// ---- Other endpoints ----
// Get all logs by user
// Get all logs by date
// Get all logs by category



// MIDDLEWARE
async function getLog(req, res, next) {
    try {
        log = await Log.findById(req.params.id);
        if (log == null) {
            return res.status(404).json({ message: 'Cannot find log' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.log = log;
    next();
}


module.exports = router;