from flask import Flask
from flask import render_template
from json import dumps
from pymongo import MongoClient
from bson import ObjectId, json_util
from flask import request
from flask import redirect, url_for, jsonify

app = Flask(__name__)

client = MongoClient()
db = client.to_the_beat
collection = db.slideshow_collection


@app.route('/<_id>')
@app.route('/')
def home(_id=None):
    return render_template('index.html', _id=_id)


@app.route('/create', methods=['POST', 'GET'])
def create():
    if request.method == 'POST':
        return redirect(url_for('home'))
    else:
        vid = jsonifyRequest(request)
        _id = collection.insert(vid)
        return redirect(url_for('home', _id=_id))


@app.route('/get_data/<_id>')
def get_data(_id):
    data = collection.find_one({"_id": ObjectId(_id)})
    return dumps(data, sort_keys=True, indent=4, default=json_util.default)


def jsonifyRequest(request):
    images = ['https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR3doxGuyD7TzHL6R8b35G3_UtpYmRjzGliUX7YfnMkGqrW9Sz0',
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbZ4LWZzZzJxm3psPlfU2LhULTuiofAz2huEqihTpkmHEIB1HH',
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-6QRMoY1p0svcMARjR4dUSymYQsFzY3Wy7SpVbbPI9AEql5DYhA',
              'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQMFZVteoNJxkEp-DBlQm74mjfDjUQOEubR3eFA3Hs0D3TA3oB97Q',
              'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSUw0YMb0Cz9yHUKM5cleRCnAVEZ6FpAc81eS795kSZAyczfoJr']
    song = "hi"
    intervals = [5000, 2500, 1000, 100, 10]
    return {'images': images, 'song': song, 'intervals': intervals}


if __name__ == "__main__":
    app.run(debug=True)
