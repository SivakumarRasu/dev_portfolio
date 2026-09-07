import cv2
import numpy as np
from PIL import Image

def extract_portrait(image_path, output_path):
    # Read image
    img = cv2.imread(image_path)
    h, w = img.shape[:2]

    # Define bounding box for person (margin: top 2%, left 5%, right 5%, bottom 0%)
    rect = (int(w * 0.05), int(h * 0.02), int(w * 0.9), int(h * 0.98))

    mask = np.zeros(img.shape[:2], np.uint8)
    bgdModel = np.zeros((1, 65), np.float64)
    fgdModel = np.zeros((1, 65), np.float64)

    # Run GrabCut iteration
    cv2.grabCut(img, mask, rect, bgdModel, fgdModel, 5, cv2.GC_INIT_WITH_RECT)

    # Modify mask: 0 and 2 are background, 1 and 3 are foreground
    mask2 = np.where((mask == 2) | (mask == 0), 0, 1).astype('uint8')
    
    # Convert BGR to RGBA
    img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    rgba = cv2.cvtColor(img_rgb, cv2.COLOR_RGB2RGBA)
    
    # Apply alpha channel
    rgba[:, :, 3] = mask2 * 255

    # Smooth alpha edges with light Gaussian blur on the mask
    alpha_mask = Image.fromarray((mask2 * 255).astype('uint8'))
    
    # Save output PNG
    out_img = Image.fromarray(rgba)
    out_img.save(output_path, "PNG")
    print("SUCCESSFULLY_EXTRACTED_PORTRAIT")

if __name__ == "__main__":
    extract_portrait("public/assets/profile.jpg", "public/assets/profile_cutout.png")
