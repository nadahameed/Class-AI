from flask import Flask, request, jsonify
import face_recognition
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)

def compare_faces(file_stream1, file_stream2):
    # Load images from file streams
    image1 = face_recognition.load_image_file(file_stream1)
    image2 = face_recognition.load_image_file(file_stream2)

    # Detect faces and encode the first face found in each image
    face_encodings_1 = face_recognition.face_encodings(image1)
    face_encodings_2 = face_recognition.face_encodings(image2)

    if face_encodings_1 and face_encodings_2:
        # Compare the first face found in each image
        match_result = face_recognition.compare_faces([face_encodings_1[0]], face_encodings_2[0])
        return match_result[0]
    else:
        return None  # No faces detected in one or both images

@app.route('/compare_faces', methods=['POST'])
def handle_compare_faces():
    # Check if both files are provided
    if 'image1' not in request.files or 'image2' not in request.files:
        return jsonify({"error": "Please provide two images."}), 400
    
    file1 = request.files['image1']
    file2 = request.files['image2']

    # Secure filenames and save temporarily if needed
    filename1 = secure_filename(file1.filename)
    filename2 = secure_filename(file2.filename)
    temp_path1 = os.path.join('tmp', filename1)
    temp_path2 = os.path.join('tmp', filename2)
    file1.save(temp_path1)
    file2.save(temp_path2)

    # Compare faces
    result = compare_faces(temp_path1, temp_path2)

    # Clean up temporary files
    os.remove(temp_path1)
    os.remove(temp_path2)

    if result is None:
        return jsonify({"error": "No face detected in one or both images."}), 400
    else:
        return jsonify({"same_person": result})

if __name__ == "__main__":
    app.run(debug=True)
