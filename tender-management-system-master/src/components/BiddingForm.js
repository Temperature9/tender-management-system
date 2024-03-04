import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Autocomplete,
} from '@mui/material';

const BiddingForm = ({ onClose, previousDetails }) => {
  const [bidDescription, setBidDescription] = useState('');
  const [selectedWorkers, setSelectedWorkers] = useState([]);

  // Dummy list of workers (you can replace this with your actual list from the profile)
  const workersList = [
    { id: 1, name: 'Ronaldo' },
    { id: 2, name: 'Messi' },
    { id: 3, name: 'Neymar' },
    { id: 4, name: 'Gandhi' },
    { id: 5, name: 'Godsee' },
    // Add more workers as needed
  ];

  const filterOptions = (options, { inputValue }) => {
    // Filter out workers that have already been selected
    return options.filter(
      (option) =>
        selectedWorkers.findIndex((selected) => selected.id === option.id) === -1
    );
  };

  const handleBidSubmit = () => {
    // Add logic to handle bid submission
    console.log('Bid Description:', bidDescription);
    console.log('Selected Workers:', selectedWorkers);
    // Close the bidding form after submission
    onClose();
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Bid Form</DialogTitle>
      <DialogContent>
        {/* Display previous details */}
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          margin="normal"
          value={previousDetails.title}
          disabled
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          margin="normal"
          value={previousDetails.description}
          disabled
        />
        <TextField
          label="Deadline"
          variant="outlined"
          fullWidth
          margin="normal"
          value={previousDetails.deadline}
          disabled
        />
        {/* Bid description input */}
        <TextField
          label="Your Bid Description"
          variant="outlined"
          fullWidth
          margin="normal"
          value={bidDescription}
          onChange={(e) => setBidDescription(e.target.value)}
        />
        {/* Worker selection input for multiple workers */}
        <Autocomplete
          multiple
          options={workersList}
          getOptionLabel={(worker) => worker.name}
          value={selectedWorkers}
          onChange={(event, newValue) => setSelectedWorkers(newValue)}
          filterOptions={filterOptions}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Add Workers"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          )}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleBidSubmit}>Submit </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BiddingForm;
