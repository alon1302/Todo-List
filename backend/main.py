from flask import Flask, render_template, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

data = [
    {'content': "alon", 'id': 1},
    {'content': "roy", 'id': 2},
]


@app.route('/tasks', methods=['GET'])
def get_all_tasks():
    return jsonify(data)


if __name__ == '__main__':
    app.debug = True
    app.run()
