import sys
from pypdf import PdfReader

# Set stdout to handle utf-8
sys.stdout.reconfigure(encoding='utf-8')

reader = PdfReader(r"C:\Users\Computer\.gemini\antigravity\brain\c77fa0c8-e70a-4631-b3d4-b191e6db2ea7\.tempmediaStorage\88ffd590d78e903c.pdf")
text = ""
for i in range(min(3, len(reader.pages))):
    text += reader.pages[i].extract_text() + "\n"

print(text)
