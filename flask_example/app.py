from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello():

    # a = 'hello ' + 1
    return "<a href='#'>My website</a>"

@app.route('/page')
def page():

    # a = 'hello ' + 1
    return "my page "
