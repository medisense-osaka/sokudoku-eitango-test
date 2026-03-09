import csv
import json

# ========== 単語データ変換 ==========
csv_path = '速読英単語DB - シート1.csv'
data_list = []

with open(csv_path, 'r', encoding='utf-8') as f:
    reader = csv.reader(f)
    for i, row in enumerate(reader):
        # Skip header
        if i == 0:
            continue
            
        # Check if line is valid (at least 5 columns)
        if len(row) < 5:
            continue
            
        # Parse columns
        try:
            # D列(3)が単語、E列(4)が意味
            word = row[3].strip()
            meaning = row[4].strip()
            
            # C列(2)がUnit番号。ただし空の場合や存在しない場合はデフォルトを入れる
            unit_val = row[2].strip() if len(row) > 2 else ""
            unit = unit_val if unit_val else "1"
            
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

print(f"[単語] converted {len(data_list)} words.")

# ========== 熟語データ変換 ==========
idiom_csv_path = '英熟語DB - シート1.csv'
idiom_list = []
seen = set()  # 重複除去用

with open(idiom_csv_path, 'r', encoding='utf-8') as f:
    reader = csv.reader(f)
    for i, row in enumerate(reader):
        # Skip header
        if i == 0:
            continue
            
        # Check if line is valid (at least 2 columns)
        if len(row) < 2:
            continue
            
        word = row[0].strip()
        meaning = row[1].strip()
        
        # Skip if word or meaning is empty
        if not word or not meaning:
            continue
        
        # 重複除去: 同一の英語+日本語ペアをスキップ
        key = (word, meaning)
        if key in seen:
            continue
        seen.add(key)
            
        idiom_list.append({
            'id': len(idiom_list) + 1,
            'word': word,
            'meaning': meaning,
            'phonetic': '',
            'example': '',
            'example_translation': '',
            'unit': '1'
        })

# Output JS file
with open('idiom_data.js', 'w', encoding='utf-8') as f:
    json_str = json.dumps(idiom_list, ensure_ascii=False, indent=4)
    f.write(f"const idiomData = {json_str};")

print(f"[熟語] converted {len(idiom_list)} idioms (removed {len(seen) - len(idiom_list) + (i - len(seen))} duplicates).")
