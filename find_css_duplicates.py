#!/usr/bin/env python3
"""
CSS Duplicate Finder
Finds exact duplicate CSS rules across all CSS files in the assets directory.
"""

import os
import re
from collections import defaultdict
from pathlib import Path

def parse_css_file(filepath):
    """Parse a CSS file and extract rules."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove comments
        content = re.sub(r'/\*.*?\*/', '', content, flags=re.DOTALL)
        
        # Extract CSS rules (selector { properties })
        rules = []
        # Match selector { ... }
        pattern = r'([^{]+)\{([^}]+)\}'
        matches = re.finditer(pattern, content)
        
        for match in matches:
            selector = match.group(1).strip()
            properties = match.group(2).strip()
            
            # Normalize whitespace
            selector = re.sub(r'\s+', ' ', selector)
            properties = re.sub(r'\s+', ' ', properties)
            
            # Create a normalized version for comparison
            normalized_props = sorted([p.strip() for p in properties.split(';') if p.strip()])
            normalized_props_str = '; '.join(normalized_props)
            
            rules.append({
                'selector': selector,
                'properties': properties,
                'normalized': normalized_props_str,
                'file': str(filepath)
            })
        
        return rules
    except Exception as e:
        print(f"Error parsing {filepath}: {e}")
        return []

def find_duplicates(css_files):
    """Find duplicate CSS rules across files."""
    all_rules = []
    rule_map = defaultdict(list)
    
    # Parse all CSS files
    for css_file in css_files:
        rules = parse_css_file(css_file)
        all_rules.extend(rules)
        
        for rule in rules:
            # Use normalized properties as key
            key = rule['normalized']
            rule_map[key].append(rule)
    
    # Find duplicates (same properties, different selectors)
    duplicates = {}
    for normalized, rules in rule_map.items():
        if len(rules) > 1:
            # Group by selector to find exact duplicates
            selector_groups = defaultdict(list)
            for rule in rules:
                selector_groups[rule['selector']].append(rule)
            
            # Find selectors that appear in multiple files
            for selector, rule_list in selector_groups.items():
                if len(rule_list) > 1:
                    files = [r['file'] for r in rule_list]
                    if len(set(files)) > 1:  # Same selector in different files
                        duplicates[normalized] = {
                            'selector': selector,
                            'properties': rule_list[0]['properties'],
                            'files': files,
                            'count': len(rule_list)
                        }
    
    return duplicates

def find_similar_rules(css_files):
    """Find similar CSS rules (same selectors, different properties)."""
    selector_map = defaultdict(list)
    
    for css_file in css_files:
        rules = parse_css_file(css_file)
        for rule in rules:
            selector_map[rule['selector']].append({
                'file': str(css_file),
                'properties': rule['properties'],
                'normalized': rule['normalized']
            })
    
    similar = {}
    for selector, rules in selector_map.items():
        if len(rules) > 1:
            files = [r['file'] for r in rules]
            if len(set(files)) > 1:  # Same selector in different files
                similar[selector] = {
                    'selector': selector,
                    'rules': rules,
                    'files': list(set(files)),
                    'count': len(rules)
                }
    
    return similar

def main():
    assets_dir = Path(__file__).parent / 'assets'
    
    if not assets_dir.exists():
        print(f"Assets directory not found: {assets_dir}")
        return
    
    # Get all CSS files
    css_files = list(assets_dir.glob('*.css'))
    css_files = [f for f in css_files if f.name not in ['main.min.css', 'xo-webcomponents.min.css']]
    
    print(f"Analyzing {len(css_files)} CSS files...")
    print("=" * 80)
    
    # Find exact duplicates
    print("\n1. EXACT DUPLICATES (Same properties, same selector, different files):")
    print("=" * 80)
    duplicates = find_duplicates(css_files)
    
    if duplicates:
        for i, (normalized, dup_info) in enumerate(duplicates.items(), 1):
            print(f"\n{i}. Selector: {dup_info['selector']}")
            print(f"   Properties: {dup_info['properties'][:100]}...")
            print(f"   Found in {dup_info['count']} files:")
            for file in dup_info['files']:
                print(f"     - {Path(file).name}")
    else:
        print("No exact duplicates found.")
    
    # Find similar rules
    print("\n\n2. SIMILAR RULES (Same selector, different properties, different files):")
    print("=" * 80)
    similar = find_similar_rules(css_files)
    
    if similar:
        count = 0
        for selector, sim_info in list(similar.items())[:20]:  # Show first 20
            count += 1
            print(f"\n{count}. Selector: {selector}")
            print(f"   Found in {len(sim_info['files'])} files:")
            for file in sim_info['files']:
                print(f"     - {Path(file).name}")
            print(f"   Property variations: {len(sim_info['rules'])}")
        
        if len(similar) > 20:
            print(f"\n... and {len(similar) - 20} more similar selectors")
    else:
        print("No similar rules found.")
    
    # Summary
    print("\n\n3. SUMMARY:")
    print("=" * 80)
    print(f"Total CSS files analyzed: {len(css_files)}")
    print(f"Exact duplicates found: {len(duplicates)}")
    print(f"Similar selectors found: {len(similar)}")
    
    # File size analysis
    print("\n\n4. FILE SIZES:")
    print("=" * 80)
    file_sizes = []
    for css_file in sorted(css_files, key=lambda x: x.stat().st_size, reverse=True):
        size = css_file.stat().st_size
        file_sizes.append((css_file.name, size))
        print(f"{css_file.name:50} {size:8,} bytes ({size/1024:.1f} KB)")
    
    total_size = sum(size for _, size in file_sizes)
    print(f"\nTotal CSS size: {total_size:,} bytes ({total_size/1024:.1f} KB)")

if __name__ == '__main__':
    main()

