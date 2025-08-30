import cv2
import numpy as np
import os
from datetime import datetime

def apply_filter(image, filter_name="none"):
    if filter_name == "sepia":
        kernel = np.array([[0.272, 0.534, 0.131],
                           [0.349, 0.686, 0.168],
                           [0.393, 0.769, 0.189]])
        sepia = cv2.transform(image, kernel)
        return np.clip(sepia, 0, 255).astype(np.uint8)
    elif filter_name == "bw":
        return cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    elif filter_name == "retro":
        return cv2.applyColorMap(image, cv2.COLORMAP_PINK)
    else:
        return image

def create_strip(images, frame_color=(255, 255, 255)):
    if not images:
        return None

    h, w = images[0].shape[:2]
    spacing = 20
    strip_h = h * len(images) + spacing * (len(images) + 1)
    strip_w = w + (2 * spacing)

    strip = np.full((strip_h, strip_w, 3), frame_color, dtype=np.uint8)

    y_offset = spacing
    for img in images:
        if len(img.shape) == 2:
            img = cv2.cvtColor(img, cv2.COLOR_GRAY2BGR)
        strip[y_offset:y_offset+h, spacing:spacing+w] = img
        y_offset += h + spacing

    return strip

def start_session(filter_name="none", save_dir="output"):
    save_dir = os.path.abspath(save_dir)  # absolute path for Windows
    os.makedirs(save_dir, exist_ok=True)

    cap = cv2.VideoCapture(0)
    captured = []
    print("[INFO] Press SPACE to capture, ESC to exit")

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        preview = apply_filter(frame, filter_name)
        cv2.imshow("Aesthetic Photo Booth", preview)

        key = cv2.waitKey(1) & 0xFF
        if key == 32:  # SPACE
            captured.append(preview.copy())
            photo_filename = os.path.join(save_dir, f"photo_{len(captured)}.png")
            success = cv2.imwrite(photo_filename, captured[-1])
            print(f"[INFO] Captured photo {len(captured)} → {photo_filename}, saved={success}")

            if len(captured) == 4:
                strip = create_strip(captured)
                strip_filename = os.path.join(save_dir, f"strip_{datetime.now().strftime('%Y%m%d_%H%M%S')}.png")
                success = cv2.imwrite(strip_filename, strip)
                print(f"[INFO] Saved strip → {strip_filename}, saved={success}")
                captured.clear()

        elif key == 27:  # ESC
            break

    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    start_session(filter_name="sepia")
