from flask import Flask
from flask import render_template
from json import dumps
from pymongo import MongoClient, Connection
from bson import ObjectId, json_util
from flask import request
import os
from flask import redirect, url_for
import json

app = Flask(__name__)

client = Connection(os.environ['MONGOHQ_URL'])
#client = MongoClient()

db = client.app15128018
collection = db.slideshow_collection


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/create', methods=['GET', 'POST'])
def create():
    if request.method == 'GET':
        images = [str(url) for url in request.args.get('images').split(',')]
        song = "'" + str(request.args.get('song')) + "'"
        return render_template('create.html', images=images, song=song)
    else:
        form = request.form
        images = form.getlist('images[]')
        song = form.getlist('song')[0]
        intervals = form.getlist('intervals[]')
        _id = collection.insert({'images': images,
                                 'song': song,
                                 'intervals': intervals})
        return '/watch/' + str(_id)


@app.route('/watch/<_id>')
def watch(_id):
    data = collection.find_one({"_id": ObjectId(_id)})
    return render_template('watching.html',
                           images=[str(s) for s in data['images']],
                           song="'" + str(data['song']) + "'",
                           intervals=[float(i) for i in data['intervals']])


@app.route('/get_data/<_id>')
def get_data(_id):
    data = collection.find_one({"_id": ObjectId(_id)})
    return dumps(data, sort_keys=True, indent=4, default=json_util.default)


if __name__ == "__main__":
    app.run(debug=True)
