from flask import Flask, request, send_from_directory, render_template


app = Flask(__name__, static_folder='static')
app.debug =True


@app.route('/')
def home():
	return render_template('index.html')

@app.route('/js/<path:filename>')
def jsRoute(filename):
	return send_from_directory("static/js/", filename)

@app.route('/css/<path:filename>')
def cssRoute(filename):
	return send_from_directory("static/css/", filename)

@app.route('/font/<path:filename>')
def dataRoute(filename):
	return send_from_directory("static/font/", filename)

@app.route('/images/<path:filename>')
def imagesRoute(filename):
	return send_from_directory("static/images/", filename)

if(__name__ ==  "__main__"):
	app.run();

