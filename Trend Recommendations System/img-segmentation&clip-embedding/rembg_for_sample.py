import os
from rembg import remove
from PIL import Image

input_dir = 'D:/clip-embedding/samples'
output_dir = 'D:/clip-embedding/processed_samples'

os.makedirs(output_dir, exist_ok=True)

for filename in os.listdir(input_dir):
    input_path = os.path.join(input_dir, filename)
    output_path = os.path.join(output_dir, filename)

    if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
        try:
            image_input = Image.open(input_path)

            output = remove(image_input)

            if output.mode == 'RGBA':
                output_path = os.path.splitext(output_path)[0] + '.png'
                output.save(output_path, format='PNG')
            else:
                output = output.convert('RGB')
                output_path = os.path.splitext(output_path)[0] + '.jpg'
                output.save(output_path, format='JPEG')

            print(f"Processed {filename}")

        except Exception as e:
            print(f"Failed to process {filename}: {e}")

print("Processing complete.")
