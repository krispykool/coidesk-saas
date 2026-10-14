import axios from 'axios';

interface COIData {
  vendor_name: string;
  broker: string;
  policy_number: string;
  coverage_types: string[];
  expiration_date: string;
  coverage_limits: {
    general_liability?: string;
    workers_comp?: string;
    auto_liability?: string;
  };
  warnings: string[];
}

export async function extractCOIData(base64PDF: string): Promise<COIData> {
  const apiKey = process.env.CLAUDE_API_KEY;
  
  if (!apiKey) {
    throw new Error('CLAUDE_API_KEY not set in environment');
  }

  const prompt = `You are an expert at reading Certificate of Insurance (COI) documents (ACORD 25 forms).

Extract the following information from this COI document:
1. Vendor/Insured name
2. Broker name
3. Policy number
4. Coverage types (General Liability, Workers Compensation, Auto, etc.)
5. Expiration date (in YYYY-MM-DD format)
6. Coverage limits for each type
7. Any red flags or warnings (expired, insufficient coverage, etc.)

Return ONLY a valid JSON object with this exact structure (no markdown, no extra text):
{
  "vendor_name": "string",
  "broker": "string",
  "policy_number": "string",
  "coverage_types": ["string"],
  "expiration_date": "YYYY-MM-DD",
  "coverage_limits": {
    "general_liability": "string",
    "workers_comp": "string",
    "auto_liability": "string"
  },
  "warnings": ["string"]
}`;

  try {
    const response = await axios.post(
      'https://api.anthropic.com/v1/messages',
      {
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1024,
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'image',
                source: {
                  type: 'base64',
                  media_type: 'application/pdf',
                  data: base64PDF,
                },
              },
              {
                type: 'text',
                text: prompt,
              },
            ],
          },
        ],
      },
      {
        headers: {
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
        },
      }
    );

    const content = response.data.content[0].text;
    const data = JSON.parse(content) as COIData;
    
    return data;
  } catch (error) {
    console.error('Claude API error:', error);
    throw error;
  }
}
