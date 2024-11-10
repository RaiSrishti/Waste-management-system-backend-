const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());

let complaintsQueue = [];
let complaintsHistory = [];

function prioritizeComplaint(complaint) {
    if (complaint.type === 'health-risk') {
        return 1; 
    } else if (complaint.type === 'repeated-missed') {
        return 2;
    } else {
        return 3;  
    }
}

function logToFile(complaint) {
    const logEntry = `${complaint.id},${complaint.status},${complaint.date}\n`;
    fs.appendFile('daily-log.csv', logEntry, (err) => {
        if (err) throw err;
    });
}

app.post('/complaint', (req, res) => {
    const { id, type, location, description } = req.body;
    const priority = prioritizeComplaint({ type });
    
    const complaint = {
        id,
        type,
        location,
        description,
        status: 'pending',
        date: new Date().toISOString(),
        priority
    };

    complaintsQueue.push(complaint);
    complaintsQueue.sort((a, b) => a.priority - b.priority); 

    res.status(201).send({ message: 'Complaint registered successfully', complaint });
});

app.get('/complaints', (req, res) => {
    const unresolvedComplaints = complaintsQueue.filter(complaint => complaint.status === 'pending');
    res.status(200).send(unresolvedComplaints);
});

app.put('/complaint/:id/resolve', (req, res) => {
    const complaintId = req.params.id;
    const complaint = complaintsQueue.find(c => c.id === complaintId);

    if (!complaint) {
        return res.status(404).send({ message: 'Complaint not found' });
    }

    complaint.status = 'resolved';
    complaintsHistory.push(complaint); 
    //removing from queue
    complaintsQueue = complaintsQueue.filter(c => c.id !== complaintId); 

    logToFile(complaint);

    res.status(200).send({ message: 'Complaint resolved', complaint });
});
//get the daily logs
app.get('/logs', (req, res) => {
    fs.readFile('daily-log.csv', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send({ message: 'Error reading logs' });
        }
        res.status(200).send(data);
    });
});


const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
