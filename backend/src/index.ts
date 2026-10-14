import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { extractCOIData } from './services/claude';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'COI Desk API is running' });
});

app.post('/api/certificates/extract', async (req: Request, res: Response) => {
  try {
    const { base64PDF } = req.body;

    if (!base64PDF) {
      return res.status(400).json({ error: 'base64PDF is required' });
    }

    const coiData = await extractCOIData(base64PDF);
    
    res.json({
      success: true,
      data: coiData,
    });
  } catch (error) {
    console.error('Extract error:', error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
});

app.listen(PORT, () => {
  console.log(`✅ COI Desk API running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
});
