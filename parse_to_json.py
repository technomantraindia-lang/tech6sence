import json
import re

txt_path = "extracted_docx_content.txt"
json_output_path = "src/data/deepTechData.json"

def clean_line(line):
    return line.strip()

def is_section_header(line):
    l = line.upper().strip()
    if not l:
        return False
    
    # Check exact headers or prefixes
    headers = [
        "HERO SECTION",
        "HERO HIGHLIGHTS",
        "PRODUCT OVERVIEW",
        "PRODUCT VISION",
        "CORE TECHNOLOGY INNOVATIONS",
        "KEY FEATURES",
        "PRODUCT BENEFITS",
        "INDUSTRIES WE SERVE",
        "ENTERPRISE USE CASES",
        "CONSUMER APPLICATIONS",
        "TECHNICAL SPECIFICATIONS",
        "PRODUCT ARCHITECTURE",
        "SOFTWARE PLATFORM",
        "ENTERPRISE INTEGRATIONS",
        "GLOBAL CERTIFICATIONS",
        "CUSTOMIZATION OPTIONS",
        "PRODUCT VARIANTS",
        "PRODUCT LIFECYCLE SERVICES",
        "FUTURE ROADMAP",
        "FINAL CALL TO ACTION"
    ]
    
    for h in headers:
        if l.startswith(h):
            return True
            
    # Fuzzy match security variations to prevent list item collision
    if l.startswith("SECURITY") and len(l) > 10:
        return True
    if l.startswith("SAFETY, SECURITY") and len(l) > 15:
        return True
    if l.startswith("SAFETY & SECURITY") and len(l) > 15:
        return True
    if l.startswith("SAFETY, PRIVACY") and len(l) > 15:
        return True
    if l.startswith("SAFETY & PRIVACY") and len(l) > 15:
        return True
        
    if l.startswith("WHY ") and l.endswith("?"):
        return True
        
    if l.startswith("WHY CHOOSE"):
        return True
        
    return False

def parse_docx_text():
    with open(txt_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    # First, let's find all product boundaries.
    # A product boundary is identified by finding "HERO SECTION".
    # The non-empty line before it is the tagline, and the non-empty line before that is the title.
    hero_indices = []
    for idx, line in enumerate(lines):
        if clean_line(line) == "HERO SECTION":
            hero_indices.append(idx)
            
    products = []
    for i, hero_idx in enumerate(hero_indices):
        # Find title and tagline
        # Go backwards from hero_idx to find the first two non-empty lines
        tagline = ""
        title = ""
        back_idx = hero_idx - 1
        while back_idx >= 0 and not tagline:
            val = clean_line(lines[back_idx])
            if val:
                tagline = val
            back_idx -= 1
        while back_idx >= 0 and not title:
            val = clean_line(lines[back_idx])
            if val:
                title = val
            back_idx -= 1
            
        # The block for this product goes from hero_idx to the next product's title line (or end of file)
        start_line = hero_idx
        if i + 1 < len(hero_indices):
            # The next product starts at hero_indices[i+1]. Let's trace back to find its title line
            next_hero_idx = hero_indices[i+1]
            next_back_idx = next_hero_idx - 1
            non_empty_count = 0
            while next_back_idx >= 0 and non_empty_count < 2:
                val = clean_line(lines[next_back_idx])
                if val:
                    non_empty_count += 1
                next_back_idx -= 1
            end_line = next_back_idx + 1
        else:
            end_line = len(lines)
            
        product_lines = lines[start_line:end_line]
        
        # Now parse the sections within this product
        product_data = {
            "title": title,
            "tagline": tagline,
            "sections": {}
        }
        
        current_section = "HERO SECTION"
        product_data["sections"][current_section] = []
        
        for p_line in product_lines:
            cleaned = clean_line(p_line)
            if is_section_header(cleaned):
                current_section = cleaned
                product_data["sections"][current_section] = []
            else:
                # Add to current section if not empty (or keep empty lines if we want exact spacing)
                # To be clean, let's keep all lines but strip them.
                product_data["sections"][current_section].append(cleaned)
                
        # Clean up empty lines from the start/end of section lists
        for sec in product_data["sections"]:
            sec_lines = product_data["sections"][sec]
            while sec_lines and sec_lines[0] == "":
                sec_lines.pop(0)
            while sec_lines and sec_lines[-1] == "":
                sec_lines.pop()
                
        products.append(product_data)
        
    # Write to JSON
    with open(json_output_path, 'w', encoding='utf-8') as out_f:
        json.dump({"products": products}, out_f, indent=2, ensure_ascii=False)
        
    print(f"Successfully parsed {len(products)} products into {json_output_path}!")
    for p in products:
        print(f" - {p['title']} ({len(p['sections'])} sections)")

if __name__ == "__main__":
    parse_docx_text()
