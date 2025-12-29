#!/bin/bash

# Convert images to WebP format
# This script converts PNG and JPG images to WebP with optimization

echo "🖼️  Converting images to WebP format..."
echo "========================================"

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "❌ Error: cwebp is not installed"
    echo "Install with: brew install webp"
    exit 1
fi

# Counter
converted=0
skipped=0

# Function to convert image
convert_image() {
    local input="$1"
    local output="${input%.*}.webp"
    local quality="$2"
    
    # Skip if WebP already exists and is newer
    if [ -f "$output" ] && [ "$output" -nt "$input" ]; then
        echo "⏭️  Skipping (already exists): $input"
        ((skipped++))
        return
    fi
    
    echo "🔄 Converting: $input → $output (quality: $quality%)"
    
    if cwebp -q "$quality" "$input" -o "$output" 2>/dev/null; then
        # Get file sizes
        original_size=$(stat -f%z "$input" 2>/dev/null || stat -c%s "$input" 2>/dev/null)
        new_size=$(stat -f%z "$output" 2>/dev/null || stat -c%s "$output" 2>/dev/null)
        
        # Calculate savings
        if [ "$original_size" -gt 0 ]; then
            savings=$((100 - (new_size * 100 / original_size)))
            echo "   ✅ Saved ${savings}% ($(numfmt --to=iec-i --suffix=B $original_size) → $(numfmt --to=iec-i --suffix=B $new_size))"
        else
            echo "   ✅ Done"
        fi
        
        ((converted++))
    else
        echo "   ❌ Failed to convert"
    fi
}

# Convert critical images (high quality)
echo ""
echo "🔴 Converting critical images (quality: 85%)..."
echo "------------------------------------------------"

# Professional avatars
if [ -f "public/professional-woman-avatar.png" ]; then
    convert_image "public/professional-woman-avatar.png" 85
fi

# Convert screenshots (medium quality)
echo ""
echo "🟡 Converting screenshots (quality: 80%)..."
echo "--------------------------------------------"

if [ -f "public/assets/Screenshot-PageSpeed.png" ]; then
    convert_image "public/assets/Screenshot-PageSpeed.png" 80
fi

# Convert other PNG/JPG images (good quality)
echo ""
echo "🟢 Converting other images (quality: 80%)..."
echo "---------------------------------------------"

# Find and convert all PNG and JPG files
find public -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) | while read -r file; do
    # Skip if already converted above
    case "$file" in
        *professional-woman-avatar.png|*Screenshot-PageSpeed.png)
            continue
            ;;
    esac
    
    convert_image "$file" 80
done

# Summary
echo ""
echo "========================================"
echo "📊 Summary:"
echo "   ✅ Converted: $converted images"
echo "   ⏭️  Skipped: $skipped images"
echo ""
echo "✅ Done!"
