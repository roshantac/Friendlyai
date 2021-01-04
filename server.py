

# from werkzeug import secure_filename
from flask import Flask, render_template, request
import time
app = Flask(__name__)

@app.route('/')
def index():
   return render_template('index.html')


@app.route('/Imgclassification/')
def imgclassification():
    return render_template('Imgclassification.html')

@app.route('/upload/')
def uploadFiles():
   return render_template('upload.html')
# @app.route('/upload')
# def upload_file():
#    return render_template('upload.html')
	
@app.route('/uploader/', methods = ['GET', 'POST'])
def upload_file():
   print('fff')
   if request.method == 'POST':
      f = request.files['file']
      f.save(secure_filename(f.filename))
      return 'File uploaded successfully'

@app.route('/my-link/', methods = ['GET', 'POST'])
def hello_python():
   print("hello")
   if(request.method == 'POST'):
      print("hello post completed")
      uploaded_files = request.files.getlist("fileupload1")
      save(secure_filename(f.filename))
      print(uploaded_files)

   return "Completed"

if __name__ == '__main__':
   app.run(debug = True)



