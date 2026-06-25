import json

log_path = r"C:\Users\vivek patel\.gemini\antigravity-ide\brain\4a810485-94be-4332-9ad8-456fce04dc5d\.system_generated\logs\transcript_full.jsonl"
with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        data = json.loads(line)
        step = data.get('step_index')
        if step == 54:
            print("Step 54 details:")
            for call in data.get('tool_calls', []):
                print(json.dumps(call, indent=2))
