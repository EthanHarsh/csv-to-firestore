import 'dotenv/config';
import axios from 'axios';
import {readFileSync} from 'fs';
import {parse} from 'csv-parse/sync';

readCSV();

async function readCSV() {
    const csvPaths = ['/workspaces/csv-to-firebase/csv/transactions.csv', '/workspaces/csv-to-firebase/csv/transactions_items.csv'];

    for (const path of csvPaths) {
        const data = readFileSync(path, 'utf-8');
        const csvObj = parseCSV(data);
        let collection = path.split('/csv/')[1];
        collection = collection.split('.')[0];
        for (const obj of csvObj) {
            const response = await sendDataToFirestore(obj, collection);
            // @ts-ignore
            if (response) {
                console.log(Object.keys(response));
            }
        }
    }
}

function parseCSV(csv: string) {
    const parsed = parse(csv, {
      delimiter: ',',
      columns: true,
    });
    return parsed;
}

async function sendDataToFirestore(data, collection) {
    console.log(data);
    console.log(collection);
    await axios.post('https://save-to-firestore-temp-m4qit37hiq-uc.a.run.app', {
		collection,
		data,
	}, {
		headers: {
			key: process.env.FIRESTORE_SAVE_KEY,
		}
	}).catch((err) => {
		console.error(`Error saving to firestore: ${JSON.stringify(err)}`);
		console.error(err);
	})
}