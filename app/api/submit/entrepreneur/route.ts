import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      id,
      firstname,
      lastname,
      email,
      country,
      description,
      companyname,
      industry,
      location,
      linkedinurl,
      outreach,
    } = body;
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email:
          'campustalkative@aerial-ceremony-306120.iam.gserviceaccount.com',
        client_id: '105781551872730851795',
        private_key:
          '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDRsg7oNee7ert2\nlKPTpr8zgnwXmTVTyppOu9BmxPT52x/BupARp1HrCZTPrZ35MYgxdgpXcl2HGkti\nICRZy/SRauszKM3ri9eDz4hKZIdeUgoF5v61Ssb11Z4X410wAHepHHnf/qMCbSZe\nFb+nHvc39iFCYZwPKj5gOgErSzVbgPIHRBL3ghWEM9VSA0Nvh8gytK7EfGc7dWSN\nHJ4rEEkE+Bo8ehq0l3PFY5RPJ7ExriEoWRyKnB88RuQ9VtQEAYgVxVOOlsB5AkvB\nJkF46ZIJMxD5AvBtMmE4ZP/96JR63RizPJo7AFQW8lve2DTq8Ckmt63llmEnhDFA\nznc0l9T3AgMBAAECggEAO5UR6kYizaD+ch+i+ykWi+7IDraAMgpP1Q5FlWXiS7pI\n6DV36SQ3QQbsayQkTmGWFqO5JYa/73r3r259law/ljAgm109QW/vMSs/SRAObKz3\n3xx3BBE2vjRP4u6+FD0Vww3tzUkfjTlxXOtmFPjV+ucrJR7yBlcU+SeSHHiWtSRH\nAFR6LVfP+VKS/B3KeaGdL3u9kxJM7uurEZC7kDcdfNVz9UCpeMjGnIHDkyRSixOT\nlztaebl8Mgp9s8By7TJEht5l3p1CYCOFIDLsDvfHoBwpXo+1yClGhTVWzgEYT7Wb\n7xMSGx6p/dsle93ZK3hZL6L8MdHN7mps0ubeJrcgGQKBgQD1JC38QmGwceOvLdZC\nN4jz5RzA1apTOoTQE9C6tnQNHoKznIGxPx70c/Ywx4oEwIgrbQ9T3Wo7knValL7a\nM48NQcJmkbVXzRg7gb9vsLHMcQR31l6hIYSs1kzNSgzmXkZMRKZIx/WFcpfzWLWs\nUxmrXaeKi3gvD4/u1SvbEbJn7wKBgQDa++9uNM6bNSDKlHuM1UJhYtBXebT7PAL3\nrESpknlxacvwDKgmkibMDZI0H2PpJUtmJ6IoPBSg9brbmPXq0g9SkQxTZmepJF8s\n2nIjFGp28/96jsWoFgAcn8ujRQicEhnMB+ERZ1+rVoiDTdPF+nntTIIEq5C5GvB3\n/Xr2FBmbeQKBgHW5jz/y3RkwSIiLObcJFoMSR1GwCqD3nGqU6YuRLYBTY68//OST\nDJmWyuc4HGcV0w8Py+mZjnfXaPY8Mr91PUC/kM1TMkRdIUMKl1XbBDfLGrs2PrGg\n+CdMrwtzgWhsY9Qir7yKErWoh6J8uppsOgqa6mfVfL0U+ylWRD5rbEMPAoGATmU/\nFC8nf/0HHj8F9CcsunyLpaVWm1KipVQwyJw9idKcRfXiBNzxsr9xBePu+rp1Qb8S\nmGDZ6b3PBWq/Ly/AeIig5wKUPcNdp0sU7WYTrz4uygtuy3wE0jqKxoqiSG1aeuaf\nNoHRiB9Ug91K4WeIWuG28kERcJMqX2qJqKsNd9ECgYEAk4/5LJDdxUZm4aRaez+K\nKEnepqKNRyg219IrH4nGBiMpmgNHbksi9Pa2zIJsoZkUEh09KtA61lLOGJssgjrU\nUWJswAdKs773VvmKjjMbpogZpS6r3G8UCKfIYaxZs0ONBSB+Pbew3uR+SsdOVzkQ\nDdPsEFd+VA5OWaipPWZgNZ8=\n-----END PRIVATE KEY-----\n'.replace(
            /\\n/g,
            '\n',
          ),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({
      auth,
      version: 'v4',
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: '1zWf0ujZTDHRzAejU4qQI8ZbIT96h_7MurQ-GpDbOB-M',
      range: 'Sheet2!A2:C',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            id,
            firstname,
            lastname,
            email,
            country,
            description,
            companyname,
            industry,
            location,
            linkedinurl,
            outreach,
          ],
        ],
      },
    });
    return NextResponse.json(response.data);
  } catch {
    return new NextResponse('internal server error', { status: 500 });
  }
}
