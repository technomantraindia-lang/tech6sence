import zipfile
import xml.etree.ElementTree as ET
import os

docx_path = "All Inner pages contents for deep-Tech Products.docx"
out_path = "extracted_docx_content.txt"

def docx_to_text(path):
    try:
        with zipfile.ZipFile(path) as z:
            xml_content = z.read('word/document.xml')
            root = ET.fromstring(xml_content)
            
            paragraphs = []
            for para in root.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
                texts = [node.text for node in para.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if node.text]
                if texts:
                    paragraphs.append("".join(texts))
                else:
                    paragraphs.append("")
            return "\n".join(paragraphs)
    except Exception as e:
        return f"Error: {e}"

text = docx_to_text(docx_path)
with open(out_path, 'w', encoding='utf-8') as f:
    f.write(text)
print(f"Extraction complete. Saved to {out_path}. File size: {len(text)} characters.")
