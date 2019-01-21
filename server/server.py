from flask import Flask, render_template, jsonify

app = Flask(__name__, static_folder='../static/dist', template_folder='../static/templates')

@app.route('/')
def index():
	return render_template('index.html')

if __name__ == '__main__':
	app.run()
