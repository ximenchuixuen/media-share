const express = require('express');
const axios = require('axios');
const path = require('path');
const mediaController = require('./mediaController')

const router = express.Router();

// router.post('/', mediaController.findMedia, mediaController.createMedia, mediaController.findUser, mediaController.createReview, (req, res) => {
//   return res.status(200).json(res.locals.review)
// })

// router.post('/createmedia', mediaController.createMedia)

// router.delete('/:id', mediaController.deleteMedia)

// router.get('/:id', mediaController.findMediaByID)

router.get('/list', async (req, res) => {
  try {
    const url = "https://prod-49.eastus.logic.azure.com:443/workflows/2c8da8c1ec5c41908e90cfb0457787f7/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=kw4vD6Q-f6_eaUI7dCOt9RgvrQmFMe5VOtzECy36n30";
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/delete', async (req, res) => {
  try {
    const url = "https://prod-50.eastus.logic.azure.com:443/workflows/8e135dab156948828d9de3db2908016b/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=hG8mQ6p1EXIiSAZSoN_6x2x8GfgWy1ZnnPXmHfthDrM";
    const response = await axios.post(url, req.body);
    if (response.status === 200) {
      res.json({ isSuccess: true });
    } else {
      res.json({ isSuccess: false });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/edit', async (req, res) => {
  try {
    const url = "https://prod-74.eastus.logic.azure.com:443/workflows/abdd413e5d834b7f951f79f7cd689f92/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=zhWWgbeyXtRL1LpguvPQVtdTbA8Z26c17CCrpGgTj54";
    const response = await axios.post(url, req.body);
    if (response.status === 200) {
      res.json({ isSuccess: true });
    } else {
      res.json({ isSuccess: false });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/one', async (req, res) => {
  try {
    const url = "https://prod-13.eastus.logic.azure.com:443/workflows/25b3d92a3e924ac0b51d9f796560e9a0/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=111ITigrVgmXvqVf4l3YC5VCi9iL7Moum0hijHGfzRI";
    const response = await axios.post(url, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/add', async (req, res) => {
  try {
    const url = "https://prod-02.eastus.logic.azure.com:443/workflows/056f6d47bb7d41ecbe99393d1b7c83b3/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=JlF4VqQbjIG4JiklPz0XmfEAGZQeFkiSnIeM-d2WO5s";
    const response = await axios.post(url, req.body);
    if (response.status === 200) {
      res.json({ isSuccess: true });
    } else {
      res.json({ isSuccess: false });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;