import sys
from PIL import Image

def remove_white_bg(input_path, output_path):
    print(f"Opening {input_path}")
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    
    new_data = []
    # The background is solid white. We will make anything close to white transparent.
    # To preserve anti-aliased edges (like hair), we can convert white to transparent 
    # while keeping the RGB values for darker pixels.
    # A simple approach for white backgrounds: 
    # Alpha = 255 - max(R,G,B) if it's very bright? No, just use a threshold for the background.
    
    for item in data:
        # If the pixel is very close to white, make it completely transparent
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    
    # Save the output
    img.save(output_path, "PNG")
    print(f"Saved {output_path}")

if __name__ == "__main__":
    remove_white_bg(sys.argv[1], sys.argv[2])
