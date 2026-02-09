import csv
import json

csv_path = '速読英単語DB - シート1.csv'
data_list = []

with open(csv_path, 'r', encoding='utf-8') as f:
    reader = csv.reader(f)
    for row in reader:
        # Check if line is valid (at least 5 columns)
        if len(row) < 5:
            continue
            
        # Parse columns
        try:
            unit = row[1].strip()
            word = row[3].strip()
            meaning = row[4].strip()
        except IndexError:
            continue
        
        # Skip if word or meaning is empty
        if not word or not meaning:
            continue
            
        data_list.append({
            'id': len(data_list) + 1,
            'word': word,
            'meaning': meaning,
            'phonetic': '',
            'example': '',
            'example_translation': '',
            'unit': unit
        })

# Output JS file
with open('data.js', 'w', encoding='utf-8') as f:
    json_str = json.dumps(data_list, ensure_ascii=False, indent=4)
    f.write(f"const vocabularyData = {json_str};")

print(f"converted {len(data_list)} words.")
